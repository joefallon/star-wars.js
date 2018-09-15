import * as assert from 'assert';

import { StarshipEntity } from './StarshipEntity';

describe('StarshipEntity', () => {
    it('has correct getters and setters', async () => {
        const starship = new StarshipEntity();

        starship.setCargoCapacityInKilograms(1000);
        starship.setConsumables('test consumables');
        starship.setCostInCredits(2000);
        starship.setCreated('2012-12-12 12:12:12');
        starship.setCrewCount(300);
        starship.setFilmUrls(['https://swapi.co/api/films/2/']);
        starship.setHyperdriveRating('test rating');
        starship.setLengthInMeters(400);
        starship.setManufacturer('test manufacturer');
        starship.setMaxAtmospheringSpeedInKPH(5);
        starship.setMegalightSpeed(6);
        starship.setModel('test model');
        starship.setName('test ship name');
        starship.setPassengerCount(600);
        starship.setPilotCharacterUrls(['https://swapi.co/api/people/1/']);
        starship.setStarshipClass('test ship class');
        starship.setUpdated('2012-12-12 11:11:11');
        starship.setUrl('https://swapi.co/api/starships/23/');

        assert.strictEqual(starship.getCargoCapacityInKilograms(), 1000);
        assert.strictEqual(starship.getConsumables(), 'test consumables');
        assert.strictEqual(starship.getCostInCredits(), 2000);
        assert.strictEqual(starship.getCreated(), '2012-12-12 12:12:12');
        assert.strictEqual(starship.getCrewCount(), 300);
        assert.strictEqual(starship.getFilmUrls()[0], 'https://swapi.co/api/films/2/');
        assert.strictEqual(starship.getHyperdriveRating(), 'test rating');
        assert.strictEqual(starship.getLengthInMeters(), 400);
        assert.strictEqual(starship.getManufacturer(), 'test manufacturer');
        assert.strictEqual(starship.getMaxAtmospheringSpeedInKPH(), 5);
        assert.strictEqual(starship.getMegalightSpeed(), 6);
        assert.strictEqual(starship.getModel(), 'test model');
        assert.strictEqual(starship.getName(), 'test ship name');
        assert.strictEqual(starship.getPassengerCount(), 600);
        assert.strictEqual(starship.getPilotCharacterUrls()[0], 'https://swapi.co/api/people/1/');
        assert.strictEqual(starship.getStarshipClass(), 'test ship class');
        assert.strictEqual(starship.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(starship.getUrl(), 'https://swapi.co/api/starships/23/');
        assert.strictEqual(starship.getId(), 23);
    });

    it('initializes correctly', async () => {
        const starship = new StarshipEntity();

        assert.strictEqual(starship.getCargoCapacityInKilograms(), 0);
        assert.strictEqual(starship.getConsumables(), '');
        assert.strictEqual(starship.getCostInCredits(), 0);
        assert.strictEqual(starship.getCreated(), '');
        assert.strictEqual(starship.getCrewCount(), 0);
        assert.strictEqual(starship.getFilmUrls().length, 0);
        assert.strictEqual(starship.getHyperdriveRating(), '');
        assert.strictEqual(starship.getLengthInMeters(), 0);
        assert.strictEqual(starship.getManufacturer(), '');
        assert.strictEqual(starship.getMaxAtmospheringSpeedInKPH(), 0);
        assert.strictEqual(starship.getMegalightSpeed(), 0);
        assert.strictEqual(starship.getModel(), '');
        assert.strictEqual(starship.getName(), '');
        assert.strictEqual(starship.getPassengerCount(), 0);
        assert.strictEqual(starship.getPilotCharacterUrls().length, 0);
        assert.strictEqual(starship.getStarshipClass(), '');
        assert.strictEqual(starship.getUpdated(), '');
        assert.strictEqual(starship.getUrl(), '');
        assert.strictEqual(starship.getId(), 0);
    });
});