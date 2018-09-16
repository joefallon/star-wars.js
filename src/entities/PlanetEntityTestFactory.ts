import { PlanetEntity } from './PlanetEntity';

export class PlanetEntityTestFactory {

    public static create(): PlanetEntity {
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

        return planet;
    }
}