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
require('./IndexRoute.css');
import * as React from 'react';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.displayContent = function () {
            _this.setState({ isLoading: false });
        };
        _this.state = {
            isLoading: true
        };
        setTimeout(_this.displayContent, 2000);
        return _this;
    }
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
                                            React.createElement("th", null, "Name"),
                                            React.createElement("th", null, "Year"))),
                                    React.createElement("tbody", null,
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("a", { href: '#' }, "A New Hope")),
                                            React.createElement("td", null, "1979")),
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("a", { href: '#' }, "A New Hope")),
                                            React.createElement("td", null, "1979")),
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("a", { href: '#' }, "A New Hope")),
                                            React.createElement("td", null, "1979")))))))))));
    };
    return IndexRoute;
}(React.Component));
export default IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZGV4Um91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBS3JFO0lBQXlCLDhCQUFpRDtJQUV0RSxvQkFBbUIsS0FBc0I7UUFBekMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FNZjtRQUVNLG9CQUFjLEdBQUc7WUFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQVRFLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDO1FBRUYsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzFDLENBQUM7SUFNTSwyQkFBTSxHQUFiO1FBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNyQixPQUFPLENBQ0gsb0JBQUMsVUFBVSxPQUFFLENBQ2hCLENBQUM7U0FDTDtRQUVELE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO1lBQ2pDLG9CQUFDLE1BQU0sT0FBRztZQUVWLDZCQUFLLFNBQVMsRUFBQyxNQUFNO2dCQUNqQiw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFDaEIsNkJBQUssU0FBUyxFQUFDLHVCQUF1Qjt3QkFDbEMsNkJBQUssU0FBUyxFQUFDLGFBQWE7NEJBQ3hCLHdDQUFjLENBQ1o7d0JBRU4sNkJBQUssU0FBUyxFQUFDLFdBQVc7NEJBQ3RCLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7Z0NBQzdCLCtCQUFPLFNBQVMsRUFBQyx1QkFBdUI7b0NBQ3BDO3dDQUNJOzRDQUNJLHVDQUFhOzRDQUNiLHVDQUFhLENBQ1osQ0FDRDtvQ0FDUjt3Q0FDSTs0Q0FDSTtnREFBSSwyQkFBRyxJQUFJLEVBQUMsR0FBRyxpQkFBZSxDQUFLOzRDQUNuQyx1Q0FBYSxDQUNaO3dDQUNMOzRDQUNJO2dEQUFJLDJCQUFHLElBQUksRUFBQyxHQUFHLGlCQUFlLENBQUs7NENBQ25DLHVDQUFhLENBQ1o7d0NBQ0w7NENBQ0k7Z0RBQUksMkJBQUcsSUFBSSxFQUFDLEdBQUcsaUJBQWUsQ0FBSzs0Q0FDbkMsdUNBQWEsQ0FDWixDQUNELENBQ0osQ0FDTixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUF5QixLQUFLLENBQUMsU0FBUyxHQWlFdkM7QUFFRCxlQUFlLFVBQVUsQ0FBQyJ9