import { Gateways } from '../gateways/Gateways';
import { VehicleEntity } from '../entities/VehicleEntity';

export class VehicleModel {
    private _gateways: Gateways;
    private _vehicle:  VehicleEntity;

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadVehicle(id: number): Promise<null> {
        const vehiclesGateway = this._gateways.vehiclesGateway;
        this._vehicle = await vehiclesGateway.retrieveVehicle(`https://swapi.co/api/vehicles/${id}/`);

        return null;
    }

    public getVehicle() {
        return this._vehicle;
    }
}