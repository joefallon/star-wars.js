import { StarshipModel } from '../../models/StarshipModel';

export interface StarshipRouteState {
    isLoading: boolean,
    model:     StarshipModel
}