import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { PlanetEntity } from '../entities/PlanetEntity';
import { SpeciesEntity } from '../entities/SpeciesEntity';
import { StarshipEntity } from '../entities/StarshipEntity';
import VehicleEntity from '../entities/VehicleEntity';
import Gateways from '../gateways/Gateways';

export class FilmModel {
    private readonly _gateways:   Gateways;
    private _film:       FilmEntity;
    private _characters: CharacterEntity[];
    private _planets:    PlanetEntity[];
    private _starships:  StarshipEntity[];
    private _vehicles:   VehicleEntity[];
    private _species:    SpeciesEntity[];

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public loadFilmData(episodeId: number): Promise<null> {
        return new Promise(async (resolve, reject) => {
           try {
               const filmsGateway = this._gateways.filmsGateway;
               const url  = 'https://swapi.co/api/films/' + episodeId + '/';
               this._film = await filmsGateway.retrieveFilm(url);

               let [characters, planets, starships, vehicles, species] = await Promise.all([
                   this.loadCharacters(), this.loadPlanets(), this.loadStarships(),
                   this.loadVehicles(),   this.loadSpecies()
               ]);

               this._characters = characters;
               this._planets    = planets;
               this._starships  = starships;
               this._vehicles   = vehicles;
               this._species    = species;

               resolve();
           }
           catch(e) {
               const err: Error = e;
               reject(err);
           }
        });
    }

    public getFilm(): FilmEntity {
        return this._film;
    }

    public getCharacters(): CharacterEntity[] {
        return this._characters;
    }

    public getVehicles(): VehicleEntity[] {
        return this._vehicles;
    }

    public getStarships(): StarshipEntity[] {
        return this._starships;
    }

    public getPlanets(): PlanetEntity[] {
        return this._planets;
    }

    public getSpecies(): SpeciesEntity[] {
        return this._species;
    }

    private loadCharacters(): Promise<CharacterEntity[]> {
        return new Promise(async (resolve, reject) => {
            const charactersGateway = this._gateways.charactersGateway;
            const characterPromises: Promise<CharacterEntity>[] = [];

            this._film.getCharacterUrls().map((url) => {
                const promise = charactersGateway.retrieveCharacter(url);
                characterPromises.push(promise);
            });

            const characters: CharacterEntity[] = await Promise.all(characterPromises);
            resolve(characters);
        });
    }

    private loadPlanets(): Promise<PlanetEntity[]> {
        return new Promise(async (resolve, reject) => {
            const planetsGateway = this._gateways.planetsGateway;
            const planetPromises = [];

            this._film.getPlanetUrls().map((url: string) => {
                const promise = planetsGateway.retrievePlanet(url);
                planetPromises.push(promise);
            });

            const planets: PlanetEntity[] = await Promise.all(planetPromises);
            resolve(planets);
        });
    }

    private loadStarships(): Promise<StarshipEntity[]> {
        return new Promise(async (resolve, reject) => {
            const starshipsGateway = this._gateways.starshipsGateway;
            const starshipPromises = [];

            this._film.getStarshipUrls().map((url: string) => {
                const promise = starshipsGateway.retrieveStarship(url);
                starshipPromises.push(promise);
            });

            const starships: StarshipEntity[] = await Promise.all(starshipPromises);
            resolve(starships);
        });
    }

    private loadVehicles(): Promise<VehicleEntity[]> {
        return new Promise(async (resolve, reject) => {
            const vehiclesGateway = this._gateways.vehiclesGateway;
            const vehiclePromises = [];

            this._film.getVehicleUrls().map((url: string) => {
                const promise = vehiclesGateway.retrieveVehicle(url);
                vehiclePromises.push(promise);
            });

            const vehicles: VehicleEntity[] = await Promise.all(vehiclePromises);
            resolve(vehicles);
        });
    }

    private loadSpecies(): Promise<SpeciesEntity[]> {
        return new Promise(async (resolve, reject) => {
            const speciesGateway  = this._gateways.speciesGateway;
            const speciesPromises = [];

            this._film.getSpeciesUrls().map((url: string) => {
                const promise = speciesGateway.retrieveSpecies(url);
                speciesPromises.push(promise);
            });

            const species: SpeciesEntity[] = await Promise.all(speciesPromises);
            resolve(species);
        });
    }
}