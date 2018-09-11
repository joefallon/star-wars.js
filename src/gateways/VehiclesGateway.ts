import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';

import { VehicleEntity } from '../entities/VehicleEntity';

export class VehiclesGateway {
    private static readonly API_SEGMENT = 'vehicles/';

    private readonly _api:         string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private readonly _cache:       LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>, timeout: number) {
        this._api         = baseApi + VehiclesGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache       = cache;
    }

    public async retrieveVehicle(url: string): Promise<VehicleEntity> {
        const cache = this._cache;

        if(cache.has(url)) {
            return cache.get(url);
        }

        const config   = this._axiosConfig;
        const response = await axios.get(url, config);
        const data     = response.data;
        const vehicle  = VehiclesGateway.mapResponseDataToVehicle(data);
        cache.set(url, vehicle);

        return vehicle;
    }

    private static mapResponseDataToVehicle(data: any): VehicleEntity {
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

        return vehicle;
    }
}