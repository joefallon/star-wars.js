import CharactersGateway from './CharactersGateway';
import FilmsGateway from './FilmsGateway';
import PlanetsGateway from './PlanetsGateway';
import SpeciesGateway from './SpeciesGateway';
import StarshipsGateway from './StarshipsGateway';
import VehiclesGateway from './VehiclesGateway';

export default interface Gateways {
    charactersGateway: CharactersGateway;
    filmsGateway:      FilmsGateway;
    planetsGateway:    PlanetsGateway;
    speciesGateway:    SpeciesGateway;
    starshipsGateway:  StarshipsGateway;
    vehiclesGateway:   VehiclesGateway;
}