import * as assert from 'assert';

import PlanetEntity from './PlanetEntity';

describe('PlanetEntity', () => {
    it('has correct getters and setters', async () => {
        const planet = new PlanetEntity();
        planet.setClimate('climate');
        planet.setCreated('2012-12-12 12:12:21');
        planet.setDiameterInKilometers(1);
        planet.setFilmUrls(['film1']);
        planet.setGravity('normal');
        planet.setName('name');
        planet.setOrbitalPeriodInDays(2);
        planet.setPopulation(3);
        planet.setResidentCharacterUrls(['character1']);
        planet.setRotationPeriodInDays(4);
        planet.setSurfaceWaterPercent(5);
        planet.setTerrain('hills');
        planet.setUpdated('2012-12-12 11:11:11');
        planet.setUrl('url1');

        assert.strictEqual(planet.getClimate(), 'climate');
        assert.strictEqual(planet.getCreated(), '2012-12-12 12:12:21');
        assert.strictEqual(planet.getDiameterInKilometers(), 1);
        assert.strictEqual(planet.getFilmUrls()[0], 'film1');
        assert.strictEqual(planet.getGravity(), 'normal');
        assert.strictEqual(planet.getName(), 'name');
        assert.strictEqual(planet.getOrbitalPeriodInDays(), 2);
        assert.strictEqual(planet.getPopulation(), 3);
        assert.strictEqual(planet.getResidentCharacterUrls()[0], 'character1');
        assert.strictEqual(planet.getRotationPeriodInDays(), 4);
        assert.strictEqual(planet.getSurfaceWaterPercent(), 5);
        assert.strictEqual(planet.getTerrain(), 'hills');
        assert.strictEqual(planet.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(planet.getUrl(), 'url1');
    });

    it('initializes correctly', async () => {
        const planet = new PlanetEntity();

        assert.strictEqual(planet.getClimate(), '');
        assert.strictEqual(planet.getCreated(), '');
        assert.strictEqual(planet.getDiameterInKilometers(), 0);
        assert.strictEqual(planet.getFilmUrls().length, 0);
        assert.strictEqual(planet.getGravity(), '');
        assert.strictEqual(planet.getName(), '');
        assert.strictEqual(planet.getOrbitalPeriodInDays(), 0);
        assert.strictEqual(planet.getPopulation(), 0);
        assert.strictEqual(planet.getResidentCharacterUrls().length, 0);
        assert.strictEqual(planet.getRotationPeriodInDays(), 0);
        assert.strictEqual(planet.getSurfaceWaterPercent(), 0);
        assert.strictEqual(planet.getTerrain(), '');
        assert.strictEqual(planet.getUpdated(), '');
        assert.strictEqual(planet.getUrl(), '');
    });
});