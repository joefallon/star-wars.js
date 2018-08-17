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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
require('./App.css');
import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.renderIndex = function (props) {
            var LoadableIndexRoute = Loadable({
                loader: function () { return import(/* webpackChunkName: "index-route" */ './routes/index/IndexRoute'); },
                loading: function () { return null; },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableIndexRoute, __assign({}, props)));
        };
        // private renderRoute1 = (props: Route1Props): JSX.Element => {
        //     const LoadableRoute1 = Loadable({
        //         loader: () => import(/* webpackChunkName: "route-1" */'./routes/route-1/Route1'),
        //         loading: () => { return <div>Loading...</div>; },
        //         delay: 300,
        //         timeout: 10000
        //     });
        //
        //     return (<LoadableRoute1 {...props} />);
        // };
        // private renderRoute2 = (props: Route2Props): JSX.Element => {
        //     const LoadableRoute2 = Loadable({
        //         loader: () => import(/* webpackChunkName: "route-2" */'./routes/route-2/Route2'),
        //         loading: () => { return <div>Loading...</div>; },
        //         delay: 300,
        //         timeout: 10000
        //     });
        //
        //     return (<LoadableRoute2 {...props} />);
        // };
        // private renderRoute3 = (props: Route3Props): JSX.Element => {
        //     const LoadableRoute3 = Loadable({
        //         loader: () => import(/* webpackChunkName: "route-3" */'./routes/route-3/Route3'),
        //         loading: () => { return <div>Loading...</div>; },
        //         delay: 300,
        //         timeout: 10000
        //     });
        //
        //     return (<LoadableRoute3 {...props} />);
        // };
        _this.renderNotFound = function (props) {
            return (React.createElement("div", null,
                React.createElement("h3", null, "404 page not found"),
                React.createElement("p", null, "We are sorry but the page you are looking for does not exist.")));
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: '/', render: function (props) { return _this.renderIndex(props); } }),
            React.createElement(Route, { path: '*', render: function (props) { return _this.renderNotFound(props); } })));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxRQUFRLE1BQU8sZ0JBQWdCLENBQUM7QUFXdkM7SUFBeUIsdUJBQWU7SUFFcEMsYUFBbUIsS0FBVTtRQUE3QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUNmO1FBY08saUJBQVcsR0FBRyxVQUFDLEtBQXNCO1lBQ3pDLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQSwyQkFBMkIsQ0FBQyxFQUF4RSxDQUF3RTtnQkFDdEYsT0FBTyxFQUFFLGNBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsb0JBQUMsa0JBQWtCLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFRixnRUFBZ0U7UUFDaEUsd0NBQXdDO1FBQ3hDLDRGQUE0RjtRQUM1Riw0REFBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsRUFBRTtRQUNGLDhDQUE4QztRQUM5QyxLQUFLO1FBRUwsZ0VBQWdFO1FBQ2hFLHdDQUF3QztRQUN4Qyw0RkFBNEY7UUFDNUYsNERBQTREO1FBQzVELHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLEVBQUU7UUFDRiw4Q0FBOEM7UUFDOUMsS0FBSztRQUVMLGdFQUFnRTtRQUNoRSx3Q0FBd0M7UUFDeEMsNEZBQTRGO1FBQzVGLDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixFQUFFO1FBQ0YsOENBQThDO1FBQzlDLEtBQUs7UUFFRyxvQkFBYyxHQUFHLFVBQUMsS0FBVTtZQUNoQyxPQUFPLENBQ0g7Z0JBQ0kscURBQTJCO2dCQUMzQiwrRkFBb0UsQ0FDbEUsQ0FDVCxDQUFDO1FBQ04sQ0FBQyxDQUFDOztJQWpFRixDQUFDO0lBRU0sb0JBQU0sR0FBYjtRQUFBLGlCQVVDO1FBVEcsT0FBTyxDQUNILG9CQUFDLE1BQU07WUFDSCxvQkFBQyxLQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQVcsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsR0FBRztZQUk3RSxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBYyxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixHQUFJLENBQ3pFLENBQ1osQ0FBQztJQUNOLENBQUM7SUFzREwsVUFBQztBQUFELENBQUMsQUF0RUQsQ0FBeUIsS0FBSyxDQUFDLFNBQVMsR0FzRXZDIn0=