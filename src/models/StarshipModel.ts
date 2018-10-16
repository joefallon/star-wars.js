import { Gateways } from '../gateways/Gateways';
import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { StarshipEntity } from '../entities/StarshipEntity';

export class StarshipModel {
    private _gateways: Gateways;
    private _starship: StarshipEntity;
    private _pilots:   CharacterEntity[];
    private _films:    FilmEntity[];

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadStarship(id: number) {
        const starshipsGateway = this._gateways.starshipsGateway;
        this._starship = await starshipsGateway.retrieveStarship(`https://swapi.co/api/starships/${id}/`);

        await Promise.all([this.loadPilots(), this.loadFilms()]);
    }

    public getStarship(): StarshipEntity {
        return this._starship;
    }

    public getPilots(): CharacterEntity[] {
        return this._pilots;
    }

    private async loadPilots() {
        const starship          = this._starship;
        const charactersGateway = this._gateways.charactersGateway;
        const pilotUrls         = starship.getPilotCharacterUrls();
        const promises          = [];

        pilotUrls.map((url: string) => {
            const promise = charactersGateway.retrieveCharacter(url);
            promises.push(promise);
        });

        this._pilots = await Promise.all(promises);
    }

    private async loadFilms() {
        const starship     = this._starship;
        const filmsGateway = this._gateways.filmsGateway;
        const filmUrls     = starship.getFilmUrls();
        const promises     = [];

        filmUrls.map((url: string) => {
            const promise = filmsGateway.retrieveFilm(url);
            promises.push(promise);
        });

        this._films = await Promise.all(promises);
    }

    public getFilms() {
        return this._films;
    }
}