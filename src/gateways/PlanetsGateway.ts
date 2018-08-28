import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';
import { PlanetEntity } from '../entities/PlanetEntity';

export class PlanetsGateway {
    private _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private _cache: LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>) {
        this._api = baseApi + 'planets/';
        this._axiosConfig = { timeout: 15000 };
        this._cache = cache;
    }

    public retrievePlanet(url: string): Promise<PlanetEntity> {
        return new Promise(async (resolve, reject) => {
            if(this._cache.has(url)) {
                return resolve(this._cache.get(url));
            }

            const response = await axios.get(url, this._axiosConfig);
            const data = response.data;

            const planet = new PlanetEntity();
            planet.setClimate(data['climate']);
            planet.setCreated(data['created']);
            planet.setDiameterInKilometers(parseInt(data['diameter'], 10));
            planet.setFilmUrls(data['films']);
            planet.setGravity(data['gravity']);
            planet.setName(data['name']);
            planet.setOrbitalPeriodInDays(parseInt(data['orbital_period'], 10));
            planet.setPopulation(data['population']);
            planet.setResidentCharacterUrls(data['residents']);
            planet.setRotationPeriodInDays(parseInt(data['rotation_period'], 10));
            planet.setSurfaceWaterPercent(parseFloat(data['surface_water']));
            planet.setTerrain(data['terrain']);
            planet.setUpdated(data['edited']);
            planet.setUrl(data['url']);

            this._cache.set(url, planet);
            resolve(planet);
        });
    }
}