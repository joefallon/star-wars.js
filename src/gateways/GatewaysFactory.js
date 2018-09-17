import * as LRU from 'lru-cache';
import main_config from '../config/main_config';
import { CharactersGateway } from './CharactersGateway';
import { FilmsGateway } from './FilmsGateway';
import { PlanetsGateway } from './PlanetsGateway';
import { SpeciesGateway } from './SpeciesGateway';
import { StarshipsGateway } from './StarshipsGateway';
import { VehiclesGateway } from './VehiclesGateway';
var GatewaysFactory = /** @class */ (function () {
    function GatewaysFactory() {
    }
    GatewaysFactory.create = function () {
        if (GatewaysFactory._cache == null) {
            var max = main_config.cache_items_max;
            GatewaysFactory._cache = LRU({ max: max });
        }
        var api = main_config.api_url;
        var cache = GatewaysFactory._cache;
        var timeout = main_config.api_timeout;
        return {
            filmsGateway: new FilmsGateway(api, cache, timeout),
            charactersGateway: new CharactersGateway(api, cache, timeout),
            planetsGateway: new PlanetsGateway(api, cache, timeout),
            speciesGateway: new SpeciesGateway(api, cache, timeout),
            starshipsGateway: new StarshipsGateway(api, cache, timeout),
            vehiclesGateway: new VehiclesGateway(api, cache, timeout)
        };
    };
    return GatewaysFactory;
}());
export { GatewaysFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F0ZXdheXNGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2F0ZXdheXNGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE9BQU8sV0FBVyxNQUFNLHVCQUF1QixDQUFDO0FBR2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRDtJQUFBO0lBc0JBLENBQUM7SUFuQmlCLHNCQUFNLEdBQXBCO1FBQ0ksSUFBRyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUMvQixJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDO1lBQ3hDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFNLEdBQUcsR0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUV4QyxPQUFPO1lBQ0gsWUFBWSxFQUFPLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQ3hELGlCQUFpQixFQUFFLElBQUksaUJBQWlCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDN0QsY0FBYyxFQUFLLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzFELGNBQWMsRUFBSyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUMxRCxnQkFBZ0IsRUFBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVELGVBQWUsRUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQztTQUNsRCxDQUFDO0lBQ2xCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkMifQ==