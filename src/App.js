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
        _this.renderFilm = function (props) {
            var LoadableFilmRoute = Loadable({
                loader: function () { return import(/* webpackChunkName: "film-route" */ './routes/film/FilmRoute'); },
                loading: function () { return null; },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableFilmRoute, __assign({}, props)));
        };
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
            return (React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'md-offset-3 md-6' },
                    React.createElement("div", { className: 'card' },
                        React.createElement("h3", null, "404 page not found"),
                        React.createElement("p", null, "We are sorry but the page you are looking for does not exist.")))));
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: '/', render: function (props) { return _this.renderIndex(props); } }),
            React.createElement(Route, { exact: true, path: '/film/:episodeId', render: function (props) { return _this.renderFilm(props); } }),
            React.createElement(Route, { path: '*', render: function (props) { return _this.renderNotFound(props); } })));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxRQUFRLE1BQU8sZ0JBQWdCLENBQUM7QUFNdkM7SUFBeUIsdUJBQWU7SUFFcEMsYUFBbUIsS0FBVTtRQUE3QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUNmO1FBY08saUJBQVcsR0FBRyxVQUFDLEtBQXNCO1lBQ3pDLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQSwyQkFBMkIsQ0FBQyxFQUF4RSxDQUF3RTtnQkFDdEYsT0FBTyxFQUFFLGNBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsb0JBQUMsa0JBQWtCLGVBQUssS0FBSyxFQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFTSxnQkFBVSxHQUFHLFVBQUMsS0FBcUI7WUFDdkMsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUM7Z0JBQy9CLE1BQU0sRUFBRSxjQUFNLE9BQUEsTUFBTSxDQUFDLG9DQUFvQyxDQUFBLHlCQUF5QixDQUFDLEVBQXJFLENBQXFFO2dCQUNuRixPQUFPLEVBQUUsY0FBUSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxvQkFBQyxpQkFBaUIsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQztRQUVGLGdFQUFnRTtRQUNoRSx3Q0FBd0M7UUFDeEMsNEZBQTRGO1FBQzVGLDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixFQUFFO1FBQ0YsOENBQThDO1FBQzlDLEtBQUs7UUFFTCxnRUFBZ0U7UUFDaEUsd0NBQXdDO1FBQ3hDLDRGQUE0RjtRQUM1Riw0REFBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsRUFBRTtRQUNGLDhDQUE4QztRQUM5QyxLQUFLO1FBRUcsb0JBQWMsR0FBRyxVQUFDLEtBQVU7WUFDaEMsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyxLQUFLO2dCQUNoQiw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCO29CQUM3Qiw2QkFBSyxTQUFTLEVBQUMsTUFBTTt3QkFDakIscURBQTJCO3dCQUMzQiwrRkFBb0UsQ0FDbEUsQ0FDSixDQUNKLENBQ1QsQ0FBQztRQUNOLENBQUMsQ0FBQzs7SUFyRUYsQ0FBQztJQUVNLG9CQUFNLEdBQWI7UUFBQSxpQkFVQztRQVRHLE9BQU8sQ0FDSCxvQkFBQyxNQUFNO1lBQ0gsb0JBQUMsS0FBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFnQixNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixHQUFHO1lBQ2xGLG9CQUFDLEtBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEdBQUc7WUFHakYsb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQWMsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsR0FBSSxDQUN6RSxDQUNaLENBQUM7SUFDTixDQUFDO0lBMERMLFVBQUM7QUFBRCxDQUFDLEFBMUVELENBQXlCLEtBQUssQ0FBQyxTQUFTLEdBMEV2QyJ9