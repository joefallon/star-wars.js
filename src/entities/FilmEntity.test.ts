import * as assert from 'assert';

import FilmEntity from './FilmEntity';

describe('FilmEntity', () => {

    it('has correct getters and setters', async () => {
        const film = new FilmEntity();
        film.setCharacterUrls(['character1']);
        film.setCreated('2012-12-12T12:12:12');
        film.setDirector('director');
        film.setUpdated('2012-12-12T11:11:11');
        film.setEpisodeId(1);
        film.setOpeningCrawl('opening crawl');
        film.setPlanetUrls(['planet1']);
        film.setProducer('producer');
        film.setReleaseDate('2012-12-12');
        film.setSpeciesUrls(['species1']);
        film.setStarshipUrls(['starship1']);
        film.setTitle('title');
        film.setUrl('url');
        film.setVehicleUrls(['vehicle1']);

        assert.strictEqual(film.getCharacterUrls()[0], 'character1');
        assert.strictEqual(film.getCreated(),          '2012-12-12T12:12:12');
        assert.strictEqual(film.getDirector(),         'director');
        assert.strictEqual(film.getUpdated(),           '2012-12-12T11:11:11');
        assert.strictEqual(film.getEpisodeId(),        1);
        assert.strictEqual(film.getOpeningCrawl(),     'opening crawl');
        assert.strictEqual(film.getPlanetUrls()[0],    'planet1');
        assert.strictEqual(film.getProducer(),         'producer');
        assert.strictEqual(film.getReleaseDate(),      '2012-12-12');
        assert.strictEqual(film.getSpeciesUrls()[0],   'species1');
        assert.strictEqual(film.getStarshipUrls()[0],  'starship1');
        assert.strictEqual(film.getTitle(),            'title');
        assert.strictEqual(film.getUrl(),              'url');
        assert.strictEqual(film.getVehicleUrls()[0],   'vehicle1');
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
    });
});