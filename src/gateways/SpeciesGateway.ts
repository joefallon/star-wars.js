import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';

import { SpeciesEntity } from '../entities/SpeciesEntity';

export class SpeciesGateway {
    private static readonly API_SEGMENT = 'species/';

    private readonly _api:         string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private readonly _cache:       LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>, timeout: number) {
        this._api         = baseApi + SpeciesGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache       = cache;
    }

    public retrieveSpecies(url: string): Promise<SpeciesEntity> {
        return new Promise(async (resolve, reject) => {
            const cache = this._cache;

            if(cache.has(url)) {
                return resolve(cache.get(url));
            }

            const config   = this._axiosConfig;
            const response = await axios.get(url, config);
            const data     = response.data;
            const species  = SpeciesGateway.mapResponseDataToSpecies(data);

            cache.set(url, species);
            resolve(species);
        });
    }

    private static mapResponseDataToSpecies(data: any): SpeciesEntity {
        const species = new SpeciesEntity();

        species.setAverageHeightInCentimeters(parseFloat(data['average_height']));
        species.setAverageLifespanInYears(parseFloat(data['average_lifespan']));
        species.setCharacterUrls(data['people']);
        species.setClassification(data['classification']);
        species.setCreated(data['created']);
        species.setDesignation(data['designation']);
        species.setEyeColor(data['eye_colors']);
        species.setFilmUrls(data['films']);
        species.setHairColor(data['hair_colors']);
        species.setHomePlanetUrl(data['homeworld']);
        species.setName(data['name']);
        species.setSkinColor(data['skin_colors']);
        species.setUpdated(data['edited']);
        species.setUrl(data['url']);
        species.setLanguage(data['language']);

        return species;
    }
}