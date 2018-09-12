import * as assert from 'assert';

import { FilmEntity } from './FilmEntity';

describe('FilmEntity', () => {

    it('has correct getters and setters', async () => {
        const film = new FilmEntity();

        film.setCharacterUrls(['https://swapi.co/api/people/20/']);
        film.setCreated('2012-12-12T12:12:12');
        film.setDirector('test director');
        film.setUpdated('2012-12-12T11:11:11');
        film.setEpisodeId(1);
        film.setOpeningCrawl('test opening crawl');
        film.setPlanetUrls(['https://swapi.co/api/planets/27/']);
        film.setProducer('test producer');
        film.setReleaseDate('2012-11-11');
        film.setSpeciesUrls(['https://swapi.co/api/species/1/']);
        film.setStarshipUrls(['https://swapi.co/api/starships/17/']);
        film.setTitle('test title');
        film.setUrl('https://swapi.co/api/films/2/');
        film.setVehicleUrls(['https://swapi.co/api/vehicles/20/']);

        assert.strictEqual(film.getCharacterUrls()[0], 'https://swapi.co/api/people/20/');
        assert.strictEqual(film.getCreated(),          '2012-12-12T12:12:12');
        assert.strictEqual(film.getDirector(),         'test director');
        assert.strictEqual(film.getUpdated(),          '2012-12-12T11:11:11');
        assert.strictEqual(film.getEpisodeId(),        1);
        assert.strictEqual(film.getOpeningCrawl(),     'test opening crawl');
        assert.strictEqual(film.getPlanetUrls()[0],    'https://swapi.co/api/planets/27/');
        assert.strictEqual(film.getProducer(),         'test producer');
        assert.strictEqual(film.getReleaseDate(),      '2012-11-11');
        assert.strictEqual(film.getSpeciesUrls()[0],   'https://swapi.co/api/species/1/');
        assert.strictEqual(film.getStarshipUrls()[0],  'https://swapi.co/api/starships/17/');
        assert.strictEqual(film.getTitle(),            'test title');
        assert.strictEqual(film.getUrl(),              'https://swapi.co/api/films/2/');
        assert.strictEqual(film.getVehicleUrls()[0],   'https://swapi.co/api/vehicles/20/');
        assert.strictEqual(film.getId(),               2);
    });

    it('initializes correctly', async () => {
        const film = new FilmEntity();

        assert.strictEqual(film.getCharacterUrls().length, 0);
        assert.strictEqual(film.getCreated(),              '');
        assert.strictEqual(film.getDirector(),             '');
        assert.strictEqual(film.getUpdated(),               '');
        assert.strictEqual(film.getEpisodeId(),            0);
        assert.strictEqual(film.getOpeningCrawl(),         '');
        assert.strictEqual(film.getPlanetUrls().length,    0);
        assert.strictEqual(film.getProducer(),             '');
        assert.strictEqual(film.getReleaseDate(),          '');
        assert.strictEqual(film.getSpeciesUrls().length,   0);
        assert.strictEqual(film.getStarshipUrls().length,  0);
        assert.strictEqual(film.getTitle(),                '');
        assert.strictEqual(film.getUrl(),                  '');
        assert.strictEqual(film.getVehicleUrls().length,   0);
        assert.strictEqual(film.getId(),                   0);
    });
});