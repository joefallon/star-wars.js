import { FilmEntity } from './FilmEntity';

export default class FilmEntityTestFactory {
    public static create(): FilmEntity {
        const film = new FilmEntity();

        film.setCharacterUrls(['https://swapi.co/api/people/20/']);
        film.setCreated('2012-12-12T12:12:12');
        film.setDirector('director');
        film.setUpdated('2012-12-12T11:11:11');
        film.setEpisodeId(1);
        film.setOpeningCrawl('opening crawl');
        film.setPlanetUrls(['https://swapi.co/api/planets/27/']);
        film.setProducer('producer');
        film.setReleaseDate('2012-11-11');
        film.setSpeciesUrls(['https://swapi.co/api/species/1/']);
        film.setStarshipUrls(['https://swapi.co/api/starships/17/']);
        film.setTitle('test title');
        film.setUrl('https://swapi.co/api/films/2/');
        film.setVehicleUrls(['https://swapi.co/api/vehicles/20/']);

        return film;
    }
}