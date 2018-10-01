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
require('./SpeciesRoute.css');
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { SpeciesModelFactory } from '../../models/SpeciesModelFactory';
var SpeciesRoute = /** @class */ (function (_super) {
    __extends(SpeciesRoute, _super);
    function SpeciesRoute(props) {
        var _this = _super.call(this, props) || this;
        document.title = 'Species Info | API Explorer';
        _this.state = {
            isLoading: true,
            id: parseInt(props.match.params['id'], 10),
            model: props.model ? props.model : SpeciesModelFactory.create()
        };
        return _this;
    }
    SpeciesRoute.prototype.componentDidMount = function () {
        this.setState({ isLoading: false });
    };
    SpeciesRoute.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement(SpinLoader, null));
        }
        return (React.createElement("div", { className: 'container SpeciesRoute' },
            React.createElement(Header, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'md-offset-3 md-6' },
                    React.createElement("div", { className: 'card' },
                        React.createElement("div", { className: 'card-header' },
                            React.createElement("h2", null, "Species Planet Name")),
                        React.createElement("div", { className: 'card-body' },
                            React.createElement("div", null,
                                React.createElement("strong", null, "Classification: "),
                                React.createElement("span", { className: 'classification' }, "classification")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Designation: "),
                                React.createElement("span", { className: 'designation' }, "designation")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Average Height: "),
                                React.createElement("span", { className: 'average-height' }, "xx cm")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Skin Colors: "),
                                React.createElement("span", { className: 'skin-colors' }, "skin colors")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Hair Colors: "),
                                React.createElement("span", { className: 'hair-colors' }, "hair colors")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Eye Colors: "),
                                React.createElement("span", { className: 'eye-colors' }, "eye colors")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Average Lifespan: "),
                                React.createElement("span", { className: 'average-lifespan' }, "average-lifespan")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Language: "),
                                React.createElement("span", { className: 'language' }, "language")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "Homeworld: "),
                                React.createElement(Link, { to: '/planet/:id' }, "homeworld")),
                            React.createElement("h3", null, "Characters"),
                            React.createElement("div", null, this.getCharacters()),
                            React.createElement("h3", null, "Films"),
                            React.createElement("div", null, this.getFilms())))))));
    };
    SpeciesRoute.prototype.getCharacters = function () {
        return (null);
    };
    SpeciesRoute.prototype.getFilms = function () {
        return (null);
    };
    return SpeciesRoute;
}(React.Component));
export default SpeciesRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2llc1JvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BlY2llc1JvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFOUIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJdkU7SUFBMkIsZ0NBQXFEO0lBRTVFLHNCQUFtQixLQUF3QjtRQUEzQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQU9mO1FBTkcsUUFBUSxDQUFDLEtBQUssR0FBRyw2QkFBNkIsQ0FBQztRQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFFLElBQUk7WUFDZixFQUFFLEVBQVMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqRCxLQUFLLEVBQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO1NBQ3RFLENBQUM7O0lBQ04sQ0FBQztJQUVNLHdDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDckIsT0FBTyxDQUNILG9CQUFDLFVBQVUsT0FBRyxDQUNqQixDQUFDO1NBQ0w7UUFFRCxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLHdCQUF3QjtZQUNuQyxvQkFBQyxNQUFNLE9BQUU7WUFFVCw2QkFBSyxTQUFTLEVBQUMsS0FBSztnQkFDaEIsNkJBQUssU0FBUyxFQUFDLGtCQUFrQjtvQkFDN0IsNkJBQUssU0FBUyxFQUFDLE1BQU07d0JBQ2pCLDZCQUFLLFNBQVMsRUFBQyxhQUFhOzRCQUN4QixzREFBNEIsQ0FDMUI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLFdBQVc7NEJBQ3RCO2dDQUNJLHVEQUFpQztnQ0FDakMsOEJBQU0sU0FBUyxFQUFDLGdCQUFnQixxQkFBc0IsQ0FDcEQ7NEJBRU47Z0NBQ0ksb0RBQThCO2dDQUM5Qiw4QkFBTSxTQUFTLEVBQUMsYUFBYSxrQkFBbUIsQ0FDOUM7NEJBRU47Z0NBQ0ksdURBQWlDO2dDQUNqQyw4QkFBTSxTQUFTLEVBQUMsZ0JBQWdCLFlBQWEsQ0FDM0M7NEJBRU47Z0NBQ0ksb0RBQThCO2dDQUM5Qiw4QkFBTSxTQUFTLEVBQUMsYUFBYSxrQkFBbUIsQ0FDOUM7NEJBRU47Z0NBQ0ksb0RBQThCO2dDQUM5Qiw4QkFBTSxTQUFTLEVBQUMsYUFBYSxrQkFBbUIsQ0FDOUM7NEJBRU47Z0NBQ0ksbURBQTZCO2dDQUM3Qiw4QkFBTSxTQUFTLEVBQUMsWUFBWSxpQkFBa0IsQ0FDNUM7NEJBRU47Z0NBQ0kseURBQW1DO2dDQUNuQyw4QkFBTSxTQUFTLEVBQUMsa0JBQWtCLHVCQUF3QixDQUN4RDs0QkFFTjtnQ0FDSSxpREFBMkI7Z0NBQzNCLDhCQUFNLFNBQVMsRUFBQyxVQUFVLGVBQWdCLENBQ3hDOzRCQUVOO2dDQUNJLGtEQUE0QjtnQ0FDNUIsb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBQyxhQUFhLGdCQUFpQixDQUNyQzs0QkFFTiw2Q0FBbUI7NEJBQ25CLGlDQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBTzs0QkFFakMsd0NBQWM7NEJBQ2QsaUNBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFPLENBQzFCLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUVPLG9DQUFhLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTywrQkFBUSxHQUFoQjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBbkdELENBQTJCLEtBQUssQ0FBQyxTQUFTLEdBbUd6QztBQUVELGVBQWUsWUFBWSxDQUFDIn0=