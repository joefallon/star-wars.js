import { GatewaysFactory } from '../gateways/GatewaysFactory';
import { VehicleModel } from './VehicleModel';

export class VehicleModelFactory {

    public static create(): VehicleModel {
        const gateways = GatewaysFactory.create();
        const model    = new VehicleModel(gateways);

        return model;
    }
}