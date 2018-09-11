import { CharacterEntity } from './CharacterEntity';

export default class CharacterEntityTestFactory {
    public static create(): CharacterEntity {
        const char = new CharacterEntity();
        char.setBirthYear('1900');
        char.setCreated('2012-12-12 11:11:11');
        char.setEyeColor('brown');
        char.setFilmUrls(['https://swapi.co/api/films/1/']);
        char.setGender('male');
        char.setHairColor('green');
        char.setHeightInCentimeters(1);
        char.setHomePlanetUrl('https://swapi.co/api/planets/2/');
        char.setMassInKilograms(2);
        char.setName('test name');
        char.setSkinColor('white');
        char.setSpeciesUrls('https://swapi.co/api/species/3/');
        char.setStarshipUrls(['https://swapi.co/api/starships/4/']);
        char.setUpdated('2012-12-12 12:12:12');
        char.setUrl('https://swapi.co/api/people/5/');
        char.setVehicleUrls(['https://swapi.co/api/vehicles/6/']);

        return char;
    }
}