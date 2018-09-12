import * as assert from 'assert';

import { CharacterEntity } from './CharacterEntity';

describe('CharacterEntity', () => {

    it('has correct getters and setters', async () => {
        const char = new CharacterEntity();
        char.setBirthYear('1900');
        char.setCreated('2012-12-12 11:11:11');
        char.setEyeColor('test eye color');
        char.setFilmUrls(['https://swapi.co/api/films/1/']);
        char.setGender('test gender');
        char.setHairColor('test hair color');
        char.setHeightInCentimeters(10);
        char.setHomePlanetUrl('https://swapi.co/api/planets/2/');
        char.setMassInKilograms(22);
        char.setName('test name');
        char.setSkinColor('test skin color');
        char.setSpeciesUrls(['https://swapi.co/api/species/3/']);
        char.setStarshipUrls(['https://swapi.co/api/starships/4/']);
        char.setUpdated('2012-12-12 12:12:12');
        char.setUrl('https://swapi.co/api/people/5/');
        char.setVehicleUrls(['https://swapi.co/api/vehicles/6/']);

        assert.strictEqual(char.getBirthYear(), '1900');
        assert.strictEqual(char.getCreated(), '2012-12-12 11:11:11');
        assert.strictEqual(char.getEyeColor(), 'test eye color');
        assert.strictEqual(char.getFilmUrls()[0], 'https://swapi.co/api/films/1/');
        assert.strictEqual(char.getGender(), 'test gender');
        assert.strictEqual(char.getHairColor(), 'test hair color');
        assert.strictEqual(char.getHeightInCentimeters(), 10);
        assert.strictEqual(char.getHomePlanetUrl(), 'https://swapi.co/api/planets/2/');
        assert.strictEqual(char.getMassInKilograms(), 22);
        assert.strictEqual(char.getName(), 'test name');
        assert.strictEqual(char.getSkinColor(), 'test skin color');
        assert.strictEqual(char.getSpeciesUrls()[0], 'https://swapi.co/api/species/3/');
        assert.strictEqual(char.getStarshipUrls()[0], 'https://swapi.co/api/starships/4/');
        assert.strictEqual(char.getUpdated(), '2012-12-12 12:12:12');
        assert.strictEqual(char.getUrl(), 'https://swapi.co/api/people/5/');
        assert.strictEqual(char.getVehicleUrls()[0], 'https://swapi.co/api/vehicles/6/');
        assert.strictEqual(char.getId(), 5);
    });

    it('initializes correctly', async () => {
        const char = new CharacterEntity();

        assert.strictEqual(char.getBirthYear(), '');
        assert.strictEqual(char.getCreated(), '');
        assert.strictEqual(char.getEyeColor(), '');
        assert.strictEqual(char.getFilmUrls().length, 0);
        assert.strictEqual(char.getGender(), '');
        assert.strictEqual(char.getHairColor(), '');
        assert.strictEqual(char.getHeightInCentimeters(), 0);
        assert.strictEqual(char.getHomePlanetUrl(), '');
        assert.strictEqual(char.getMassInKilograms(), 0);
        assert.strictEqual(char.getName(), '');
        assert.strictEqual(char.getSkinColor(), '');
        assert.strictEqual(char.getSpeciesUrls().length, 0);
        assert.strictEqual(char.getStarshipUrls().length, 0);
        assert.strictEqual(char.getUpdated(), '');
        assert.strictEqual(char.getUrl(), '');
        assert.strictEqual(char.getVehicleUrls().length, 0);
        assert.strictEqual(char.getId(), 0);
    });
});