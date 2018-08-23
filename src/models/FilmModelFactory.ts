import { FilmModel } from './FilmModel';
import { GatewaysFactory } from '../gateways/GatewaysFactory';

export class FilmModelFactory {

    public static create(): FilmModel {
        const gateways = GatewaysFactory.create();
        const model    = new FilmModel(gateways);

        return model;
    }
}