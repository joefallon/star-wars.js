import { GatewaysFactory } from '../gateways/GatewaysFactory';
import { IndexModel } from './IndexModel';

export class IndexModelFactory {

    public static create(): IndexModel {
        const gateways   = GatewaysFactory.create();
        const indexModel = new IndexModel(gateways);

        return indexModel;
    }
}