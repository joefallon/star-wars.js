import { FilmEntity } from '../entities/FilmEntity';
import Gateways from '../gateways/Gateways';

export class IndexModel {
    private _gateways: Gateways;

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public getFilms(): Promise<FilmEntity[]> {
        return new Promise(async (resolve, reject) => {
            const films = await this._gateways.filmsGateway.retrieveAllFilms();
            resolve(films);
        });
    }
}