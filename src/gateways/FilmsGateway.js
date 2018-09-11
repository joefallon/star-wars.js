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
import FilmEntity from '../entities/FilmEntity';
var FilmsGateway = /** @class */ (function () {
    function FilmsGateway(baseApi, cache, timeout) {
        this._api = baseApi + FilmsGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache = cache;
    }
    FilmsGateway.prototype.retrieveAllFilms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, filmData, films;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._cache.has(this._api)) {
                            return [2 /*return*/, this._cache.get(this._api)];
                        }
                        return [4 /*yield*/, axios.get(this._api, this._axiosConfig)];
                    case 1:
                        response = _a.sent();
                        filmData = response.data['results'];
                        films = [];
                        filmData.map(function (item) {
                            var film = FilmsGateway.mapToFilmEntity(item);
                            films.push(film);
                        });
                        this._cache.set(this._api, films);
                        return [2 /*return*/, films];
                }
            });
        });
    };
    FilmsGateway.prototype.retrieveFilm = function (filmUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var cache, film_1, config, response, filmData, film;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this._cache;
                        if (cache.has(filmUrl)) {
                            film_1 = cache.get(filmUrl);
                            return [2 /*return*/, resolve(film_1)];
                        }
                        config = this._axiosConfig;
                        return [4 /*yield*/, axios.get(filmUrl, config)];
                    case 1:
                        response = _a.sent();
                        filmData = response.data;
                        film = FilmsGateway.mapToFilmEntity(filmData);
                        cache.set(filmUrl, film);
                        resolve(film);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilmsGateway.mapToFilmEntity = function (filmData) {
        var film = new FilmEntity();
        film.setCharacterUrls(filmData['characters']);
        film.setCreated(filmData['created']);
        film.setDirector(filmData['director']);
        film.setEpisodeId(filmData['episode_id']);
        film.setOpeningCrawl(filmData['opening_crawl']);
        film.setPlanetUrls(filmData['planets']);
        film.setProducer(filmData['producer']);
        film.setReleaseDate(filmData['release_date']);
        film.setSpeciesUrls(filmData['species']);
        film.setStarshipUrls(filmData['starships']);
        film.setTitle(filmData['title']);
        film.setUpdated(filmData['edited']);
        film.setUrl(filmData['url']);
        film.setVehicleUrls(filmData['vehicles']);
        return film;
    };
    FilmsGateway.API_SEGMENT = 'films/';
    return FilmsGateway;
}());
export default FilmsGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbXNHYXRld2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsbXNHYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUE2QixNQUFNLE9BQU8sQ0FBQztBQUdsRCxPQUFPLFVBQVUsTUFBTSx3QkFBd0IsQ0FBQztBQUdoRDtJQU9JLHNCQUFtQixPQUFlLEVBQUUsS0FBNkIsRUFBRSxPQUFlO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQVcsT0FBTyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFTLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRVksdUNBQWdCLEdBQTdCOzs7Ozs7d0JBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQzNCLHNCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQzt5QkFDckM7d0JBRWdCLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUF4RCxRQUFRLEdBQUcsU0FBNkM7d0JBQ3hELFFBQVEsR0FBVSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxLQUFLLEdBQW9CLEVBQUUsQ0FBQzt3QkFFbEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7NEJBQ2QsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDckIsQ0FB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