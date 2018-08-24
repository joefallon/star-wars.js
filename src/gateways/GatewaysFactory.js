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
        return {
            filmsGateway: new FilmsGateway(__API__),
            charactersGateway: new CharactersGateway(__API__),
            planetsGateway: new PlanetsGateway(__API__),
            speciesGateway: new SpeciesGateway(__API__),
            starshipsGateway: new StarshipsGateway(__API__),
            vehiclesGateway: new VehiclesGateway(__API__)
        };
    };
    return GatewaysFactory;
}());
export { GatewaysFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F0ZXdheXNGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2F0ZXdheXNGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUlwRDtJQUFBO0lBV0EsQ0FBQztJQVZpQixzQkFBTSxHQUFwQjtRQUNJLE9BQU87WUFDSCxZQUFZLEVBQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQzVDLGlCQUFpQixFQUFFLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQ2pELGNBQWMsRUFBSyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDOUMsY0FBYyxFQUFLLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUM5QyxnQkFBZ0IsRUFBRyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztZQUNoRCxlQUFlLEVBQUksSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ3RDLENBQUM7SUFDbEIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MifQ==