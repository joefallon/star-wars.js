import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';

import { PlanetEntity } from '../entities/PlanetEntity';

export default class PlanetsGateway {
    private static readonly API_SEGMENT = 'planets/';

    private readonly _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private readonly _cache: LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>, timeout: number) {
        this._api         = baseApi + PlanetsGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache       = cache;
    }

    public retrievePlanet(url: string): Promise<PlanetEntity> {
        return new Promise(async (resolve, reject) => {
            const cache = this._cache;

            if(cache.has(url)) {
                const planet = cache.get(url);
                return resolve(planet);
            }

            const config   = this._axiosConfig;
            const response = await axios.get(url, config);
            const data     = response.data;
            const planet   = PlanetsGateway.mapResponseDataToEntity(data);

            cache.set(url, planet);
            resolve(planet);
        });
    }

    private static mapResponseDataToEntity(data: any): PlanetEntity {
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

        return planet;
    }
}