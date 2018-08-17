import axios, { AxiosRequestConfig } from 'axios';
import { FilmEntity } from '../entities/FilmEntity';


export class FilmsGateway {
    private readonly _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;

    public constructor(baseApi: string) {
        this._api = baseApi + 'films/';
        this._axiosConfig = { timeout: 5000 };
        console.log(this._api);
    }

    public async retrieveAllFilms(): Promise<FilmEntity[]> {
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

        console.log(films);

        return films;
    }

    public retrieveFilm(filmUrl: string): Promise<FilmEntity> {
        return null;
    }
}