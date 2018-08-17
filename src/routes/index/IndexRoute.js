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
require('./IndexRoute.css');
import * as React from 'react';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { IndexModelFactory } from '../../models/IndexModelFactory';
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.getEpisodes = function () {
            var films = _this.state.films;
            return (films.map(function (film) {
                var episodeId = film.getEpisodeId();
                var title = film.getTitle();
                var releaseDate = new Date(Date.parse(film.getReleaseDate()));
                var year = releaseDate.getFullYear();
                return (React.createElement("tr", null,
                    React.createElement("td", { className: 'text-center' }, episodeId),
                    React.createElement("td", null,
                        React.createElement("a", { href: '#' }, title)),
                    React.createElement("td", { className: 'text-center' }, year)));
            }));
        };
        _this.state = {
            isLoading: true,
            films: []
        };
        _this._model = IndexModelFactory.create();
        return _this;
    }
    IndexRoute.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var films, e_1, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._model.getFilms()];
                    case 1:
                        films = _a.sent();
                        this.setState({ isLoading: false, films: films });
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
    ;
    IndexRoute.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(SpinLoader, null));
        }
        return (React.createElement("div", { className: 'container IndexRoute' },
            React.createElement(Header, null),
            React.createElement("div", { className: 'main' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'sm-6 sm-offset-3 card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, "Films")),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement("div", { className: 'table-responsive' },
                                React.createElement("table", { className: 'table table-condensed' },
                                    React.createElement("thead", null,
                                        React.createElement("tr", null,
                                            React.createElement("th", { className: 'text-center' }, "Episode"),
                                            React.createElement("th", null, "Name"),
                                            React.createElement("th", { className: 'text-center' }, "Year"))),
                                    React.createElement("tbody", null, this.getEpisodes())))))))));
    };
    return IndexRoute;
}(React.Component));
export default IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZGV4Um91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFLbkU7SUFBeUIsOEJBQWlEO0lBR3RFLG9CQUFtQixLQUFzQjtRQUF6QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQU9mO1FBb0RPLGlCQUFXLEdBQUc7WUFDbEIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFL0IsT0FBTyxDQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFnQjtnQkFDdkIsSUFBTSxTQUFTLEdBQUssSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QyxJQUFNLEtBQUssR0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEUsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUV2QyxPQUFPLENBQ0g7b0JBQ0ksNEJBQUksU0FBUyxFQUFDLGFBQWEsSUFBRSxTQUFTLENBQU07b0JBQzVDO3dCQUFJLDJCQUFHLElBQUksRUFBQyxHQUFHLElBQUUsS0FBSyxDQUFLLENBQUs7b0JBQ2hDLDRCQUFJLFNBQVMsRUFBQyxhQUFhLElBQUUsSUFBSSxDQUFNLENBQ3RDLENBQ1IsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDLENBQUM7UUE3RUUsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFNLEVBQUU7U0FDaEIsQ0FBQztRQUVGLEtBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7O0lBQzdDLENBQUM7SUFFWSxzQ0FBaUIsR0FBOUI7Ozs7Ozs7d0JBRXNCLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFwQyxLQUFLLEdBQUcsU0FBNEI7d0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzs7O3dCQUcxQyxHQUFHLEdBQVUsR0FBQyxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7S0FFeEI7SUFBQSxDQUFDO0lBRUssMkJBQU0sR0FBYjtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDckIsT0FBTyxDQUNILG9CQUFDLFVBQVUsT0FBRSxDQUNoQixDQUFDO1NBQ0w7UUFFRCxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNqQyxvQkFBQyxNQUFNLE9BQUc7WUFFViw2QkFBSyxTQUFTLEVBQUMsTUFBTTtnQkFDakIsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBQ2hCLDZCQUFLLFNBQVMsRUFBQyx1QkFBdUI7d0JBQ2xDLDZCQUFLLFNBQVMsRUFBQyxhQUFhOzRCQUN4Qix3Q0FBYyxDQUNaO3dCQUVOLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0Qiw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCO2dDQUM3QiwrQkFBTyxTQUFTLEVBQUMsdUJBQXVCO29DQUNwQzt3Q0FDSTs0Q0FDSSw0QkFBSSxTQUFTLEVBQUMsYUFBYSxjQUFhOzRDQUN4Qyx1Q0FBYTs0Q0FDYiw0QkFBSSxTQUFTLEVBQUMsYUFBYSxXQUFVLENBQ3BDLENBQ0Q7b0NBQ1IsbUNBQVMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFVLENBQ2pDLENBQ04sQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFzQkwsaUJBQUM7QUFBRCxDQUFDLEFBbkZELENBQXlCLEtBQUssQ0FBQyxTQUFTLEdBbUZ2QztBQUVELGVBQWUsVUFBVSxDQUFDIn0=