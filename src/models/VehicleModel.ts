import { CharacterEntity } from '../entities/CharacterEntity';
import { FilmEntity } from '../entities/FilmEntity';
import { Gateways } from '../gateways/Gateways';
import { VehicleEntity } from '../entities/VehicleEntity';

export class VehicleModel {
    private _gateways: Gateways;
    private _vehicle:  VehicleEntity;
    private _pilots:   CharacterEntity[];
    private _films:    FilmEntity[];

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadVehicle(id: number): Promise<null> {
        const vehiclesGateway = this._gateways.vehiclesGateway;
        this._vehicle = await vehiclesGateway.retrieveVehicle(`https://swapi.co/api/vehicles/${id}/`);

        await Promise.all([this.loadPilots(), this.loadFilms()]);

        return null;
    }

    public getVehicle(): VehicleEntity {
        return this._vehicle;
    }

    public getPilots(): CharacterEntity[] {
        return this._pilots;
    }

    private async loadPilots() {
        const vehicle           = this._vehicle;
        const pilotUrls         = vehicle.getPilotCharacterUrls();
        const charactersGateway = this._gateways.charactersGateway;
        const pilotPromises     = [];

        pilotUrls.map((url: string) => {
            const promise = charactersGateway.retrieveCharacter(url);
            pilotPromises.push(promise);
        });

        this._pilots = await Promise.all(pilotPromises);
    }

    public getFilms(): FilmEntity[] {
        return this._films;
    }

    private async loadFilms() {
        const vehicle       = this._vehicle;
        const filmUrls      = vehicle.getFilmUrls();
        const filmsGateway  = this._gateways.filmsGateway;
        const filmsPromises = [];

        filmUrls.map((url: string) => {
            const promise = filmsGateway.retrieveFilm(url);
            filmsPromises.push(promise);
        });

        this._films = await Promise.all(filmsPromises);
    }
}