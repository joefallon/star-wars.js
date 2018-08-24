import { LRUEntry } from 'lru-cache';
import * as LRU from 'lru-cache';
import { Gateways } from './Gateways';
import { CharactersGateway } from './CharactersGateway';
import { FilmsGateway } from './FilmsGateway';
import { PlanetsGateway } from './PlanetsGateway';
import { SpeciesGateway } from './SpeciesGateway';
import { StarshipsGateway } from './StarshipsGateway';
import { VehiclesGateway } from './VehiclesGateway';


declare let __API__: string;

export class GatewaysFactory {
    private static _cache: LRU.Cache<string, any>;

    public static create(): Gateways {
        if(GatewaysFactory._cache == null) {
            GatewaysFactory._cache = LRU({max: 500});
        }

        return {
            filmsGateway:      new FilmsGateway(__API__, GatewaysFactory._cache),
            charactersGateway: new CharactersGateway(__API__, GatewaysFactory._cache),
            planetsGateway:    new PlanetsGateway(__API__, GatewaysFactory._cache),
            speciesGateway:    new SpeciesGateway(__API__, GatewaysFactory._cache),
            starshipsGateway:  new StarshipsGateway(__API__, GatewaysFactory._cache),
            vehiclesGateway:   new VehiclesGateway(__API__, GatewaysFactory._cache)
        } as Gateways;
    }
}