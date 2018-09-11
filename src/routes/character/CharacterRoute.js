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
            var name = 'Planet Name';
            var url = '/planet/:id';
            return (React.createElement(Link, { to: url, className: 'homeworld' }, name));
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
                            React.createElement("div", null,
                                React.createElement("li", { key: 'id', className: 'films' },
                                    React.createElement(Link, { to: '/film/:id' }, "Example Film Name"))),
                            React.createElement("h3", null, "Species"),
                            React.createElement("div", null,
                                React.createElement("li", { key: 'id', className: 'species' },
                                    React.createElement(Link, { to: '/species/:id' }, "Example Species Name"))),
                            React.createElement("h3", null, "Vehicles"),
                            React.createElement("div", null,
                                React.createElement("li", { key: 'id', className: 'vehicles' },
                                    React.createElement(Link, { to: '/vehicle/:id' }, "Example Vehicle Name"))),
                            React.createElement("h3", null, "Starships"),
                            React.createElement("div", null,
                                React.createElement("li", { key: 'id', className: 'starships' },
                                    React.createElement(Link, { to: '/starship/:id' }, "Example Starship Name")))))))));
    };
    return CharacterRoute;
}(React.Component));
export default CharacterRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaGFyYWN0ZXJSb3V0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDaEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxxQkFBcUIsTUFBTSxvQ0FBb0MsQ0FBQztBQUl2RTtJQUE2QixrQ0FBeUQ7SUFDbEYsd0JBQW1CLEtBQTBCO1FBQTdDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBUWY7UUFxSE8sbUJBQWEsR0FBRztZQUVwQixJQUFNLElBQUksR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBTSxHQUFHLEdBQUksYUFBYSxDQUFDO1lBRTNCLE9BQU8sQ0FBQyxvQkFBQyxJQUFJLElBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsV0FBVyxJQUFFLElBQUksQ0FBUSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO1FBbElFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7UUFFakQsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxJQUFJO1lBQ2YsRUFBRSxFQUFTLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakQsS0FBSyxFQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE1B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