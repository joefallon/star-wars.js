import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { PlanetEntity } from '../entities/PlanetEntity';
import { SpeciesEntity } from '../entities/SpeciesEntity';
import { StarshipEntity } from '../entities/StarshipEntity';
import { VehicleEntity } from '../entities/VehicleEntity';
import Gateways from '../gateways/Gateways';

export class CharacterModel {
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
        let films          = [];

        filmUrls.map((url: string) => {
            const filmPromise = filmsGateway.retrieveFilm(url);
            films.push(filmPromise);
        });

        films = await Promise.all(films);

        return films;
    }

    private async loadVehicles(): Promise<VehicleEntity[]> {
        const character       = this._character;
        const vehicleUrls     = character.getVehicleUrls();
        const vehiclesGateway = this._gateways.vehiclesGateway;
        let vehicles        = [];

        vehicleUrls.map((url: string) => {
            const promise = vehiclesGateway.retrieveVehicle(url);
            vehicles.push(promise);
        });

        vehicles = await Promise.all(vehicles);

        return vehicles;
    }

    private async loadSpecies(): Promise<SpeciesEntity[]> {
        const character      = this._character;
        const speciesGateway = this._gateways.speciesGateway;
        const speciesUrls    = character.getSpeciesUrls();
        let species          = [];

        speciesUrls.map((url: string) => {
            const speciesPromise = speciesGateway.retrieveSpecies(url);
            species.push(speciesPromise);
        });

        species = await Promise.all(species);

        return species;
    }

    private async loadStarships(): Promise<StarshipEntity[]> {
        const character        = this._character;
        const starshipsGateway = this._gateways.starshipsGateway;
        const starshipUrls     = character.getStarshipUrls();
        let   starships        = [];

        starshipUrls.map((url: string) => {
            const promise = starshipsGateway.retrieveStarship(url);
            starships.push(promise);
        });

        starships = await Promise.all(starships);

        return starships;
    }

    public getVehicles(): VehicleEntity[] {
        return this._vehicles;
    }

    public getStarships(): StarshipEntity[] {
        return this._starships;
    }
}