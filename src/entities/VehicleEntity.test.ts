import * as assert from 'assert';

import { VehicleEntity } from './VehicleEntity';

describe('VehicleEntity', () => {
    it('has correct getters and setters', async () => {
        const vehicle = new VehicleEntity();
        vehicle.setCargoCapacityInKilograms(1);
        vehicle.setConsumables('test consumables');
        vehicle.setCostInCredits(2);
        vehicle.setCreated('2012-12-12 12:12:12');
        vehicle.setCrewCount(3);
        vehicle.setFilmUrls(['https://swapi.co/api/films/2/']);
        vehicle.setLengthInMeters(4);
        vehicle.setManufacturer('test manufacturer');
        vehicle.setMaxAtmospheringSpeedInKPH(5);
        vehicle.setModel('test model');
        vehicle.setName('test vehicle name');
        vehicle.setPassengerCount(6);
        vehicle.setPilotCharacterUrls(['https://swapi.co/api/people/1/']);
        vehicle.setUpdated('2012-12-12 11:11:11');
        vehicle.setUrl('https://swapi.co/api/vehicles/20/');
        vehicle.setVehicleClass('test vehicle class');

        assert.strictEqual(vehicle.getCargoCapacityInKilograms(), 1);
        assert.strictEqual(vehicle.getConsumables(), 'test consumables');
        assert.strictEqual(vehicle.getCostInCredits(), 2);
        assert.strictEqual(vehicle.getCreated(), '2012-12-12 12:12:12');
        assert.strictEqual(vehicle.getCrewCount(), 3);
        assert.strictEqual(vehicle.getFilmUrls()[0], 'https://swapi.co/api/films/2/');
        assert.strictEqual(vehicle.getLengthInMeters(), 4);
        assert.strictEqual(vehicle.getManufacturer(), 'test manufacturer');
        assert.strictEqual(vehicle.getMaxAtmospheringSpeedInKPH(), 5);
        assert.strictEqual(vehicle.getModel(), 'test model');
        assert.strictEqual(vehicle.getName(), 'test vehicle name');
        assert.strictEqual(vehicle.getPassengerCount(), 6);
        assert.strictEqual(vehicle.getPilotCharacterUrls()[0], 'https://swapi.co/api/people/1/');
        assert.strictEqual(vehicle.getUpdated(), '2012-12-12 11:11:11');
        assert.strictEqual(vehicle.getUrl(), 'https://swapi.co/api/vehicles/20/');
        assert.strictEqual(vehicle.getVehicleClass(), 'test vehicle class');
        assert.strictEqual(vehicle.getId(), 20);
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
        assert.strictEqual(vehicle.getId(), 0);
    });
});