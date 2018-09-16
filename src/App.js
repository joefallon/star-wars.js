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
        _this.renderCharacter = function (props) {
            var LoadableCharacterRoute = Loadable({
                loader: function () { return import(/* webpackChunkName: "character-route" */ './routes/character/CharacterRoute'); },
                loading: function () { return null; },
                delay: 300,
                timeout: 10000
            });
            return (React.createElement(LoadableCharacterRoute, __assign({}, props)));
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
        // todo: - complete /planet/:id route
        // todo: - complete /species/:id route
        // todo: - complete /vehicle/:id route
        // todo: - complete /starship/:id route
        // todo: - NaN should display "unknown"
        var _this = this;
        return (React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: '/', render: function (props) { return _this.renderIndex(props); } }),
            React.createElement(Route, { exact: true, path: '/film/:id', render: function (props) { return _this.renderFilm(props); } }),
            React.createElement(Route, { exact: true, path: '/character/:id', render: function (props) { return _this.renderCharacter(props); } }),
            React.createElement(Route, { path: '*', render: function (props) { return _this.renderNotFound(props); } })));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxRQUFRLE1BQU8sZ0JBQWdCLENBQUM7QUFPdkM7SUFBeUIsdUJBQWU7SUFFcEMsYUFBbUIsS0FBVTtRQUE3QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUNmO1FBb0JPLGlCQUFXLEdBQUcsVUFBQyxLQUFzQjtZQUN6QyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztnQkFDaEMsTUFBTSxFQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMscUNBQXFDLENBQUMsMkJBQTJCLENBQUMsRUFBekUsQ0FBeUU7Z0JBQ3ZGLE9BQU8sRUFBRSxjQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLG9CQUFDLGtCQUFrQixlQUFLLEtBQUssRUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO1FBRU0sZ0JBQVUsR0FBRyxVQUFDLEtBQXFCO1lBQ3ZDLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDO2dCQUMvQixNQUFNLEVBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyx5QkFBeUIsQ0FBQyxFQUF0RSxDQUFzRTtnQkFDcEYsT0FBTyxFQUFFLGNBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsb0JBQUMsaUJBQWlC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