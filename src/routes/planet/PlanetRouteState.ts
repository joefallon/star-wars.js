import { PlanetModel } from '../../models/PlanetModel';

export interface PlanetRouteState {
    isLoading: boolean,
    id:        number,
    model:     PlanetModel
}