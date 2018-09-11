var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from 'axios';
import StarshipEntity from '../entities/StarshipEntity';
var StarshipsGateway = /** @class */ (function () {
    function StarshipsGateway(baseApi, cache, timeout) {
        this._api = baseApi + StarshipsGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache = cache;
    }
    StarshipsGateway.prototype.retrieveStarship = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, starship_1, config, response, data, starship;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this._cache;
                        if (cache.has(url)) {
                            starship_1 = cache.get(url);
                            return [2 /*return*/, starship_1];
                        }
                        config = this._axiosConfig;
                        return [4 /*yield*/, axios.get(url, config)];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        starship = StarshipsGateway.mapResponseDataToStarship(data);
                        cache.set(url, starship);
                        return [2 /*return*/, starship];
                }
            });
        });
    };
    StarshipsGateway.mapResponseDataToStarship = function (data) {
        var starship = new StarshipEntity();
        starship.setCargoCapacityInKilograms(parseFloat(data['cargo_capacity']));
        starship.setConsumables(data['consumables']);
        starship.setCostInCredits(parseInt(data['cost_in_credits'], 10));
        starship.setCreated(data['created']);
        starship.setCrewCount(parseInt(data['crew'], 10));
        starship.setFilmUrls(data['films']);
        starship.setHyperdriveRating(data['hyperdrive_rating']);
        starship.setLengthInMeters(parseFloat(data['length']));
        starship.setManufacturer(data['manufacturer']);
        starship.setMaxAtmospheringSpeedInKPH(parseFloat(data['max_atmosphering_speed']));
        starship.setMegalightSpeed(data['MGLT']);
        starship.setModel(data['model']);
        starship.setName(data['name']);
        starship.setPassengerCount(parseInt(data['passengers'], 10));
        starship.setPilotCharacterUrls(data['pilots']);
        starship.setStarshipClass(data['starship_class']);
        starship.setUpdated(data['edited']);
        starship.setUrl(data['url']);
        return starship;
    };
    StarshipsGateway.API_SEGMENT = 'starships/';
    return StarshipsGateway;
}());
export default StarshipsGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnNoaXBzR2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0YXJzaGlwc0dhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQTZCLE1BQU0sT0FBTyxDQUFDO0FBR2xELE9BQU8sY0FBYyxNQUFNLDRCQUE0QixDQUFDO0FBRXhEO0lBT0ksMEJBQW1CLE9BQWUsRUFBRSxLQUE2QixFQUFFLE9BQWU7UUFDOUUsSUFBSSxDQUFDLElBQUksR0FBVyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBUyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVZLDJDQUFnQixHQUE3QixVQUE4QixHQUFXOzs7Ozs7d0JBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUUxQixJQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ1QsYUFBVyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNoQyxzQkFBTyxVQUFRLEVBQUM7eUJBQ25CO3dCQUVLLE1BQU0sR0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNsQixxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBQTs7d0JBQXZDLFFBQVEsR0FBRyxTQUE0Qjt3QkFDdkMsSUFBSSxHQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRXpCLHNCQUFPLFFBQVEsRUFBQzs7OztLQUNuQjtJQUVjLDBDQUF5QixHQUF4QyxVQUF5QyxJQUFTO1FBQzlDLElBQU0sUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFFdEMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFwRHVCLDRCQUFXLEdBQUcsWUFBWSxDQUFDO0lBcUR2RCx1QkFBQztDQUFBLEFBdERELElBc0RDO2VBdERvQixnQkFBZ0IifQ==