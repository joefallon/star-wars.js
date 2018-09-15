import * as assert from 'assert';

import { SpeciesEntity } from './SpeciesEntity';

describe('SpeciesEntity', () => {
    it('has correct getters and setters', async () => {
        const species = new SpeciesEntity();

        species.setAverageHeightInCentimeters(10);
        species.setAverageLifespanInYears(20);
        species.setCharacterUrls(['https://swapi.co/api/people/40/']);
        species.setClassification('test species classification');
        species.setCreated('2012-12-12 12:12:12');
        species.setDesignation('test species designation');
        species.setEyeColor('test species eye color');
        species.setFilmUrls(['https://swapi.co/api/films/5/']);
        species.setHairColor('test species hair color');
        species.setHomePlanetUrl('https://swapi.co/api/planets/34/');
        species.setLanguage('test language');
        species.setName('test species name');
        species.setSkinColor('test species skin color');
        species.setUpdated('2012-12-12 11:11:11');
        species.setUrl('https://swapi.co/api/species/13/');

        assert.strictEqual(species.getAverageHeightInCentimeters(), 10);
        assert.strictEqual(species.getAverageLifespanInYears(), 20);
        assert.strictEqual(species.getCharacterUrls()[0], 'https://swapi.co/api/people/40/');
        assert.strictEqual(species.getClassification(), 'test species classification');
        assert.strictEqual(species.getCreated(), '2012-12-12 12:12:12');
        assert.strictEqual(species.getDesignation(), 'test species designation');
        assert.strictEqual(species.getEyeColor(), 'test species eye color');
        assert.strictEqual(species.getFilmUrls()[0], 'https://swapi.co/api/films/5/');
        assert.strictEqual(species.getHairColor(), 'test species hair color');
        assert.strictEqual(species.getHomePlanetUrl(), 'https://swapi.co/api/planets/34/');
        assert.strictEqual(species.getLanguage(), 'test language');
        assert.strictEqual(species.getName(), 'test species name');
        assert.strictEqual(species.getSkinColor(), 'test species skin color');
        assert.strictEqual(species.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(species.getUrl(), 'https://swapi.co/api/species/13/');
        assert.strictEqual(species.getId(), 13);
    });

    it('initializes correctly', async () => {
        const species = new SpeciesEntity();

        assert.strictEqual(species.getAverageHeightInCentimeters(), 0);
        assert.strictEqual(species.getAverageLifespanInYears(), 0);
        assert.strictEqual(species.getCharacterUrls().length, 0);
        assert.strictEqual(species.getClassification(), '');
        assert.strictEqual(species.getCreated(), '');
        assert.strictEqual(species.getDesignation(), '');
        assert.strictEqual(species.getEyeColor(), '');
        assert.strictEqual(species.getFilmUrls().length, 0);
        assert.strictEqual(species.getHairColor(), '');
        assert.strictEqual(species.getHomePlanetUrl(), '');
        assert.strictEqual(species.getLanguage(), '');
        assert.strictEqual(species.getName(), '');
        assert.strictEqual(species.getSkinColor(), '');
        assert.strictEqual(species.getUpdated(), '');
        assert.strictEqual(species.getUrl(), '');
        assert.strictEqual(species.getId(), 0);
    });
});