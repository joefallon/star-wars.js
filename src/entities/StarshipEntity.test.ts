import * as assert from 'assert';
import { StarshipEntity } from './StarshipEntity';


describe('StarshipEntity', () => {
    it('has correct getters and setters', async () => {
        const starship = new StarshipEntity();
        starship.setCargoCapacityInKilograms(1);
        starship.setConsumables('consumables');
        starship.setCostInCredits(2);
        starship.setCreated('2012-12-12 12:12:12');
        starship.setCrewCount(3);
        starship.setFilmUrls(['film1']);
        starship.setHyperdriveRating('rating');
        starship.setLengthInMeters(4);
        starship.setManufacturer('manufacturer');
        starship.setMaxAtmospheringSpeedInKPH(5);
        starship.setMegalightSpeed(5);
        starship.setModel('model');
        starship.setName('name');
        starship.setPassengerCount(6);
        starship.setPilotCharacterUrls(['pilot1']);
        starship.setStarshipClass('ship-class');
        starship.setUpdated('2012-12-12 11:11:11');
        starship.setUrl('url1');

        assert.strictEqual(starship.getCargoCapacityInKilograms(), 1);
        assert.strictEqual(starship.getConsumables(), 'consumables');
        assert.strictEqual(starship.getCostInCredits(), 2);
        assert.strictEqual(starship.getCreated(), '2012-12-12 12:12:12');
        assert.strictEqual(starship.getCrewCount(), 3);
        assert.strictEqual(starship.getFilmUrls()[0], 'film1');
        assert.strictEqual(starship.getHyperdriveRating(), 'rating');
        assert.strictEqual(starship.getLengthInMeters(), 4);
        assert.strictEqual(starship.getManufacturer(), 'manufacturer');
        assert.strictEqual(starship.getMaxAtmospheringSpeedInKPH(), 5);
        assert.strictEqual(starship.getMegalightSpeed(), 5);
        assert.strictEqual(starship.getModel(), 'model');
        assert.strictEqual(starship.getName(), 'name');
        assert.strictEqual(starship.getPassengerCount(), 6);
        assert.strictEqual(starship.getPilotCharacterUrls()[0], 'pilot1');
        assert.strictEqual(starship.getStarshipClass(), 'ship-class');
        assert.strictEqual(starship.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(starship.getUrl(), 'url1');
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
    });
});