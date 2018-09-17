import { CharacterModel } from '../../models/CharacterModel';

export interface CharacterRouteState {
    isLoading: boolean,
    id:        number
    model:     CharacterModel
}