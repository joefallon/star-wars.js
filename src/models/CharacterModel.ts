import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import PlanetEntity from '../entities/PlanetEntity';
import SpeciesEntity from '../entities/SpeciesEntity';
import StarshipEntity from '../entities/StarshipEntity';
import VehicleEntity from '../entities/VehicleEntity';
import Gateways from '../gateways/Gateways';

export default class CharacterModel {
    private static readonly BASE_URL = 'https://swapi.co/api/people/';

    private _gateways:  Gateways;
    private _character: CharacterEntity;
    private _homeworld: PlanetEntity;
    private _films:     FilmEntity[];
    private _vehicles:  VehicleEntity[];
    private _species:   SpeciesEntity[];
    private _starships: StarshipEntity[];

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadCharacterInformation(id: number) {
        const charactersGateway = this._gateways.charactersGateway;
        const characterUrl      = CharacterModel.BASE_URL + `${id}/`;
        this._character         = await charactersGateway.retrieveCharacter(characterUrl);

        let [homeworld, films, vehicles, species, starships] = await Promise.all([
            this.loadHomeworld(),
            this.loadFilms(),
            this.loadVehicles(),
            this.loadSpecies(),
            this.loadStarships()
        ]);

        this._homeworld = homeworld;
        this._films     = films;
        this._vehicles  = vehicles;
        this._species   = species;
        this._starships = starships;
    }

    public getCharacter(): CharacterEntity {
        return this._character;
    }

    public getHomeworld(): PlanetEntity {
        return this._homeworld;
    }

    public getFilms(): FilmEntity[] {
        return this._films;
    }

    public getSpecies(): SpeciesEntity[] {
        return this._species;
    }

    private async loadHomeworld(): Promise<PlanetEntity> {
        const character = this._character;
        const planetUrl = character.getHomePlanetUrl();
        const planetsGateway = this._gateways.planetsGateway;
        const planet = await planetsGateway.retrievePlanet(planetUrl);

        return planet;
    }

    private async loadFilms(): Promise<FilmEntity[]> {
        const character    = this._character;
        const filmsGateway = this._gateways.filmsGateway;
        const filmUrls     = character.getFilmUrls();
        const films        = [];

        filmUrls.map((url: string) => {
            const filmPromise = filmsGateway.retrieveFilm(url);
            films.push(filmPromise);
        });

        await Promise.all(films);

        return films;
    }

    private loadVehicles()  {
        return null;
    }

    private async loadSpecies(): Promise<SpeciesEntity[]> {
        // const character      = this._character;
        // const speciesGateway = this._gateways.speciesGateway;
        // const speciesUrl     = character.getSpeciesUrls();
        // const species        = await speciesGateway.retrieveSpecies(speciesUrl);
        //
        // return species;

        return null;
    }

    private loadStarships() {
        return null;
    }

}