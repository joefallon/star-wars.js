var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
require('./FilmRoute.css');
import * as React from 'react';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { FilmModelFactory } from '../../models/FilmModelFactory';
var FilmRoute = /** @class */ (function (_super) {
    __extends(FilmRoute, _super);
    function FilmRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.getCharacters = function () {
            var characters = _this.state.characters;
            return (React.createElement("ul", null));
        };
        _this.state = {
            isLoading: true,
            episodeId: props.match.params['episodeId'],
            model: FilmModelFactory.create()
        };
        console.log(_this.state);
        return _this;
    }
    FilmRoute.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var episodeId, model, film, characters, vehicles, starships, planets, species, e_1, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        episodeId = this.state.episodeId;
                        model = this.state.model;
                        return [4 /*yield*/, model.loadFilmData(episodeId)];
                    case 1:
                        _a.sent();
                        film = model.getFilm();
                        characters = model.getCharacters();
                        vehicles = model.getVehicles();
                        starships = model.getStarships();
                        planets = model.getPlanets();
                        species = model.getSpecies();
                        this.setState({
                            isLoading: false,
                            film: film,
                            characters: characters,
                            vehicles: vehicles,
                            starships: starships,
                            planets: planets,
                            species: species
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        err = e_1;
                        console.log(err);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FilmRoute.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(SpinLoader, null));
        }
        var film = this.state.film;
        return (React.createElement("div", { className: 'container FilmRoute' },
            React.createElement(Header, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'md-offset-3 md-6' },
                    React.createElement("div", { className: 'card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, "Film Name Here")),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement("div", null,
                                React.createElement("strong", null, "Title:"),
                                " ",
                                film.getTitle()),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Episode:"),
                                " ",
                                film.getEpisodeId()),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Release Date:"),
                                " ",
                                film.getReleaseDate()),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Director:"),
                                " ",
                                film.getDirector()),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Producer:"),
                                " ",
                                film.getProducer()),
                            React.createElement("h3", null, "Opening"),
                            React.createElement("p", null, film.getOpeningCrawl()),
                            React.createElement("h3", null, "Characters"),
                            React.createElement("div", null, this.getCharacters())))))));
    };
    return FilmRoute;
}(React.Component));
export default FilmRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsbVJvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUkvQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFO0lBQXdCLDZCQUErQztJQUVuRSxtQkFBbUIsS0FBcUI7UUFBeEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FTZjtRQXdFTyxtQkFBYSxHQUFHO1lBQ3BCLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBRXpDLE9BQU8sQ0FDRCwrQkFFSyxDQUNWLENBQUM7UUFDTixDQUFDLENBQUM7UUF2RkUsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxJQUFJO1lBQ2YsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxLQUFLLEVBQU0sZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1NBQ3ZDLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDNUIsQ0FBQztJQUVZLHFDQUFpQixHQUE5Qjs7Ozs7Ozt3QkFFYyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLEtBQUssR0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDbkMscUJBQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUM7d0JBRTlCLElBQUksR0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQzdCLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ25DLFFBQVEsR0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2pDLFNBQVMsR0FBSSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ2xDLE9BQU8sR0FBTSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2hDLE9BQU8sR0FBTSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBRXRDLElBQUksQ0FBQyxRQUFRLENBQUM7NEJBQ1YsU0FBUyxFQUFHLEtBQUs7NEJBQ2pCLElBQUksRUFBUSxJQUFJOzRCQUNoQixVQUFVLEVBQUUsVUFBVTs0QkFDdEIsUUFBUSxFQUFJLFFBQVE7NEJBQ3BCLFNBQVMsRUFBRyxTQUFTOzRCQUNyQixPQUFPLEVBQUssT0FBTzs0QkFDbkIsT0FBTyxFQUFLLE9BQU87eUJBQ3RCLENBQUMsQ0FBQzs7Ozt3QkFHRyxHQUFHLEdBQVUsR0FBQyxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7S0FFeEI7SUFFTSwwQkFBTSxHQUFiO1FBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNyQixPQUFPLENBQUMsb0JBQUMsVUFBVSxPQUFHLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRTdCLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUUscUJBQXFCO1lBQ2pDLG9CQUFDLE1BQU0sT0FBRztZQUVWLDZCQUFLLFNBQVMsRUFBQyxLQUFLO2dCQUNoQiw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCO29CQUM3Qiw2QkFBSyxTQUFTLEVBQUMsTUFBTTt3QkFDakIsNkJBQUssU0FBUyxFQUFDLGFBQWE7NEJBQ3hCLGlEQUF1QixDQUNyQjt3QkFDTiw2QkFBSyxTQUFTLEVBQUMsV0FBVzs0QkFDdEI7Z0NBQUssNkNBQXVCOztnQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQU87NEJBQ3BEO2dDQUFLLCtDQUF5Qjs7Z0NBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFPOzRCQUMxRDtnQ0FBSyxvREFBOEI7O2dDQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBTzs0QkFDakU7Z0NBQUssZ0RBQTBCOztnQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQU87NEJBQzFEO2dDQUFLLGdEQUEwQjs7Z0NBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFPOzRCQUUxRCwwQ0FBZ0I7NEJBRWhCLCtCQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBSzs0QkFFL0IsNkNBQW1COzRCQUVuQixpQ0FDSyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQ25CLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0lBV0wsZ0JBQUM7QUFBRCxDQUFDLEFBN0ZELENBQXdCLEtBQUssQ0FBQyxTQUFTLEdBNkZ0QztBQUVELGVBQWUsU0FBUyxDQUFDIn0=