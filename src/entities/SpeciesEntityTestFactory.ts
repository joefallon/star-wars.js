import { SpeciesEntity } from './SpeciesEntity';

export default class SpeciesEntityTestFactory {
    public static create(): SpeciesEntity {
        const species = new SpeciesEntity();

        species.setAverageHeightInCentimeters(10);
        species.setAverageLifespanInYears(20);
        species.setCharacterUrls(['https://swapi.co/api/people/40/']);
        species.setClassification('test species classification');
        species.setCreated('2012-12-12 12:12:12');
        species.setDesignation('test species designation');
        species.setEyeColor('test species eye color');
        species.setFilmUrls(['https://swapi.co/api/films/5/']);
        species.setHairColor('test species hair color');
        species.setHomePlanetUrl('https://swapi.co/api/planets/34/');
        species.setName('test species name');
        species.setSkinColor('test species skin color');
        species.setUpdated('2012-12-12 11:11:11');
        species.setUrl('https://swapi.co/api/species/13/');
        species.setLanguage('test language');

        return species;
    }
};