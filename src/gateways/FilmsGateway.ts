import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';

import { FilmEntity } from '../entities/FilmEntity';


export default class FilmsGateway {
    private static readonly API_SEGMENT = 'films/';

    private readonly _api:         string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private readonly _cache:       LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>, timeout: number) {
        this._api         = baseApi + FilmsGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache       = cache;
    }

    public async retrieveAllFilms(): Promise<FilmEntity[]> {
        if(this._cache.has(this._api)) {
            return this._cache.get(this._api);
        }

        const response = await axios.get(this._api, this._axiosConfig);
        const filmData = <any[]>response.data['results'];
        const films    = <FilmEntity[]>[];

        filmData.map((item) => {
            const film = FilmsGateway.mapToFilmEntity(item);
            films.push(film);
        });

        this._cache.set(this._api, films);

        return films;
    }

    public async retrieveFilm(filmUrl: string): Promise<FilmEntity> {
        const cache = this._cache;

        if(cache.has(filmUrl)) {
            const film = cache.get(filmUrl);
            return film;
        }

        const config   = this._axiosConfig;
        const response = await axios.get(filmUrl, config);
        const filmData = <any[]>response.data;
        const film     = FilmsGateway.mapToFilmEntity(filmData);
        cache.set(filmUrl, film);

        return film;
    }

    private static mapToFilmEntity(filmData: any[]): FilmEntity {
        const film = new FilmEntity();

        film.setCharacterUrls(filmData['characters']);
        film.setCreated(filmData['created']);
        film.setDirector(filmData['director']);
        film.setEpisodeId(filmData['episode_id']);
        film.setOpeningCrawl(filmData['opening_crawl']);
        film.setPlanetUrls(filmData['planets']);
        film.setProducer(filmData['producer']);
        film.setReleaseDate(filmData['release_date']);
        film.setSpeciesUrls(filmData['species']);
        film.setStarshipUrls(filmData['starships']);
        film.setTitle(filmData['title']);
        film.setUpdated(filmData['edited']);
        film.setUrl(filmData['url']);
        film.setVehicleUrls(filmData['vehicles']);

        return film;
    }
}