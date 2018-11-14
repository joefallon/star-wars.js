import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';

import { StarshipEntity } from '../entities/StarshipEntity';
import { CachedGateway } from './CachedGateway';

export class StarshipsGateway {
    private static readonly API_SEGMENT = 'starships/';

    private readonly _api:         string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private readonly _cache:       LRU.Cache<string, any>;
    private _cachedGateway:        CachedGateway;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>, timeout: number) {
        this._api           = baseApi + StarshipsGateway.API_SEGMENT;
        this._axiosConfig   = { timeout: timeout };
        this._cache         = cache;
        this._cachedGateway = new CachedGateway(timeout);
    }

    public async retrieveStarship(url: string): Promise<StarshipEntity> {
        const cache = this._cache;

        if(cache.has(url)) {
            const starship = cache.get(url);
            return starship;
        }

        const response = await this._cachedGateway.getRequest(url);
        const data     = response.data;
        const starship = StarshipsGateway.mapResponseDataToStarship(data);
        cache.set(url, starship);

        return starship;
    }

    private static mapResponseDataToStarship(data: any): StarshipEntity {
        const starship = new StarshipEntity();

        starship.setCargoCapacityInKilograms(parseFloat(data['cargo_capacity']));
        starship.setConsumables(data['consumables']);
        starship.setCostInCredits(parseInt(data['cost_in_credits'], 10));
        starship.setCreated(data['created']);
        starship.setCrewCount(parseInt(data['crew'], 10));
        starship.setFilmUrls(data['films']);
        starship.setHyperdriveRating(data['hyperdrive_rating']);
        starship.setLengthInMeters(parseFloat(data['length']));
        starship.setManufacturer(data['manufacturer']);
        starship.setMaxAtmospheringSpeedInKPH(parseFloat(data['max_atmosphering_speed']));
        starship.setMegalightSpeed(data['MGLT']);
        starship.setModel(data['model']);
        starship.setName(data['name']);
        starship.setPassengerCount(parseInt(data['passengers'], 10));
        starship.setPilotCharacterUrls(data['pilots']);
        starship.setStarshipClass(data['starship_class']);
        starship.setUpdated(data['edited']);
        starship.setUrl(data['url']);

        return starship;
    }
}