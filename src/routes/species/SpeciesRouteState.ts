import { SpeciesModel } from '../../models/SpeciesModel';

export interface SpeciesRouteState {
    isLoading: boolean,
    id:        number,
    model:     SpeciesModel
}