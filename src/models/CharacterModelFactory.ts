import CharacterModel from './CharacterModel';
import { GatewaysFactory } from '../gateways/GatewaysFactory';

export default class CharacterModelFactory {
    public static create(): CharacterModel {
        const gateways = GatewaysFactory.create();
        const model    = new CharacterModel(gateways);

        return model;
    }
}