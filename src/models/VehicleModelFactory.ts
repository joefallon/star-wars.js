import { VehicleModel } from './VehicleModel';

export class VehicleModelFactory {

    public static create(): VehicleModel {
        return new VehicleModel();
    }
}