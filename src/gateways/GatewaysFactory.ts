import * as LRU from 'lru-cache';

import main_config from '../config/main_config';

import Gateways from './Gateways';
import CharactersGateway from './CharactersGateway';
import FilmsGateway from './FilmsGateway';
import PlanetsGateway from './PlanetsGateway';
import SpeciesGateway from './SpeciesGateway';
import StarshipsGateway from './StarshipsGateway';
import VehiclesGateway from './VehiclesGateway';

export class GatewaysFactory {
    private static _cache: LRU.Cache<string, any>;

    public static create(): Gateways {
        if(GatewaysFactory._cache == null) {
            const max = main_config.cache_items_max;
            GatewaysFactory._cache = LRU({max: max});
        }

        const api     = main_config.api_url;
        const cache   = GatewaysFactory._cache;
        const timeout = main_config.api_timeout;

        return {
            filmsGateway:      new FilmsGateway(api, cache, timeout),
            charactersGateway: new CharactersGateway(api, cache, timeout),
            planetsGateway:    new PlanetsGateway(api, cache, timeout),
            speciesGateway:    new SpeciesGateway(api, cache, timeout),
            starshipsGateway:  new StarshipsGateway(api, cache, timeout),
            vehiclesGateway:   new VehiclesGateway(api, cache, timeout)
        } as Gateways;
    }
}