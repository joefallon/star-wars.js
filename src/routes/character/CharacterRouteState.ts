import CharacterModel from '../../models/CharacterModel';

export default interface CharacterRouteState {
    isLoading: boolean,
    id:        number
    model:     CharacterModel
}