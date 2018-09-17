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
import { PlanetEntity } from '../entities/PlanetEntity';
var PlanetsGateway = /** @class */ (function () {
    function PlanetsGateway(baseApi, cache, timeout) {
        this._api = baseApi + PlanetsGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache = cache;
    }
    PlanetsGateway.prototype.retrievePlanet = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var cache, planet_1, config, response, data, planet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this._cache;
                        if (cache.has(url)) {
                            planet_1 = cache.get(url);
                            return [2 /*return*/, resolve(planet_1)];
                        }
                        config = this._axiosConfig;
                        return [4 /*yield*/, axios.get(url, config)];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        planet = PlanetsGateway.mapResponseDataToEntity(data);
                        cache.set(url, planet);
                        resolve(planet);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PlanetsGateway.mapResponseDataToEntity = function (data) {
        var planet = new PlanetEntity();
        planet.setClimate(data['climate']);
        planet.setCreated(data['created']);
        planet.setDiameterInKilometers(parseInt(data['diameter'], 10));
        planet.setFilmUrls(data['films']);
        planet.setGravity(data['gravity']);
        planet.setName(data['name']);
        planet.setOrbitalPeriodInDays(parseInt(data['orbital_period'], 10));
        planet.setPopulation(data['population']);
        planet.setResidentCharacterUrls(data['residents']);
        planet.setRotationPeriodInDays(parseInt(data['rotation_period'], 10));
        planet.setSurfaceWaterPercent(parseFloat(data['surface_water']));
        planet.setTerrain(data['terrain']);
        planet.setUpdated(data['edited']);
        planet.setUrl(data['url']);
        return planet;
    };
    PlanetsGateway.API_SEGMENT = 'planets/';
    return PlanetsGateway;
}());
export { PlanetsGateway };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0c0dhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQbGFuZXRzR2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBNkIsTUFBTSxPQUFPLENBQUM7QUFHbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhEO0lBT0ksd0JBQW1CLE9BQWUsRUFBRSxLQUE2QixFQUFFLE9BQWU7UUFDOUUsSUFBSSxDQUFDLElBQUksR0FBVyxPQUFPLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQVMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSx1Q0FBYyxHQUFyQixVQUFzQixHQUFXO1FBQWpDLGlCQWlCQztRQWhCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTyxFQUFFLE1BQU07Ozs7O3dCQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFFMUIsSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNULFdBQVMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDOUIsc0JBQU8sT0FBTyxDQUFDLFFBQU0sQ0FBQyxFQUFDO3lCQUMxQjt3QkFFSyxNQUFNLEdBQUssSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDbEIscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUE7O3dCQUF2QyxRQUFRLEdBQUcsU0FBNEI7d0JBQ3ZDLElBQUksR0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUN6QixNQUFNLEdBQUssY0FBYyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU5RCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7O2FBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYyxzQ0FBdUIsR0FBdEMsVUFBdUMsSUFBUztRQUM1QyxJQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFsRHVCLDBCQUFXLEdBQUcsVUFBVSxDQUFDO0lBbURyRCxxQkFBQztDQUFBLEFBcERELElBb0RDO1NBcERZLGNBQWMifQ==