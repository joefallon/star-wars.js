import { FilmModel } from './FilmModel';
import { GatewaysFactory } from '../gateways/GatewaysFactory';
var FilmModelFactory = /** @class */ (function () {
    function FilmModelFactory() {
    }
    FilmModelFactory.create = function () {
        var gateways = GatewaysFactory.create();
        var model = new FilmModel(gateways);
        return model;
    };
    return FilmModelFactory;
}());
export { FilmModelFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbU1vZGVsRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbG1Nb2RlbEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQ7SUFBQTtJQVFBLENBQUM7SUFOaUIsdUJBQU0sR0FBcEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUMsSUFBTSxLQUFLLEdBQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUMifQ==