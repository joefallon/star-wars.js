import { GatewaysFactory } from '../gateways/GatewaysFactory';
import { StarshipModel } from './StarshipModel';

export class StarshipModelFactory {

    public static create(): StarshipModel {
        const gateways = GatewaysFactory.create();
        const model    = new StarshipModel(gateways);

        return model;
    }
}