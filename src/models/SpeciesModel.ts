import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { SpeciesEntity } from '../entities/SpeciesEntity';
import { Gateways } from '../gateways/Gateways';

export class SpeciesModel {
    private _gateways:   Gateways;
    private _species:    SpeciesEntity;
    private _characters: CharacterEntity[];
    private _films:      FilmEntity[];

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadData(id: number) {
        const speciesGateway = this._gateways.speciesGateway;
        this._species        = await speciesGateway.retrieveSpecies(`https://swapi.co/api/species/${id}/`);

        await Promise.all([ this.loadCharacters(), this.loadFilms() ]);
    }

    public getSpecies(): SpeciesEntity {
        return this._species;
    }

    public getCharacters(): CharacterEntity[] {
        return this._characters;
    }

    private async loadCharacters() {
        const species       = this._species;
        const characterUrls = species.getCharacterUrls();
        const characterPromises = [];
        const charactersGateway = this._gateways.charactersGateway;

        characterUrls.map((url: string) => {
            const promise = charactersGateway.retrieveCharacter(url);
            characterPromises.push(promise);
        });

        this._characters = await Promise.all(characterPromises);
    }

    public getFilms(): FilmEntity[] {
        return this._films;
    }

    private async loadFilms() {
        const species = this._species;
        const filmUrls = species.getFilmUrls();
        const filmPromises = [];
        const filmsGateway = this._gateways.filmsGateway;

        filmUrls.map((url: string) => {
            const promise = filmsGateway.retrieveFilm(url);
            filmPromises.push(promise);
        });

        this._films = await Promise.all(filmPromises);
    }
}