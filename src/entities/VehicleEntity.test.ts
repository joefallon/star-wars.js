import * as assert from 'assert';

import VehicleEntity from './VehicleEntity';

describe('VehicleEntity', () => {
    it('has correct getters and setters', async () => {
        const vehicle = new VehicleEntity();
        vehicle.setCargoCapacityInKilograms(1);
        vehicle.setConsumables('consumables');
        vehicle.setCostInCredits(2);
        vehicle.setCreated('2012-12-12 12:12:12');
        vehicle.setCrewCount(3);
        vehicle.setFilmUrls(['film1']);
        vehicle.setLengthInMeters(4);
        vehicle.setManufacturer('manufacturer');
        vehicle.setMaxAtmospheringSpeedInKPH(5);
        vehicle.setModel('model');
        vehicle.setName('name');
        vehicle.setPassengerCount(6);
        vehicle.setPilotCharacterUrls(['character1']);
        vehicle.setUpdated('2012-12-12 11:11:11');
        vehicle.setUrl('url1');
        vehicle.setVehicleClass('class');

        assert.strictEqual(vehicle.getCargoCapacityInKilograms(), 1);
        assert.strictEqual(vehicle.getConsumables(), 'consumables');
        assert.strictEqual(vehicle.getCostInCredits(), 2);
        assert.strictEqual(vehicle.getCreated(), '2012-12-12 12:12:12');
        assert.strictEqual(vehicle.getCrewCount(), 3);
        assert.strictEqual(vehicle.getFilmUrls()[0], 'film1');
        assert.strictEqual(vehicle.getLengthInMeters(), 4);
        assert.strictEqual(vehicle.getManufacturer(), 'manufacturer');
        assert.strictEqual(vehicle.getMaxAtmospheringSpeedInKPH(), 5);
        assert.strictEqual(vehicle.getModel(), 'model');
        assert.strictEqual(vehicle.getName(), 'name');
        assert.strictEqual(vehicle.getPassengerCount(), 6);
        assert.strictEqual(vehicle.getPilotCharacterUrls()[0], 'character1');
        assert.strictEqual(vehicle.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(vehicle.getUrl(), 'url1');
        assert.strictEqual(vehicle.getVehicleClass(), 'class');
    });

    it('initializes correctly', async () => {
        const vehicle = new VehicleEntity();

        assert.strictEqual(vehicle.getCargoCapacityInKilograms(), 0);
        assert.strictEqual(vehicle.getConsumables(), '');
        assert.strictEqual(vehicle.getCostInCredits(), 0);
        assert.strictEqual(vehicle.getCreated(), '');
        assert.strictEqual(vehicle.getCrewCount(), 0);
        assert.strictEqual(vehicle.getFilmUrls().length, 0);
        assert.strictEqual(vehicle.getLengthInMeters(), 0);
        assert.strictEqual(vehicle.getManufacturer(), '');
        assert.strictEqual(vehicle.getMaxAtmospheringSpeedInKPH(), 0);
        assert.strictEqual(vehicle.getModel(), '');
        assert.strictEqual(vehicle.getName(), '');
        assert.strictEqual(vehicle.getPassengerCount(), 0);
        assert.strictEqual(vehicle.getPilotCharacterUrls().length, 0);
        assert.strictEqual(vehicle.getUpdated(), '');
        assert.strictEqual(vehicle.getUrl(), '');
        assert.strictEqual(vehicle.getVehicleClass(), '');
    });
});