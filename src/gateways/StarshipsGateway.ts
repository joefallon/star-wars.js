import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';
import { StarshipEntity } from '../entities/StarshipEntity';

export class StarshipsGateway {
    private _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private _cache: LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>) {
        this._api = baseApi + 'starships/';
        this._axiosConfig = { timeout: 15000 };
        this._cache = cache;
    }

    public retrieveStarship(url: string): Promise<StarshipEntity> {
        return new Promise(async (resolve, reject) => {
            if(this._cache.has(url)) {
                return resolve(this._cache.get(url));
            }

            const response = await axios.get(url, this._axiosConfig);
            const data = response.data;

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

            this._cache.set(url, starship);
            resolve(starship);
        });
    }
}