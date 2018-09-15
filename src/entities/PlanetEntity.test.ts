import * as assert from 'assert';

import { PlanetEntity } from './PlanetEntity';

describe('PlanetEntity', () => {
    it('has correct getters and setters', async () => {
        const planet = new PlanetEntity();

        planet.setClimate('test climate');
        planet.setCreated('2012-12-12 12:12:21');
        planet.setDiameterInKilometers(100);
        planet.setFilmUrls(['https://swapi.co/api/films/6/']);
        planet.setGravity('test gravity');
        planet.setName('test planet name');
        planet.setOrbitalPeriodInDays(200);
        planet.setPopulation(300);
        planet.setResidentCharacterUrls(['https://swapi.co/api/people/5/']);
        planet.setRotationPeriodInDays(400);
        planet.setSurfaceWaterPercent(500);
        planet.setTerrain('test terrain');
        planet.setUpdated('2012-12-12 11:11:11');
        planet.setUrl('https://swapi.co/api/planets/2/');

        assert.strictEqual(planet.getClimate(), 'test climate');
        assert.strictEqual(planet.getCreated(), '2012-12-12 12:12:21');
        assert.strictEqual(planet.getDiameterInKilometers(), 100);
        assert.strictEqual(planet.getFilmUrls()[0], 'https://swapi.co/api/films/6/');
        assert.strictEqual(planet.getGravity(), 'test gravity');
        assert.strictEqual(planet.getName(), 'test planet name');
        assert.strictEqual(planet.getOrbitalPeriodInDays(), 200);
        assert.strictEqual(planet.getPopulation(), 300);
        assert.strictEqual(planet.getResidentCharacterUrls()[0], 'https://swapi.co/api/people/5/');
        assert.strictEqual(planet.getRotationPeriodInDays(), 400);
        assert.strictEqual(planet.getSurfaceWaterPercent(), 500);
        assert.strictEqual(planet.getTerrain(), 'test terrain');
        assert.strictEqual(planet.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(planet.getUrl(), 'https://swapi.co/api/planets/2/');
        assert.strictEqual(planet.getId(), 2);
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
        assert.strictEqual(planet.getId(), 0);
    });
});