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
require('./PlanetRoute.css');
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { PlanetModelFactory } from '../../models/PlanetModelFactory';
var PlanetRoute = /** @class */ (function (_super) {
    __extends(PlanetRoute, _super);
    function PlanetRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.getFilms = function () {
            var films = _this.state.model.getFilms();
            return (React.createElement("ul", { className: 'films' }, films.map(function (film) {
                var name = film.getTitle();
                var id = film.getId();
                return (React.createElement("li", { key: id, className: 'film-item' },
                    React.createElement(Link, { to: "/film/" + id }, name)));
            })));
        };
        _this.getResidents = function () {
            var residents = _this.state.model.getResidents();
            return (React.createElement("ul", { className: 'residents' }, residents.map(function (resident) {
                var name = resident.getName();
                var id = resident.getId();
                return (React.createElement("li", { key: id, className: 'resident-item' },
                    React.createElement(Link, { to: "/character/" + id }, name)));
            })));
        };
        document.title = 'Planet Info | API Explorer';
        _this.state = {
            isLoading: true,
            id: parseInt(props.match.params['id'], 10),
            model: props.model ? props.model : PlanetModelFactory.create()
        };
        return _this;
    }
    PlanetRoute.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.state.id;
                        model = this.state.model;
                        return [4 /*yield*/, model.loadPlanetData(id)];
                    case 1:
                        _a.sent();
                        this.setState({ isLoading: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    PlanetRoute.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(SpinLoader, null));
        }
        var model = this.state.model;
        var planet = model.getPlanet();
        var water = isNaN(planet.getSurfaceWaterPercent()) ? 'unknown'
            : planet.getSurfaceWaterPercent() + '%';
        return (React.createElement("div", { className: 'container PlanetRoute' },
            React.createElement(Header, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'md-offset-3 md-6' },
                    React.createElement("div", { className: 'card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, planet.getName())),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement("div", null,
                                React.createElement("strong", null, "Rotation Period: "),
                                React.createElement("span", { className: 'rotation-period' },
                                    planet.getRotationPeriodInDays(),
                                    " days")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Orbital Period: "),
                                React.createElement("span", { className: 'orbital-period' },
                                    planet.getOrbitalPeriodInDays(),
                                    " days")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Diameter: "),
                                React.createElement("span", { className: 'diameter' },
                                    planet.getDiameterInKilometers(),
                                    " km")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Climate: "),
                                React.createElement("span", { className: 'climate' }, planet.getClimate())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Gravity: "),
                                React.createElement("span", { className: 'gravity' }, planet.getGravity())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Terrain: "),
                                React.createElement("span", { className: 'terrain' }, planet.getTerrain())),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Surface Water Coverage: "),
                                React.createElement("span", { className: 'surface-water' }, water)),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Population: "),
                                React.createElement("span", { className: 'population' }, planet.getPopulation())),
                            React.createElement("h3", null, "Films"),
                            React.createElement("div", null, this.getFilms()),
                            React.createElement("h3", null, "Residents"),
                            React.createElement("div", null, this.getResidents())))))));
    };
    return PlanetRoute;
}(React.Component));
export default PlanetRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0Um91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQbGFuZXRSb3V0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFN0IsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFJckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJckU7SUFBMEIsK0JBQW1EO0lBRXpFLHFCQUFtQixLQUF1QjtRQUExQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVFmO1FBNEZPLGNBQVEsR0FBRztZQUNmLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRTFDLE9BQU8sQ0FDSCw0QkFBSSxTQUFTLEVBQUMsT0FBTyxJQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBZ0I7Z0JBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsSUFBTSxFQUFFLEdBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUUxQixPQUFPLENBQ0gsNEJBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsV0FBVztvQkFDOUIsb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBRSxXQUFTLEVBQUksSUFBRyxJQUFJLENBQVEsQ0FDckMsQ0FDUixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQ0QsQ0FDUixDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRU0sa0JBQVks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