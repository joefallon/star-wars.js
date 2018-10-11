import { VehicleModel } from '../../models/VehicleModel';

export interface VehicleRouteState {
    isLoading: boolean,
    id:        number,
    model:     VehicleModel
}