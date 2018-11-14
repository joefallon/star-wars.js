import { CachedGateway } from './CachedGateway';
import * as LRU from 'lru-cache';

import { CharacterEntity } from '../entities/CharacterEntity';

export class CharactersGateway {
    private static readonly API_SEGMENT = 'characters/';

    private readonly _api:         string;
    private readonly _cache:       LRU.Cache<string, any>;
    private _cachedGateway:        CachedGateway;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>, timeout: number) {
        this._api           = baseApi + CharactersGateway.API_SEGMENT;
        this._cache         = cache;
        this._cachedGateway = new CachedGateway(timeout);
    }

    public retrieveCharacter(url: string): Promise<CharacterEntity> {
        return new Promise(async (resolve, reject) => {
            const cache = this._cache;

            if(cache.has(url)) {
                const character = cache.get(url);
                return resolve(character);
            }

            const response  = await this._cachedGateway.getRequest(url);
            const data      = response['data'];
            const character = CharactersGateway.mapResponseDataToEntity(data);
            cache.set(url, character);
            resolve(character);
        });
    }

    private static mapResponseDataToEntity(data: any): CharacterEntity {
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
        character.setSpeciesUrls(data['species']);
        character.setStarshipUrls(data['starships']);
        character.setUpdated(data['edited']);
        character.setUrl(data['url']);
        character.setVehicleUrls(data['vehicles']);

        return character;
    }
}