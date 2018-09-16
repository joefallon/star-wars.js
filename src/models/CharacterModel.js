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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var CharacterModel = /** @class */ (function () {
    function CharacterModel(gateways) {
        this._gateways = gateways;
    }
    CharacterModel.prototype.loadCharacterInformation = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var charactersGateway, characterUrl, _a, _b, homeworld, films, vehicles, species, starships;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        charactersGateway = this._gateways.charactersGateway;
                        characterUrl = CharacterModel.BASE_URL + (id + "/");
                        _a = this;
                        return [4 /*yield*/, charactersGateway.retrieveCharacter(characterUrl)];
                    case 1:
                        _a._character = _c.sent();
                        return [4 /*yield*/, Promise.all([
                                this.loadHomeworld(),
                                this.loadFilms(),
                                this.loadVehicles(),
                                this.loadSpecies(),
                                this.loadStarships()
                            ])];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 5]), homeworld = _b[0], films = _b[1], vehicles = _b[2], species = _b[3], starships = _b[4];
                        this._homeworld = homeworld;
                        this._films = films;
                        this._vehicles = vehicles;
                        this._species = species;
                        this._starships = starships;
                        return [2 /*return*/];
                }
            });
        });
    };
    CharacterModel.prototype.getCharacter = function () {
        return this._character;
    };
    CharacterModel.prototype.getHomeworld = function () {
        return this._homeworld;
    };
    CharacterModel.prototype.getFilms = function () {
        return this._films;
    };
    CharacterModel.prototype.getSpecies = function () {
        return this._species;
    };
    CharacterModel.prototype.loadHomeworld = function () {
        return __awaiter(this, void 0, void 0, function () {
            var character, planetUrl, planetsGateway, planet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        character = this._character;
                        planetUrl = character.getHomePlanetUrl();
                        planetsGateway = this._gateways.planetsGateway;
                        return [4 /*yield*/, planetsGateway.retrievePlanet(planetUrl)];
                    case 1:
                        planet = _a.sent();
                        return [2 /*return*/, planet];
                }
            });
        });
    };
    CharacterModel.prototype.loadFilms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var character, filmsGateway, filmUrls, films;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        character = this._character;
                        filmsGateway = this._gateways.filmsGateway;
                        filmUrls = character.getFilmUrls();
                        films = [];
                        filmUrls.map(function (url) {
                            var filmPromise = filmsGateway.retrieveFilm(url);
                            films.push(filmPromise);
                        });
                        return [4 /*yield*/, Promise.all(films)];
                    case 1:
                        films = _a.sent();
                        return [2 /*return*/, films];
                }
            });
        });
    };
    CharacterModel.prototype.loadVehicles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var character, vehicleUrls, vehiclesGateway, vehicles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        character = this._character;
                        vehicleUrls = character.getVehicleUrls();
                        vehiclesGateway = this._gateways.vehiclesGateway;
                        vehicles = [];
                        vehicleUrls.map(function (url) {
                            var promise = vehiclesGateway.retrieveVehicle(url);
                            vehicles.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(vehicles)];
                    case 1:
                        vehicles = _a.sent();
                        return [2 /*return*/, vehicles];
                }
            });
        });
    };
    CharacterModel.prototype.loadSpecies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var character, speciesGateway, speciesUrls, species;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        character = this._character;
                        speciesGateway = this._gateways.speciesGateway;
                        speciesUrls = character.getSpeciesUrls();
                        species = [];
                        speciesUrls.map(function (url) {
                            var speciesPromise = speciesGateway.retrieveSpecies(url);
                            species.push(speciesPromise);
                        });
                        return [4 /*yield*/, Promise.all(species)];
                    case 1:
                        species = _a.sent();
                        return [2 /*return*/, species];
                }
            });
        });
    };
    CharacterModel.prototype.loadStarships = function () {
        return __awaiter(this, void 0, void 0, function () {
            var character, starshipsGateway, starshipUrls, starships;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        character = this._character;
                        starshipsGateway = this._gateways.starshipsGateway;
                        starshipUrls = character.getStarshipUrls();
                        starships = [];
                        starshipUrls.map(function (url) {
                            var promise = starshipsGateway.retrieveStarship(url);
                            starships.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(starships)];
                    case 1:
                        starships = _a.sent();
                        return [2 /*return*/, starships];
                }
            });
        });
    };
    CharacterModel.prototype.getVehicles = function () {
        return this._vehicles;
    };
    CharacterModel.prototype.getStarships = function () {
        return this._starships;
    };
    CharacterModel.BASE_URL = 'https://swapi.co/api/people/';
    return CharacterModel;
}());
export default CharacterModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGFyYWN0ZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtJQVdJLHdCQUFtQixRQUFrQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRVksaURBQXdCLEdBQXJDLFVBQXNDLEVBQVU7Ozs7Ozt3QkFDdEMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDckQsWUFBWSxHQUFRLGNBQWMsQ0FBQyxRQUFRLElBQU0sRUFBRSxNQUFHLENBQUEsQ0FBQzt3QkFDN0QsS0FBQSxJQUFJLENBQUE7d0JBQXNCLHFCQUFNLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBakYsR0FBSyxVQUFVLEdBQVcsU0FBdUQsQ0FBQzt3QkFFM0IscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztnQ0FDckUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQ0FDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQ0FDaEIsSUFBSSxDQUFDLFlBQVksRUFBRTtnQ0FDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQ0FDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRTs2QkFDdkIsQ0FBQyxFQUFBOzt3QkFORSxLQUFBLHNCQUFtRCxTQU1yRCxLQUFBLEVBTkcsU0FBUyxRQUFBLEVBQUUsS0FBSyxRQUFBLEVBQUUsUUFBUSxRQUFBLEVBQUUsT0FBTyxRQUFBLEVBQUUsU0FBUyxRQUFBO3dCQVFuRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBTyxLQUFLLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUksUUFBUSxDQUFDO3dCQUMzQixJQUFJLENBQUMs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