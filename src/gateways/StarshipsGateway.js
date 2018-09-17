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
import { StarshipEntity } from '../entities/StarshipEntity';
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
export { StarshipsGateway };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnNoaXBzR2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0YXJzaGlwc0dhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQTZCLE1BQU0sT0FBTyxDQUFDO0FBR2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQU9JLDBCQUFtQixPQUFlLEVBQUUsS0FBNkIsRUFBRSxPQUFlO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQVcsT0FBTyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQVMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFWSwyQ0FBZ0IsR0FBN0IsVUFBOEIsR0FBVzs7Ozs7O3dCQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFFMUIsSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNULGFBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDaEMsc0JBQU8sVUFBUSxFQUFDO3lCQUNuQjt3QkFFSyxNQUFNLEdBQUssSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDbEIscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUE7O3dCQUF2QyxRQUFRLEdBQUcsU0FBNEI7d0JBQ3ZDLElBQUksR0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUN6QixRQUFRLEdBQUcsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUV6QixzQkFBTyxRQUFRLEVBQUM7Ozs7S0FDbkI7SUFFYywwQ0FBeUIsR0FBeEMsVUFBeUMsSUFBUztRQUM5QyxJQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBRXRDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN4RCxRQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMvQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU3QixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBcER1Qiw0QkFBVyxHQUFHLFlBQVksQ0FBQztJQXFEdkQsdUJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXREWSxnQkFBZ0IifQ==