require('./App.css');

import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loadable  from 'react-loadable';
import { IndexModelFactory } from './models/IndexModelFactory';

// import { IndexRouteProps } from './routes/index/IndexRouteProps';
// import { Route1Props } from './routes/route-1/Route1Props';
// import { Route2Props } from './routes/route-2/Route2Props';
// import { Route3Props } from './routes/route-3/Route3Props';

import { IndexRouteProps } from './routes/index/IndexRouteProps';


export class App extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Switch>
                <Route exact path='/'           render={(props) => this.renderIndex(props)}/>
                {/*<Route exact path='/route-1' render={(props) => this.renderRoute1(props)}/>*/}
                {/*<Route exact path='/route-2' render={(props) => this.renderRoute2(props)}/>*/}
                {/*<Route exact path='/route-3' render={(props) => this.renderRoute3(props)}/>*/}
                <Route path='*'              render={(props) => this.renderNotFound(props)} />
            </Switch>
        );
    }

    private renderIndex = (props: IndexRouteProps): JSX.Element => {
        const LoadableIndexRoute = Loadable({
            loader: () => import(/* webpackChunkName: "index-route" */'./routes/index/IndexRoute'),
            loading: () => { return null; },
            delay: 300,
            timeout: 10000
        });

        return (<LoadableIndexRoute {...props} />);
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

    private renderNotFound = (props: any): JSX.Element => {
        return (
            <div>
                <h3>404 page not found</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        );
    };
}