import { GatewaysFactory } from '../gateways/GatewaysFactory';
import { PlanetModel } from './PlanetModel';
var PlanetModelFactory = /** @class */ (function () {
    function PlanetModelFactory() {
    }
    PlanetModelFactory.create = function () {
        var gateways = GatewaysFactory.create();
        var model = new PlanetModel(gateways);
        return model;
    };
    return PlanetModelFactory;
}());
export { PlanetModelFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0TW9kZWxGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxhbmV0TW9kZWxGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDO0lBQUE7SUFRQSxDQUFDO0lBTmlCLHlCQUFNLEdBQXBCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLElBQU0sS0FBSyxHQUFNLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFSRCxJQVFDIn0=