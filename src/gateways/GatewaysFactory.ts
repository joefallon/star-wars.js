import { FilmsGateway } from './FilmsGateway';
import { Gateways } from './Gateways';

declare let __API__: string;

export class GatewaysFactory {
    public static create(): Gateways {
        return {
            filmsGateway: new FilmsGateway(__API__)
        } as Gateways;
    }
}