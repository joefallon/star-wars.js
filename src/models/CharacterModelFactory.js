import CharacterModel from './CharacterModel';
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
export default CharacterModelFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyTW9kZWxGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmFjdGVyTW9kZWxGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RDtJQUFBO0lBT0EsQ0FBQztJQU5pQiw0QkFBTSxHQUFwQjtRQUNJLElBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQyxJQUFNLEtBQUssR0FBTSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQyJ9