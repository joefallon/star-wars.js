import { SpeciesEntity } from '../entities/SpeciesEntity';
import { Gateways } from '../gateways/Gateways';
import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { PlanetEntity } from '../entities/PlanetEntity';
import { StarshipEntity } from '../entities/StarshipEntity';
import { VehicleEntity } from '../entities/VehicleEntity';

export class FilmModel {
    private _gateways:   Gateways;
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
            const gateways = this._gateways;
            const charactersGateway = gateways.charactersGateway;
        });
    }

    private loadPlanets(): Promise<PlanetEntity[]> {
        return null;
    }

    private loadStarships(): Promise<StarshipEntity[]> {
        return null;
    }

    private loadVehicles(): Promise<VehicleEntity[]> {
        return null;
    }

    private loadSpecies(): Promise<SpeciesEntity[]> {
        return null;
    }
}