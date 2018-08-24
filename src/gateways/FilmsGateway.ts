import axios, { AxiosRequestConfig } from 'axios';
import * as LRU from 'lru-cache';
import { FilmEntity } from '../entities/FilmEntity';


export class FilmsGateway {
    private readonly _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;
    private _cache: LRU.Cache<string, any>;

    public constructor(baseApi: string, cache: LRU.Cache<string, any>) {
        this._api = baseApi + 'films/';
        this._axiosConfig = { timeout: 5000 };
        this._cache = cache;
    }

    public async retrieveAllFilms(): Promise<FilmEntity[]> {
        if(this._cache.has(this._api)) {
            return this._cache.get(this._api);
        }

        const response = await axios.get(this._api, this._axiosConfig);
        const filmData = <any[]>response.data['results'];
        const films    = <FilmEntity[]>[];

        filmData.map((item) => {
            const episodeId = parseInt(item['episode_id'], 10);

            const film = new FilmEntity();
            film.setCharacterUrls(item['characters']);
            film.setCreated(item['created']);
            film.setDirector(item['director']);
            film.setEpisodeId(episodeId);
            film.setOpeningCrawl(item['opening_crawl']);
            film.setPlanetUrls(item['planets']);
            film.setProducer(item['producer']);
            film.setReleaseDate(item['release_date']);
            film.setSpeciesUrls(item['species']);
            film.setStarshipUrls(item['starships']);
            film.setTitle(item['title']);
            film.setUpdated(item['edited']);
            film.setUrl(item['url']);
            film.setVehicleUrls(item['vehicles']);

            films.push(film);
        });

        this._cache.set(this._api, films);

        return films;
    }

    public retrieveFilm(filmUrl: string): Promise<FilmEntity> {
        return new Promise(async (resolve, reject) => {
            if(this._cache.has(filmUrl)) {
                return resolve(this._cache.get(filmUrl));
            }

            const response = await axios.get(filmUrl, this._axiosConfig);
            const filmData = <any[]>response.data;
            const film = FilmsGateway.mapToFilmEntity(filmData);

            this._cache.set(filmUrl, film);
            resolve(film);
        });
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