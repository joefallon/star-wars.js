import { VehicleEntity } from './VehicleEntity';

export class VehicleEntityTestFactory {

    public static create(): VehicleEntity {
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

        return vehicle;
    }
}