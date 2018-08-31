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
import { Link } from 'react-router-dom';
import { FilmModelFactory } from '../../models/FilmModelFactory';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
var FilmRoute = /** @class */ (function (_super) {
    __extends(FilmRoute, _super);
    function FilmRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.getCharacters = function () {
            var characters = _this.state.characters;
            return (React.createElement("ul", null, characters.map(function (character) {
                var url = character.getUrl();
                var id = FilmRoute.getIdFromUrl(url);
                return (React.createElement("li", { key: id },
                    React.createElement(Link, { to: '/character/' + id }, character.getName())));
            })));
        };
        _this.state = {
            isLoading: true,
            episodeId: props.match.params['episodeId'],
            model: props.model ? props.model : FilmModelFactory.create()
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
                            React.createElement("div", null, this.getCharacters()),
                            React.createElement("h3", null, "Planets"),
                            React.createElement("div", null, this.getPlanets()),
                            React.createElement("h3", null, "Starships"),
                            React.createElement("div", null, this.getStarships()),
                            React.createElement("h3", null, "Vehicles"),
                            React.createElement("div", null, this.getVehicles()),
                            React.createElement("h3", null, "Species"),
                            React.createElement("div", null, this.getSpecies())))))));
    };
    FilmRoute.prototype.getPlanets = function () {
        var planets = this.state.planets;
        return (React.createElement("ul", null, planets.map(function (planet) {
            var url = planet.getUrl();
            var id = FilmRoute.getIdFromUrl(url);
            return (React.createElement("li", { key: id },
                React.createElement(Link, { to: '/planet/' + id }, planet.getName())));
        })));
    };
    FilmRoute.prototype.getStarships = function () {
        var starships = this.state.starships;
        return (React.createElement("ul", null, starships.map(function (starship) {
            var url = starship.getUrl();
            var id = FilmRoute.getIdFromUrl(url);
            return (React.createElement("li", { key: id },
                React.createElement(Link, { to: '/starship/' + id }, starship.getName())));
        })));
    };
    FilmRoute.prototype.getVehicles = function () {
        var vehicles = this.state.vehicles;
        return (React.createElement("ul", null, vehicles.map(function (vehicle) {
            var url = vehicle.getUrl();
            var id = FilmRoute.getIdFromUrl(url);
            return (React.createElement("li", { key: id },
                React.createElement(Link, { to: '/vehicle/' + id }, vehicle.getName())));
        })));
    };
    FilmRoute.prototype.getSpecies = function () {
        var species = this.state.species;
        return (React.createElement("ul", null, species.map(function (singleSpecies) {
            var url = singleSpecies.getUrl();
            var id = FilmRoute.getIdFromUrl(url);
            return (React.createElement("li", { key: id },
                React.createElement(Link, { to: '/species/' + id }, singleSpecies.getName())));
        })));
    };
    FilmRoute.getIdFromUrl = function (url) {
        var parts = url.split('/');
        var id = parts[parts.length - 2];
        return id;
    };
    return FilmRoute;
}(React.Component));
export default FilmRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsbVJvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMzQixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU9yRTtJQUF3Qiw2QkFBK0M7SUFFbkUsbUJBQW1CLEtBQXFCO1FBQXhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBU2Y7UUFpRk8sbUJBQWEsR0FBRztZQUNwQixJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUV6QyxPQUFPLENBQ0QsZ0NBQ0ssVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQTBCO2dCQUN2QyxJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQy9CLElBQU0sRUFBRSxHQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXhDLE9BQU8sQ0FDSCw0QkFBSSxHQUFHLEVBQUUsRUFBRTtvQkFDUCxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFFLGFBQWEsR0FBRyxFQUFFLElBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFRLENBQ3pELENBQ1IsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUNELENBQ1YsQ0FBQztRQUNOLENBQUMsQ0FBQztRQXpHRSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFF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