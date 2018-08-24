import * as LRU from 'lru-cache';
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
            GatewaysFactory._cache = LRU({ max: 500 });
        }
        return {
            filmsGateway: new FilmsGateway(__API__, GatewaysFactory._cache),
            charactersGateway: new CharactersGateway(__API__, GatewaysFactory._cache),
            planetsGateway: new PlanetsGateway(__API__, GatewaysFactory._cache),
            speciesGateway: new SpeciesGateway(__API__, GatewaysFactory._cache),
            starshipsGateway: new StarshipsGateway(__API__, GatewaysFactory._cache),
            vehiclesGateway: new VehiclesGateway(__API__, GatewaysFactory._cache)
        };
    };
    return GatewaysFactory;
}());
export { GatewaysFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F0ZXdheXNGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2F0ZXdheXNGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtwRDtJQUFBO0lBaUJBLENBQUM7SUFkaUIsc0JBQU0sR0FBcEI7UUFDSSxJQUFHLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQy9CLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPO1lBQ0gsWUFBWSxFQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3BFLGlCQUFpQixFQUFFLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDekUsY0FBYyxFQUFLLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3RFLGNBQWMsRUFBSyxJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUN0RSxnQkFBZ0IsRUFBRyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3hFLGVBQWUsRUFBSSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUM5RCxDQUFDO0lBQ2xCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkMifQ==