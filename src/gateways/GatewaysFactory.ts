import { Gateways } from './Gateways';
import { CharactersGateway } from './CharactersGateway';
import { FilmsGateway } from './FilmsGateway';
import { PlanetsGateway } from './PlanetsGateway';
import { SpeciesGateway } from './SpeciesGateway';
import { StarshipsGateway } from './StarshipsGateway';
import { VehiclesGateway } from './VehiclesGateway';

declare let __API__: string;

export class GatewaysFactory {
    public static create(): Gateways {
        return {
            filmsGateway:      new FilmsGateway(__API__),
            charactersGateway: new CharactersGateway(__API__),
            planetsGateway:    new PlanetsGateway(__API__),
            speciesGateway:    new SpeciesGateway(__API__),
            starshipsGateway:  new StarshipsGateway(__API__),
            vehiclesGateway:   new VehiclesGateway(__API__)
        } as Gateways;
    }
}