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
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            films: [],
            tableData: []
        };
        document.title = 'API Explorer | Films';
        _this._model = props.model;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZGV4Um91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVCLE9BQU8sNkJBQTZCLENBQUE7QUFFcEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBc0IsTUFBTSxhQUFhLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU9yRTtJQUF5Qiw4QkFBaUQ7SUFHdEUsb0JBQW1CLEtBQXNCO1FBQXpDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBVWY7UUFURyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQU0sRUFBRTtZQUNiLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFFRixRQUFRLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBRXhDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7SUFDOUIsQ0FBQztJQUVZLHNDQUFpQixHQUE5Qjs7Ozs7Ozt3QkFFMEIscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQXhDLEtBQUssR0FBTyxTQUE0Qjt3QkFDeEMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFB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