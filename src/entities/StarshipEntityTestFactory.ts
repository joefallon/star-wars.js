import { StarshipEntity } from './StarshipEntity';

export class StarshipEntityTestFactory {

    public static create(): StarshipEntity {
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

        return starship;
    }
}