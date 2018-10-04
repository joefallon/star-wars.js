import { SpeciesModel } from './SpeciesModel';
import { GatewaysFactory } from '../gateways/GatewaysFactory';

export class SpeciesModelFactory {

    public static create(): SpeciesModel {
        const gateways = GatewaysFactory.create();
        const model    = new SpeciesModel(gateways);

        return model;
    }
}