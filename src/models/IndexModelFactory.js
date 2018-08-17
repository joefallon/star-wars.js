import { GatewaysFactory } from '../gateways/GatewaysFactory';
import { IndexModel } from './IndexModel';
var IndexModelFactory = /** @class */ (function () {
    function IndexModelFactory() {
    }
    IndexModelFactory.create = function () {
        var gateways = GatewaysFactory.create();
        var indexModel = new IndexModel(gateways);
        return indexModel;
    };
    return IndexModelFactory;
}());
export { IndexModelFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhNb2RlbEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbmRleE1vZGVsRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQztJQUFBO0lBUUEsQ0FBQztJQU5pQix3QkFBTSxHQUFwQjtRQUNJLElBQU0sUUFBUSxHQUFLLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyJ9