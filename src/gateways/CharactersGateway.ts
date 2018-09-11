import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';
import { CharacterEntity } from '../entities/CharacterEntity';

export class CharactersGateway {
    private readonly _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private _cache: LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>) {
        this._api = baseApi + 'characters/';
        this._axiosConfig = { timeout: 15000 };
        this._cache = cache;
    }


    public retrieveCharacter(url: string): Promise<CharacterEntity> {
        return new Promise(async (resolve, reject) => {
            if(this._cache.has(url)) {
                return resolve(this._cache.get(url));
            }

            const response = await axios.get(url, this._axiosConfig);
            const data = response['data'];

            const character = new CharacterEntity();
            character.setBirthYear(data['birth_year']);
            character.setCreated(data['created']);
            character.setEyeColor(data['eye_color']);
            character.setFilmUrls(data['films']);
            character.setGender(data['gender']);
            character.setHairColor(data['hair_color']);
            character.setHeightInCentimeters(parseInt(data['height'], 10));
            character.setHomePlanetUrl(data['homeworld']);
            character.setMassInKilograms(parseInt(data['mass'], 10));
            character.setName(data['name']);
            character.setSkinColor(data['skin_color']);
            character.setSpeciesUrls(data['species'][0]);
            character.setStarshipUrls(data['starships']);
            character.setUpdated(data['edited']);
            character.setUrl(data['url']);
            character.setVehicleUrls(data['vehicles']);

            this._cache.set(url, character);
            resolve(character);
        });
    }
}