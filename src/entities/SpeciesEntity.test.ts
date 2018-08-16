import * as assert from 'assert';

import { SpeciesEntity } from './SpeciesEntity';

describe('SpeciesEntity', () => {
    it('has correct getters and setters', async () => {
        const species = new SpeciesEntity();
        species.setAverageHeightInCentimeters(1);
        species.setAverageLifespanInYears(2);
        species.setCharacterUrls(['character1']);
        species.setClassification('classification');
        species.setCreated('2012-12-12 12:12:12');
        species.setDesignation('designation');
        species.setEyeColor('brown');
        species.setFilmUrls(['film1']);
        species.setHairColor('green');
        species.setHomePlanetUrl('planet1');
        species.setName('name');
        species.setSkinColor('tan');
        species.setUpdated('2012-12-12 11:11:11');
        species.setUrl('url1');

        assert.strictEqual(species.getAverageHeightInCentimeters(), 1);
        assert.strictEqual(species.getAverageLifespanInYears(), 2);
        assert.strictEqual(species.getCharacterUrls()[0], 'character1');
        assert.strictEqual(species.getClassification(), 'classification');
        assert.strictEqual(species.getCreated(), '2012-12-12 12:12:12');
        assert.strictEqual(species.getDesignation(), 'designation');
        assert.strictEqual(species.getEyeColor(), 'brown');
        assert.strictEqual(species.getFilmUrls()[0], 'film1');
        assert.strictEqual(species.getHairColor(), 'green');
        assert.strictEqual(species.getHomePlanetUrl(), 'planet1');
        assert.strictEqual(species.getName(), 'name');
        assert.strictEqual(species.getSkinColor(), 'tan');
        assert.strictEqual(species.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(species.getUrl(), 'url1');
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
        assert.strictEqual(species.getName(), '');
        assert.strictEqual(species.getSkinColor(), '');
        assert.strictEqual(species.getUpdated(), '');
        assert.strictEqual(species.getUrl(), '');
    });
});