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
import 'react-table/react-table.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { IndexModelFactory } from '../../models/IndexModelFactory';
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            films: [],
            tableData: []
        };
        _this._model = IndexModelFactory.create();
        return _this;
    }
    IndexRoute.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var films, tableData, e_1, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._model.getFilms()];
                    case 1:
                        films = _a.sent();
                        tableData = this.makeTableData(films);
                        this.setState({ isLoading: false, films: films, tableData: tableData });
                        console.log(tableData);
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
    IndexRoute.prototype.makeTableData = function (films) {
        var data = [];
        films.map(function (film) {
            var episodeId = film.getEpisodeId();
            var title = film.getTitle();
            var releaseDate = new Date(Date.parse(film.getReleaseDate()));
            var year = releaseDate.getFullYear();
            data.push({
                'episodeId': episodeId,
                'title': title,
                'year': year,
                'filmUrl': film.getUrl()
            });
        });
        return data;
    };
    IndexRoute.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(SpinLoader, null));
        }
        var columns = [
            {
                Header: 'Episode',
                accessor: 'episodeId',
                className: 'text-center'
            }, {
                Header: 'Title',
                accessor: 'title',
                Cell: function (row) { return (React.createElement(Link, { to: '/film/' + row['original']['episodeId'] }, row['value'])); }
            }, {
                Header: 'Year',
                accessor: 'year',
                className: 'text-center'
            }
        ];
        return (React.createElement("div", { className: 'container IndexRoute' },
            React.createElement(Header, null),
            React.createElement("div", { className: 'main' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'sm-6 sm-offset-3 card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, "Films")),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement(ReactTable, { data: this.state.tableData, columns: columns, showPagination: false, minRows: 0, multiSort: false, resizable: false, className: '-striped -highlight' })))))));
    };
    return IndexRoute;
}(React.Component));
export default IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZGV4Um91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVCLE9BQU8sNkJBQTZCLENBQUE7QUFFcEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBc0IsTUFBTSxhQUFhLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUtuRTtJQUF5Qiw4QkFBaUQ7SUFHdEUsb0JBQW1CLEtBQXNCO1FBQXpDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBUWY7UUFQRyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQU0sRUFBRTtZQUNiLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFFRixLQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBRVksc0NBQWlCLEdBQTlCOzs7Ozs7O3dCQUUwQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBeEMsS0FBSyxHQUFPLFNBQTRCO3dCQUN4QyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFT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