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
import { IndexModelFactory } from './models/IndexModelFactory';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.renderIndex = function (props) {
            props.model = IndexModelFactory.create();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxRQUFRLE1BQU8sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLL0Q7SUFBeUIsdUJBQWU7SUFFcEMsYUFBbUIsS0FBVTtRQUE3QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUNmO1FBY08saUJBQVcsR0FBRyxVQUFDLEtBQXNCO1lBQ3pDLEtBQUssQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFekMsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxjQUFNLE9BQUEsTUFBTSxDQUFDLHFDQUFxQyxDQUFBLDJCQUEyQixDQUFDLEVBQXhFLENBQXdFO2dCQUN0RixPQUFPLEVBQUUsY0FBUSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxvQkFBQyxrQkFBa0IsZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQztRQUVNLGdCQUFVLEdBQUcsVUFBQyxLQUFxQjtZQUN2QyxJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztnQkFDL0IsTUFBTSxFQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMsb0NBQW9DLENBQUEseUJBQXlCLENBQUMsRUFBckUsQ0FBcUU7Z0JBQ25GLE9BQU8sRUFBRSxjQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLG9CQUFDLGlCQUFpQixlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO1FBRUYsZ0VBQWdFO1FBQ2hFLHdDQUF3QztRQUN4Qyw0RkFBNEY7UUFDNUYsNERBQTREO1FBQzVELHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLEVBQUU7UUFDRiw4Q0FBOEM7UUFDOUMsS0FBSztRQUVMLGdFQUFnRTtRQUNoRSx3Q0FBd0M7UUFDeEMsNEZBQTRGO1FBQzVGLDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixFQUFFO1FBQ0YsOENBQThDO1FBQzlDLEtBQUs7UUFFRyxvQkFBYyxHQUFHLFVBQUMsS0FBVTtZQUNoQyxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7b0JBQzdCLDZCQUFLLFNBQVMsRUFBQyxNQUFNO3dCQUNqQixxREFBMkI7d0JBQzNCLCtGQUFvRSxDQUNsRSxDQUNKLENBQ0osQ0FDVCxDQUFDO1FBQ04sQ0FBQyxDQUFDOztJQXZFRixDQUFDO0lBRU0sb0JBQU0sR0FBYjtRQUFBLGlCQVVDO1FBVEcsT0FBTyxDQUNILG9CQUFDLE1BQU07WUFDSCxvQkFBQyxLQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQWdCLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLEdBQUc7WUFDbEYsb0JBQUMsS0FBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsR0FBRztZQUdqRixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBYyxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixHQUFJLENBQ3pFLENBQ1osQ0FBQztJQUNOLENBQUM7SUE0REwsVUFBQztBQUFELENBQUMsQUE1RUQsQ0FBeUIsS0FBSyxDQUFDLFNBQVMsR0E0RXZDIn0=