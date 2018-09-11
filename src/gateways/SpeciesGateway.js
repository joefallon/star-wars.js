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
import SpeciesEntity from '../entities/SpeciesEntity';
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
export default SpeciesGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2llc0dhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGVjaWVzR2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBNkIsTUFBTSxPQUFPLENBQUM7QUFHbEQsT0FBTyxhQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQ7SUFPSSx3QkFBbUIsT0FBZSxFQUFFLEtBQTZCLEVBQUUsT0FBZTtRQUM5RSxJQUFJLENBQUMsSUFBSSxHQUFXLE9BQU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBUyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCLFVBQXVCLEdBQVc7UUFBbEMsaUJBZ0JDO1FBZkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Ozt3QkFDL0IsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBRTFCLElBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDZixzQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO3lCQUNsQzt3QkFFSyxNQUFNLEdBQUssSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDbEIscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUE7O3dCQUF2QyxRQUFRLEdBQUcsU0FBNEI7d0JBQ3ZDLElBQUksR0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUN6QixPQUFPLEdBQUksY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUUvRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7O2FBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYyx1Q0FBd0IsR0FBdkMsVUFBd0MsSUFBUztRQUM3QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXBDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUV0QyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBbER1QiwwQkFBVyxHQUFHLFVBQVUsQ0FBQztJQW1EckQscUJBQUM7Q0FBQSxBQXBERCxJQW9EQztlQXBEb0IsY0FBYyJ9