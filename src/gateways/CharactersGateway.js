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
import { CharacterEntity } from '../entities/CharacterEntity';
var CharactersGateway = /** @class */ (function () {
    function CharactersGateway(baseApi, cache, timeout) {
        this._api = baseApi + CharactersGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache = cache;
    }
    CharactersGateway.prototype.retrieveCharacter = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var cache, character_1, config, response, data, character;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this._cache;
                        if (cache.has(url)) {
                            character_1 = cache.get(url);
                            return [2 /*return*/, resolve(character_1)];
                        }
                        config = this._axiosConfig;
                        return [4 /*yield*/, axios.get(url, config)];
                    case 1:
                        response = _a.sent();
                        data = response['data'];
                        character = CharactersGateway.mapResponseDataToEntity(data);
                        cache.set(url, character);
                        resolve(character);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CharactersGateway.mapResponseDataToEntity = function (data) {
        var character = new CharacterEntity();
        character.setBirthYear(data['birth_year']);
        character.setCreated(data['created']);
        character.setEyeColor(data['eye_color']);
        character.setFilmUrls(data['films']);
        character.setGender(data['gender']);
        character.setHairColor(data['hair_color']);
        character.setHeightInCentimeters(parseInt(data['height'], 10));
        character.setHomePlanetUrl(data['homeworld']);
        character.setMassInKilograms(parseInt(data['mass'], 10));
        character.setName(data['name']);
        character.setSkinColor(data['skin_color']);
        character.setSpeciesUrls(data['species']);
        character.setStarshipUrls(data['starships']);
        character.setUpdated(data['edited']);
        character.setUrl(data['url']);
        character.setVehicleUrls(data['vehicles']);
        return character;
    };
    CharactersGateway.API_SEGMENT = 'characters/';
    return CharactersGateway;
}());
export { CharactersGateway };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyc0dhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGFyYWN0ZXJzR2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBNkIsTUFBTSxPQUFPLENBQUM7QUFHbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlEO0lBT0ksMkJBQW1CLE9BQWUsRUFBRSxLQUE2QixFQUFFLE9BQWU7UUFDOUUsSUFBSSxDQUFDLElBQUksR0FBVyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBUyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVNLDZDQUFpQixHQUF4QixVQUF5QixHQUFXO1FBQXBDLGlCQWdCQztRQWZHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7d0JBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUUxQixJQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ1QsY0FBWSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQyxzQkFBTyxPQUFPLENBQUMsV0FBUyxDQUFDLEVBQUM7eUJBQzdCO3dCQUVLLE1BQU0sR0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNsQixxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBQTs7d0JBQXhDLFFBQVEsR0FBSSxTQUE0Qjt3QkFDeEMsSUFBSSxHQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDN0IsU0FBUyxHQUFHLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O2FBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYyx5Q0FBdUIsR0FBdEMsVUFBdUMsSUFBUztRQUM1QyxJQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRXhDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0QyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDckMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNwQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBbkR1Qiw2QkFBVyxHQUFHLGFBQWEsQ0FBQztJQW9EeEQsd0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXJEWSxpQkFBaUIifQ==