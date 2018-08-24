import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';
import { SpeciesEntity } from '../entities/SpeciesEntity';

export class SpeciesGateway {
    private _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private _cache: LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>) {
        this._api = baseApi + 'species/';
        this._axiosConfig = { timeout: 5000 };
        this._cache = cache;
    }

    public retrieveSpecies(url: string): Promise<SpeciesEntity> {
        return new Promise(async (resolve, reject) => {
            if(this._cache.has(url)) {
                return resolve(this._cache.get(url));
            }

            const response = await axios.get(url, this._axiosConfig);
            const data     = response.data;

            const species = new SpeciesEntity();
            species.setAverageHeightInCentimeters(parseFloat(data['average_height']));
            species.setAverageLifespanInYears(parseFloat(data['average_lifespan']));
            species.setCharacterUrls(data['people']);
            species.setClassification(data['classification']);
            species.setCreated(data['created']);
            species.setDesignation(data['designation']);
            species.setEyeColor(data['eye_colors']);
            species.setFilmUrls(data['']);
            species.setHairColor(data['hair_colors']);
            species.setHomePlanetUrl(data['homeworld']);
            species.setName(data['name']);
            species.setSkinColor(data['skin_colors']);
            species.setUpdated(data['edited']);
            species.setUrl(data['url']);

            // todo: add language to entity

            this._cache.set(url, species);
            resolve(species);
        });
    }
}