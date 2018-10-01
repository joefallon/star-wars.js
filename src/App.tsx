require('./App.css');

import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loadable  from 'react-loadable';

import { IndexRouteProps } from './routes/index/IndexRouteProps';
import { CharacterRouteProps } from './routes/character/CharacterRouteProps';
import { FilmRouteProps } from './routes/film/FilmRouteProps';
import { PlanetRouteProps } from './routes/planet/PlanetRouteProps';
import { SpeciesRouteProps } from './routes/species/SpeciesRouteProps';


export class App extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        // todo: * complete /species/:id route
        // todo: - complete /vehicle/:id route
        // todo: - complete /starship/:id route
        // todo: * NaN should display "unknown"

        return (
            <Switch>
                <Route exact path='/'              render={(props) => this.renderIndex(props)}/>
                <Route exact path='/film/:id'      render={(props) => this.renderFilm(props)}/>
                <Route exact path='/character/:id' render={(props) => this.renderCharacter(props)}/>
                <Route exact path='/planet/:id'    render={(props) => this.renderPlanet(props)}/>
                <Route exact path='/species/:id'   render={(props) => this.renderSpecies(props)}/>
                <Route path='*'                    render={(props) => this.renderNotFound(props)} />
            </Switch>
        );
    }

    private renderIndex = (props: IndexRouteProps): JSX.Element => {
        const LoadableIndexRoute = Loadable({
            loader: () => import(/* webpackChunkName: "index-route" */ './routes/index/IndexRoute'),
            loading: () => { return null; },
            delay: 300,
            timeout: 10000
        });

        return (<LoadableIndexRoute {...props} />);
    };

    private renderFilm = (props: FilmRouteProps): JSX.Element => {
        const LoadableFilmRoute = Loadable({
            loader: () => import(/* webpackChunkName: "film-route" */ './routes/film/FilmRoute'),
            loading: () => { return null; },
            delay: 300,
            timeout: 10000
        });

        return (<LoadableFilmRoute {...props} />);
    };

    private renderCharacter = (props: CharacterRouteProps): JSX.Element => {
        const LoadableCharacterRoute = Loadable({
            loader:  () => import(/* webpackChunkName: "character-route" */
                                  './routes/character/CharacterRoute'),
            loading: () => { return null; },
            delay:   300,
            timeout: 10000
        });

        return (<LoadableCharacterRoute {...props} />);
    };

    private renderPlanet = (props: PlanetRouteProps): JSX.Element => {
        const LoadablePlanetRoute = Loadable({
            loader:  () => import(/* webpackChunkName: "planet-route" */
                                  './routes/planet/PlanetRoute'),
            loading: () => { return null; },
            delay:   300,
            timeout: 10000
        });

        return (<LoadablePlanetRoute {...props} />);
    };

    private renderSpecies = (props: SpeciesRouteProps): JSX.Element => {
        const LoadableSpeciesRoute = Loadable({
            loader:  () => import(/* webpackChunkName: "species-route" */
                                  './routes/species/SpeciesRoute'),
            loading: () => { return null; },
            delay:   300,
            timeout: 10000
        });

        return (<LoadableSpeciesRoute {...props} />);
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

    private renderNotFound = (props: any): JSX.Element => {
        return (
            <div className='row'>
                <div className='md-offset-3 md-6'>
                    <div className='card'>
                        <h3>404 page not found</h3>
                        <p>We are sorry but the page you are looking for does not exist.</p>
                    </div>
                </div>
            </div>
        );
    };
}