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
var PlanetModel = /** @class */ (function () {
    function PlanetModel(gateways) {
        this._gateways = gateways;
    }
    PlanetModel.prototype.loadPlanetData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var planetsGateway, planet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        planetsGateway = this._gateways.planetsGateway;
                        return [4 /*yield*/, planetsGateway.retrievePlanet("https://swapi.co/api/planets/" + id + "/")];
                    case 1:
                        planet = _a.sent();
                        this._planet = planet;
                        return [4 /*yield*/, Promise.all([this.loadFilms(), this.loadResidents()])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    PlanetModel.prototype.getPlanet = function () {
        return this._planet;
    };
    PlanetModel.prototype.getFilms = function () {
        return this._films;
    };
    PlanetModel.prototype.getResidents = function () {
        return this._residents;
    };
    PlanetModel.prototype.loadFilms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filmsGateway, planet, filmUrls, filmPromises, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filmsGateway = this._gateways.filmsGateway;
                        planet = this._planet;
                        filmUrls = planet.getFilmUrls();
                        filmPromises = [];
                        filmUrls.map(function (url) {
                            var promise = filmsGateway.retrieveFilm(url);
                            filmPromises.push(promise);
                        });
                        _a = this;
                        return [4 /*yield*/, Promise.all(filmPromises)];
                    case 1:
                        _a._films = _b.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    ;
    PlanetModel.prototype.loadResidents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var charactersGateway, planet, characterUrls, characterPromises, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        charactersGateway = this._gateways.charactersGateway;
                        planet = this._planet;
                        characterUrls = planet.getResidentCharacterUrls();
                        characterPromises = [];
                        characterUrls.map(function (url) {
                            var promise = charactersGateway.retrieveCharacter(url);
                            characterPromises.push(promise);
                        });
                        _a = this;
                        return [4 /*yield*/, Promise.all(characterPromises)];
                    case 1:
                        _a._residents = _b.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    return PlanetModel;
}());
export { PlanetModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQbGFuZXRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0lBTUkscUJBQW1CLFFBQWtCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFWSxvQ0FBYyxHQUEzQixVQUE0QixFQUFVOzs7Ozs7d0JBQzVCLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQzt3QkFDdEMscUJBQU0sY0FBYyxDQUFDLGNBQWMsQ0FBQyxrQ0FBZ0MsRUFBRSxNQUFHLENBQUMsRUFBQTs7d0JBQW5GLE1BQU0sR0FBRyxTQUEwRTt3QkFDekYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBRXRCLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFFLENBQUMsRUFBQTs7d0JBQTdELFNBQTZELENBQUM7d0JBRTlELHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRU0sK0JBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLGtDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFYSwrQkFBUyxHQUF2Qjs7Ozs7O3dCQUNVLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzt3QkFDM0MsTUFBTSxHQUFTLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQzVCLFFBQVEsR0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3BDLFlBQVksR0FBRyxFQUFFLENBQUM7d0JBRXhCLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXOzRCQUNyQixJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUMvQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixDQUFDLENBQUMsQ0FBQzt3QkFFSCxLQUFBLElBQUksQ0FBQTt3QkFBVSxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBN0MsR0FBSyxNQUFNLEdBQUcsU0FBK0IsQ0FBQzt3QkFFOUMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFBQSxDQUFDO0lBRVksbUNBQWEsR0FBM0I7Ozs7Ozt3QkFDVSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO3dCQUNyRCxNQUFNLEdBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDakMsYUFBYSxHQUFPLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO3dCQUN0RCxpQkFBaUIsR0FBRyxFQUFFLENBQUM7d0JBRTdCLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXOzRCQUMxQixJQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDekQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNwQyxDQUFDLENBQUMsQ0FBQzt3QkFFSCxLQUFBLElBQUksQ0FBQTt3QkFBYyxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUE7O3dCQUF0RCxHQUFLLFVBQVUsR0FBRyxTQUFvQyxDQUFDO3dCQUV2RCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQyJ9