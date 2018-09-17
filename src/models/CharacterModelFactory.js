import { CharacterModel } from './CharacterModel';
import { GatewaysFactory } from '../gateways/GatewaysFactory';
var CharacterModelFactory = /** @class */ (function () {
    function CharacterModelFactory() {
    }
    CharacterModelFactory.create = function () {
        var gateways = GatewaysFactory.create();
        var model = new CharacterModel(gateways);
        return model;
    };
    return CharacterModelFactory;
}());
export { CharacterModelFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyTW9kZWxGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmFjdGVyTW9kZWxGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQ7SUFBQTtJQU9BLENBQUM7SUFOaUIsNEJBQU0sR0FBcEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUMsSUFBTSxLQUFLLEdBQU0sSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0MifQ==