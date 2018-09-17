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
require('./CharacterRoute.css');
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { CharacterModelFactory } from '../../models/CharacterModelFactory';
var CharacterRoute = /** @class */ (function (_super) {
    __extends(CharacterRoute, _super);
    function CharacterRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.getPlanetLink = function () {
            var homeworld = _this.state.model.getHomeworld();
            var parts = homeworld.getUrl().split('/');
            var id = parts[parts.length - 2];
            var name = homeworld.getName();
            var url = "/planet/" + id;
            return (React.createElement(Link, { to: url, className: 'homeworld' }, name));
        };
        _this.getFilms = function () {
            var films = _this.state.model.getFilms();
            return (React.createElement("ul", { className: 'films' }, films.map(function (film) {
                var title = film.getTitle();
                var id = film.getId();
                return (React.createElement("li", { key: id, className: 'film-item' },
                    React.createElement(Link, { to: "/film/" + id }, title)));
            })));
        };
        _this.getSpecies = function () {
            var species = _this.state.model.getSpecies();
            return (React.createElement("ul", { className: 'species' }, species.map(function (singleSpecies) {
                var name = singleSpecies.getName();
                var id = singleSpecies.getId();
                return (React.createElement("li", { key: ':id', className: 'species-item' },
                    React.createElement(Link, { to: "/species/" + id }, name)));
            })));
        };
        _this.getVehicles = function () {
            var vehicles = _this.state.model.getVehicles();
            return (React.createElement("ul", { className: 'vehicles' }, vehicles.map(function (vehicle) {
                var name = vehicle.getName();
                var id = vehicle.getId();
                return (React.createElement("li", { key: id, className: 'vehicle-item' },
                    React.createElement(Link, { to: "/vehicles/" + id }, name)));
            })));
        };
        _this.getStarships = function () {
            var starships = _this.state.model.getStarships();
            return (React.createElement("ul", { className: 'starships' }, starships.map(function (starship) {
                var name = starship.getName();
                var id = starship.getId();
                return (React.createElement("li", { key: id, className: 'starship-item' },
                    React.createElement(Link, { to: "/starship/" + id }, name)));
            })));
        };
        document.title = 'Character Info | API Explorer';
        _this.state = {
            isLoading: true,
            id: parseInt(props.match.params['id'], 10),
            model: props.model ? props.model : CharacterModelFactory.create()
        };
        return _this;
    }
    CharacterRoute.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, model, e_1, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = this.state.id;
                        model = this.state.model;
                        return [4 /*yield*/, model.loadCharacterInformation(id)];
                    case 1:
                        _a.sent();
                        this.setState({
                            isLoading: false
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
    CharacterRoute.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(SpinLoader, null));
        }
        var model = this.state.model;
        var character = model.getCharacter();
        return (React.createElement("div", { className: 'container CharacterRoute' },
            React.createElement(Header, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'md-offset-3 md-6' },
                    React.createElement("div", { className: 'card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, character.getName())),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement("div", null,
                                React.createElement("strong", null, "Height: "),
                                React.createElement("span", { className: 'height' },
                                    character.getHeightInCentimeters(),
                                    " cm")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Mass: "),
                                React.createElement("span", { className: 'mass' },
                                    character.getMassInKilograms(),
                                    " kg")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Hair Color: "),
                                React.createElement("span", { className: 'hair-color' }, character.getHairColor())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Skin Color: "),
                                React.createElement("span", { className: 'skin-color' }, character.getSkinColor())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Eye Color: "),
                                React.createElement("span", { className: 'eye-color' }, character.getEyeColor())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Birth Year: "),
                                React.createElement("span", { className: 'birth-year' }, character.getBirthYear())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Gender: "),
                                React.createElement("span", { className: 'gender' }, character.getGender())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Homeworld: "),
                                this.getPlanetLink()),
                            React.createElement("h3", null, "Films"),
                            React.createElement("div", null, this.getFilms()),
                            React.createElement("h3", null, "Species"),
                            React.createElement("div", null, this.getSpecies()),
                            React.createElement("h3", null, "Vehicles"),
                            React.createElement("div", null, this.getVehicles()),
                            React.createElement("h3", null, "Starships"),
                            React.createElement("div", null, this.getStarships())))))));
    };
    return CharacterRoute;
}(React.Component));
export default CharacterRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGFyYWN0ZXJSb3V0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFaEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPM0U7SUFBNkIsa0NBQXlEO0lBQ2xGLHdCQUFtQixLQUEwQjtRQUE3QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVFmO1FBaUdPLG1CQUFhLEdBQUc7WUFDcEIsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEQsSUFBTSxLQUFLLEdBQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxJQUFNLEVBQUUsR0FBVSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUxQyxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakMsSUFBTSxHQUFHLEdBQUksYUFBVyxFQUFJLENBQUM7WUFFN0IsT0FBTyxDQUFDLG9CQUFDLElBQUksSUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxXQUFXLElBQUUsSUFBSSxDQUFRLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUM7UUFFTSxjQUFRLEdBQUc7WUFDZixJ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