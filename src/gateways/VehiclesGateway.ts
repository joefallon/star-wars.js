import axios, { AxiosRequestConfig } from 'axios';
import { VehicleEntity } from '../entities/VehicleEntity';

export class VehiclesGateway {
    private _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;

    public constructor(baseApi: string) {
        this._api = baseApi + 'vehicles/';
        this._axiosConfig = { timeout: 5000 };
    }

    public retrieveVehicle(url: string): Promise<VehicleEntity> {
        return new Promise(async (resolve, reject) => {
            const response = await axios.get(url, this._axiosConfig);
            const data     = response.data;

            const vehicle = new VehicleEntity();
            vehicle.setCargoCapacityInKilograms(parseInt(data['cargo_capacity']));
            vehicle.setConsumables(data['consumables']);
            vehicle.setCostInCredits(parseInt(data['cost_in_credits'], 10));
            vehicle.setCreated(data['created']);
            vehicle.setCrewCount(parseInt(data['crew'], 10));
            vehicle.setFilmUrls(data['films']);
            vehicle.setLengthInMeters(parseFloat(data['length']));
            vehicle.setManufacturer(data['manufacturer']);
            vehicle.setMaxAtmospheringSpeedInKPH(parseFloat(data['max_atmosphering_speed']));
            vehicle.setModel(data['model']);
            vehicle.setName(data['name']);
            vehicle.setPassengerCount(parseInt(data['passengers'], 10));
            vehicle.setPilotCharacterUrls(data['pilots']);
            vehicle.setUpdated(data['edited']);
            vehicle.setUrl(data['url']);
            vehicle.setVehicleClass(data['vehicle_class']);

            resolve(vehicle);
        });
    }
}