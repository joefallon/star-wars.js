import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { Gateways } from '../gateways/Gateways';
import { PlanetEntity } from '../entities/PlanetEntity';

export class PlanetModel {
    private _gateways:  Gateways;
    private _planet:    PlanetEntity;
    private _films:     FilmEntity[];
    private _residents: CharacterEntity[];

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadPlanetData(id: number): Promise<null> {
        const planetsGateway = this._gateways.planetsGateway;
        const planet = await planetsGateway.retrievePlanet(`https://swapi.co/api/planets/${id}/`);
        this._planet = planet;

        await Promise.all([ this.loadFilms(), this.loadResidents() ]);

        return null;
    }

    public getPlanet(): PlanetEntity {
        return this._planet;
    }

    public getFilms(): FilmEntity[] {
        return this._films;
    }

    public getResidents() {
        return this._residents;
    }

    private async loadFilms(): Promise<null> {
        const filmsGateway = this._gateways.filmsGateway;
        const planet       = this._planet;
        const filmUrls     = planet.getFilmUrls();
        const filmPromises = [];

        filmUrls.map((url: string) => {
            const promise = filmsGateway.retrieveFilm(url);
            filmPromises.push(promise);
        });

        this._films = await Promise.all(filmPromises);

        return null;
    };

    private async loadResidents(): Promise<null> {
        const charactersGateway = this._gateways.charactersGateway;
        const planet            = this._planet;
        const characterUrls     = planet.getResidentCharacterUrls();
        const characterPromises = [];

        characterUrls.map((url: string) => {
            const promise = charactersGateway.retrieveCharacter(url);
            characterPromises.push(promise);
        });

        this._residents = await Promise.all(characterPromises);

        return null;
    }
}