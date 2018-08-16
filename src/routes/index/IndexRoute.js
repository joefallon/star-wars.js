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
import { HeaderComponent } from '../../components/header/HeaderComponent';
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    IndexRoute.prototype.render = function () {
        return (React.createElement("div", { className: 'container IndexRoute' },
            React.createElement(HeaderComponent, null),
            React.createElement("div", { className: 'main' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'sm-6 sm-offset-3 card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, "Films")),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement("div", { className: 'table-responsive' },
                                React.createElement("table", { className: 'table table-condensed' },
                                    React.createElement("thead", null,
                                        React.createElement("th", null, "Name"),
                                        React.createElement("th", null, "Year")),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZGV4Um91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFLMUU7SUFBeUIsOEJBQWlEO0lBRXRFLG9CQUFtQixLQUFzQjtRQUF6QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUVmO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O0lBQ3BCLENBQUM7SUFFTSwyQkFBTSxHQUFiO1FBQ0ksT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7WUFDakMsb0JBQUMsZUFBZSxPQUFHO1lBRW5CLDZCQUFLLFNBQVMsRUFBQyxNQUFNO2dCQUNqQiw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFDaEIsNkJBQUssU0FBUyxFQUFDLHVCQUF1Qjt3QkFDbEMsNkJBQUssU0FBUyxFQUFDLGFBQWE7NEJBQ3hCLHdDQUFjLENBQ1o7d0JBRU4sNkJBQUssU0FBUyxFQUFDLFdBQVc7NEJBQ3RCLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7Z0NBQzdCLCtCQUFPLFNBQVMsRUFBQyx1QkFBdUI7b0NBQ3BDO3dDQUNJLHVDQUFhO3dDQUNiLHVDQUFhLENBQ1Q7b0NBQ1I7d0NBQ0k7NENBQ0k7Z0RBQUksMkJBQUcsSUFBSSxFQUFDLEdBQUcsaUJBQWUsQ0FBSzs0Q0FDbkMsdUNBQWEsQ0FDWjt3Q0FDTDs0Q0FDSTtnREFBSSwyQkFBRyxJQUFJLEVBQUMsR0FBRyxpQkFBZSxDQUFLOzRDQUNuQyx1Q0FBYSxDQUNaO3dDQUNMOzRDQUNJO2dEQUFJLDJCQUFHLElBQUksRUFBQyxHQUFHLGlCQUFlLENBQUs7NENBQ25DLHVDQUFhLENBQ1osQ0FDRCxDQUNKLENBQ04sQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFqREQsQ0FBeUIsS0FBSyxDQUFDLFNBQVMsR0FpRHZDO0FBRUQsZUFBZSxVQUFVLENBQUMifQ==