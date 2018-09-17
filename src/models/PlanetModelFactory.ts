import { GatewaysFactory } from '../gateways/GatewaysFactory';
import { PlanetModel } from './PlanetModel';

export class PlanetModelFactory {

    public static create(): PlanetModel {
        const gateways = GatewaysFactory.create();
        const model    = new PlanetModel(gateways);

        return model;
    }
}