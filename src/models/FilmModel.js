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
var FilmModel = /** @class */ (function () {
    function FilmModel(gateways) {
        this._gateways = gateways;
    }
    FilmModel.prototype.loadFilmData = function (episodeId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var filmsGateway, url, _a, _b, characters, planets, starships, vehicles, species, e_1, err;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        filmsGateway = this._gateways.filmsGateway;
                        url = 'https://swapi.co/api/films/' + episodeId + '/';
                        _a = this;
                        return [4 /*yield*/, filmsGateway.retrieveFilm(url)];
                    case 1:
                        _a._film = _c.sent();
                        return [4 /*yield*/, Promise.all([
                                this.loadCharacters(), this.loadPlanets(), this.loadStarships(),
                                this.loadVehicles(), this.loadSpecies()
                            ])];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 5]), characters = _b[0], planets = _b[1], starships = _b[2], vehicles = _b[3], species = _b[4];
                        this._characters = characters;
                        this._planets = planets;
                        this._starships = starships;
                        this._vehicles = vehicles;
                        this._species = species;
                        resolve();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        err = e_1;
                        reject(err);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    FilmModel.prototype.getFilm = function () {
        return this._film;
    };
    FilmModel.prototype.getCharacters = function () {
        return this._characters;
    };
    FilmModel.prototype.getVehicles = function () {
        return this._vehicles;
    };
    FilmModel.prototype.getStarships = function () {
        return this._starships;
    };
    FilmModel.prototype.getPlanets = function () {
        return this._planets;
    };
    FilmModel.prototype.getSpecies = function () {
        return this._species;
    };
    FilmModel.prototype.loadCharacters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var charactersGateway, characterPromises, characters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        charactersGateway = this._gateways.charactersGateway;
                        characterPromises = [];
                        this._film.getCharacterUrls().map(function (url) {
                            var promise = charactersGateway.retrieveCharacter(url);
                            characterPromises.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(characterPromises)];
                    case 1:
                        characters = _a.sent();
                        resolve(characters);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilmModel.prototype.loadPlanets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var planetsGateway, planetPromises, planets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        planetsGateway = this._gateways.planetsGateway;
                        planetPromises = [];
                        this._film.getPlanetUrls().map(function (url) {
                            var promise = planetsGateway.retrievePlanet(url);
                            planetPromises.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(planetPromises)];
                    case 1:
                        planets = _a.sent();
                        resolve(planets);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilmModel.prototype.loadStarships = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var starshipsGateway, starshipPromises, starships;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        starshipsGateway = this._gateways.starshipsGateway;
                        starshipPromises = [];
                        this._film.getStarshipUrls().map(function (url) {
                            var promise = starshipsGateway.retrieveStarship(url);
                            starshipPromises.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(starshipPromises)];
                    case 1:
                        starships = _a.sent();
                        resolve(starships);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilmModel.prototype.loadVehicles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var vehiclesGateway, vehiclePromises, vehicles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vehiclesGateway = this._gateways.vehiclesGateway;
                        vehiclePromises = [];
                        this._film.getVehicleUrls().map(function (url) {
                            var promise = vehiclesGateway.retrieveVehicle(url);
                            vehiclePromises.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(vehiclePromises)];
                    case 1:
                        vehicles = _a.sent();
                        resolve(vehicles);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilmModel.prototype.loadSpecies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var speciesGateway, speciesPromises, species;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        speciesGateway = this._gateways.speciesGateway;
                        speciesPromises = [];
                        this._film.getSpeciesUrls().map(function (url) {
                            var promise = speciesGateway.retrieveSpecies(url);
                            speciesPromises.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(speciesPromises)];
                    case 1:
                        species = _a.sent();
                        resolve(species);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return FilmModel;
}());
export { FilmModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsbU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0lBU0ksbUJBQW1CLFFBQWtCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUFyQyxpQkF5QkM7UUF4QkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Ozs7d0JBRTVCLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzt3QkFDM0MsR0FBRyxHQUFJLDZCQUE2QixHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7d0JBQzdELEtBQUEsSUFBSSxDQUFBO3dCQUFTLHFCQUFNLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFqRCxHQUFLLEtBQUssR0FBRyxTQUFvQyxDQUFDO3dCQUVRLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0NBQ3hFLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQ0FDL0QsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7NkJBQzVDLENBQUMsRUFBQTs7d0JBSEUsS0FBQSxzQkFBc0QsU0FHeEQsS0FBQSxFQUhHLFVBQVUsUUFBQSxFQUFFLE9BQU8sUUFBQSxFQUFFLFNBQVMsUUFBQSxFQUFFLFFBQVEsUUFBQSxFQUFFLE9BQU8sUUFBQTt3QkFLdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7d0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQU0sT0FBTyxDQUFDO3dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFJLFNB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