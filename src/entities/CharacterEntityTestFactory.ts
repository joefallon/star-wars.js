import { CharacterEntity } from './CharacterEntity';

export default class CharacterEntityTestFactory {

    public static create(): CharacterEntity {
        const char = new CharacterEntity();

        char.setBirthYear('1900');
        char.setCreated('2012-12-12 11:11:11');
        char.setEyeColor('test eye color');
        char.setFilmUrls(['https://swapi.co/api/films/1/']);
        char.setGender('test gender');
        char.setHairColor('test hair color');
        char.setHeightInCentimeters(10);
        char.setHomePlanetUrl('https://swapi.co/api/planets/2/');
        char.setMassInKilograms(22);
        char.setName('test name');
        char.setSkinColor('test skin color');
        char.setSpeciesUrls(['https://swapi.co/api/species/3/']);
        char.setStarshipUrls(['https://swapi.co/api/starships/4/']);
        char.setUpdated('2012-12-12 12:12:12');
        char.setUrl('https://swapi.co/api/people/5/');
        char.setVehicleUrls(['https://swapi.co/api/vehicles/6/']);

        return char;
    }
}