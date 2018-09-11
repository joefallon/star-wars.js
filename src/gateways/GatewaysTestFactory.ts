import CharactersGateway from './CharactersGateway';
import FilmsGateway from './FilmsGateway';
import Gateways from './Gateways';
import PlanetsGateway from './PlanetsGateway';
import SpeciesGateway from './SpeciesGateway';
import StarshipsGateway from './StarshipsGateway';
import VehiclesGateway from './VehiclesGateway';

export class GatewaysTestFactory {
    public static create(): Gateways {
        const gateways = <Gateways>{};
        gateways.charactersGateway = {} as CharactersGateway;
        gateways.filmsGateway      = {} as FilmsGateway;
        gateways.planetsGateway    = {} as PlanetsGateway;
        gateways.speciesGateway    = {} as SpeciesGateway;
        gateways.starshipsGateway  = {} as StarshipsGateway;
        gateways.vehiclesGateway   = {} as VehiclesGateway;

        return gateways;
    }
}