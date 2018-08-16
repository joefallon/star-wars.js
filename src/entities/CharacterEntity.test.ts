import * as assert from 'assert';

import { CharacterEntity } from './CharacterEntity';

describe('CharacterEntity', () => {
    it('has correct getters and setters', async () => {
        const char = new CharacterEntity();
        char.setBirthYear('1900');
        char.setCreated('2012-12-12 11:11:11');
        char.setEyeColor('brown');
        char.setFilmUrls(['film1']);
        char.setGender('male');
        char.setHairColor('green');
        char.setHeightInCentimeters(1);
        char.setHomePlanetUrl('planet1');
        char.setMassInKilograms(2);
        char.setName('name');
        char.setSkinColor('white');
        char.setSpeciesUrl('species1');
        char.setStarshipUrls(['starship1']);
        char.setUpdated('2012-12-12 12:12:12');
        char.setUrl('url');
        char.setVehicleUrls(['vehicle1']);

        assert.strictEqual(char.getBirthYear(), '1900');
        assert.strictEqual(char.getCreated(), '2012-12-12 11:11:11');
        assert.strictEqual(char.getEyeColor(), 'brown');
        assert.strictEqual(char.getFilmUrls()[0], 'film1');
        assert.strictEqual(char.getGender(), 'male');
        assert.strictEqual(char.getHairColor(), 'green');
        assert.strictEqual(char.getHeightInCentimeters(), 1);
        assert.strictEqual(char.getHomePlanetUrl(), 'planet1');
        assert.strictEqual(char.getMassInKilograms(), 2);
        assert.strictEqual(char.getName(), 'name');
        assert.strictEqual(char.getSkinColor(), 'white');
        assert.strictEqual(char.getSpeciesUrl(), 'species1');
        assert.strictEqual(char.getStarshipUrls()[0], 'starship1');
        assert.strictEqual(char.getUpdated(), '2012-12-12 12:12:12');
        assert.strictEqual(char.getUrl(), 'url');
        assert.strictEqual(char.getVehicleUrls()[0], 'vehicle1');
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
        assert.strictEqual(char.getSpeciesUrl(), '');
        assert.strictEqual(char.getStarshipUrls().length, 0);
        assert.strictEqual(char.getUpdated(), '');
        assert.strictEqual(char.getUrl(), '');
        assert.strictEqual(char.getVehicleUrls().length, 0);
    });
});