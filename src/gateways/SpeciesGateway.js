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
import { SpeciesEntity } from '../entities/SpeciesEntity';
var SpeciesGateway = /** @class */ (function () {
    function SpeciesGateway(baseApi, cache, timeout) {
        this._api = baseApi + SpeciesGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache = cache;
    }
    SpeciesGateway.prototype.retrieveSpecies = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var cache, config, response, data, species;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this._cache;
                        if (cache.has(url)) {
                            return [2 /*return*/, resolve(cache.get(url))];
                        }
                        config = this._axiosConfig;
                        return [4 /*yield*/, axios.get(url, config)];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        species = SpeciesGateway.mapResponseDataToSpecies(data);
                        cache.set(url, species);
                        resolve(species);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SpeciesGateway.mapResponseDataToSpecies = function (data) {
        var species = new SpeciesEntity();
        species.setAverageHeightInCentimeters(parseFloat(data['average_height']));
        species.setAverageLifespanInYears(parseFloat(data['average_lifespan']));
        species.setCharacterUrls(data['people']);
        species.setClassification(data['classification']);
        species.setCreated(data['created']);
        species.setDesignation(data['designation']);
        species.setEyeColor(data['eye_colors']);
        species.setFilmUrls(data['']);
        species.setHairColor(data['hair_colors']);
        species.setHomePlanetUrl(data['homeworld']);
        species.setName(data['name']);
        species.setSkinColor(data['skin_colors']);
        species.setUpdated(data['edited']);
        species.setUrl(data['url']);
        species.setLanguage(data['language']);
        return species;
    };
    SpeciesGateway.API_SEGMENT = 'species/';
    return SpeciesGateway;
}());
export { SpeciesGateway };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2llc0dhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGVjaWVzR2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBNkIsTUFBTSxPQUFPLENBQUM7QUFHbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFEO0lBT0ksd0JBQW1CLE9BQWUsRUFBRSxLQUE2QixFQUFFLE9BQWU7UUFDOUUsSUFBSSxDQUFDLElBQUksR0FBVyxPQUFPLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQVMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QixVQUF1QixHQUFXO1FBQWxDLGlCQWdCQztRQWZHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7d0JBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUUxQixJQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ2Ysc0JBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQzt5QkFDbEM7d0JBRUssTUFBTSxHQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2xCLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFBOzt3QkFBdkMsUUFBUSxHQUFHLFNBQTRCO3dCQUN2QyxJQUFJLEdBQU8sUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDekIsT0FBTyxHQUFJLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFL0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OzthQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWMsdUNBQXdCLEdBQXZDLFVBQXdDLElBQVM7UUFDN0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUVwQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxPQUFPLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFdEMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWxEdUIsMEJBQVcsR0FBRyxVQUFVLENBQUM7SUFtRHJELHFCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FwRFksY0FBYyJ9