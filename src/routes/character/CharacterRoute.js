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
import CharacterModelFactory from '../../models/CharacterModelFactory';
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
                var filmUrl = film.getUrl();
                var parts = filmUrl.split('/');
                var id = parts[parts.length - 2];
                return (React.createElement("li", { key: id, className: 'film-item' },
                    React.createElement(Link, { to: "/film/" + id }, title)));
            })));
        };
        _this.getSpecies = function () {
            var species = _this.state.model.getSpecies();
            // return (
            //     <ul>
            //         {species.map((singleSpecies: SpeciesEntity) => {
            //             const name  = singleSpecies.getName();
            //             const url   = singleSpecies.getUrl();
            //             const parts = url.split('/');
            //             const id    = parts[parts.length - 2];
            //
            //             return (
            //                 <li key={id} className='species-item'>
            //                     <Link to={`/species/${id}`}>{name}</Link>
            //                 </li>
            //             );
            //         })}
            //     </ul>
            // );
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
                                " ",
                                this.getPlanetLink()),
                            React.createElement("h3", null, "Films"),
                            React.createElement("div", null, this.getFilms()),
                            React.createElement("h3", null, "Species"),
                            React.createElement("div", null,
                                React.createElement("ul", { className: 'species' },
                                    React.createElement("li", { key: ':id', className: 'species-item' },
                                        React.createElement(Link, { to: '/species/:id' }, "Example Species Name")))),
                            React.createElement("h3", null, "Vehicles"),
                            React.createElement("div", null,
                                React.createElement("ul", { className: 'vehicles' },
                                    React.createElement("li", { key: ':id', className: 'vehicle-item' },
                                        React.createElement(Link, { to: '/vehicle/:id' }, "Example Vehicle Name")))),
                            React.createElement("h3", null, "Starships"),
                            React.createElement("div", null,
                                React.createElement("ul", { className: 'starships' },
                                    React.createElement("li", { key: ':id', className: 'starship-item' },
                                        React.createElement(Link, { to: '/starship/:id' }, "Example Starship Name"))))))))));
    };
    return CharacterRoute;
}(React.Component));
export default CharacterRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGFyYWN0ZXJSb3V0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDaEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHckUsT0FBTyxxQkFBcUIsTUFBTSxvQ0FBb0MsQ0FBQztBQUl2RTtJQUE2QixrQ0FBeUQ7SUFDbEYsd0JBQW1CLEtBQTBCO1FBQTdDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBUWY7UUFtSE8sbUJBQWEsR0FBRztZQUNwQixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsRCxJQUFNLEtBQUssR0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELElBQU0sRUFBRSxHQUFVLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTFDLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxJQUFNLEdBQUcsR0FBSSxhQUFXLEVBQUksQ0FBQztZQUU3QixPQUFPLENBQUMsb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLFdBQVcsSUFBRSxJQUFJLENBQVEsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQztRQUVNLGNBQVEsR0FBRztZQUNmLElBQU0sS0FBSyxH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