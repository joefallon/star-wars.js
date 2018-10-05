require('./App.css');

import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loadable  from 'react-loadable';

import { CharacterRouteProps } from './routes/character/CharacterRouteProps';
import { IndexRouteProps } from './routes/index/IndexRouteProps';
import { FilmRouteProps } from './routes/film/FilmRouteProps';
import { PlanetRouteProps } from './routes/planet/PlanetRouteProps';
import { SpeciesRouteProps } from './routes/species/SpeciesRouteProps';
import { VehicleRouteProps } from './routes/vehicle/VehicleRouteProps';

export class App extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Switch>
                <Route exact path='/'              render={(props) => this.renderIndex(props)}/>
                <Route exact path='/film/:id'      render={(props) => this.renderFilm(props)}/>
                <Route exact path='/character/:id' render={(props) => this.renderCharacter(props)}/>
                <Route exact path='/planet/:id'    render={(props) => this.renderPlanet(props)}/>
                <Route exact path='/species/:id'   render={(props) => this.renderSpecies(props)}/>
                <Route exact path='/vehicle/:id'   render={(props) => this.renderVehicle(props)}/>
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

    private renderVehicle = (props: VehicleRouteProps): JSX.Element => {
        const LoadableVehicleRoute = Loadable({
            loader:  () => import(/* webpackChunkName: "vehicle-route" */
                                  './routes/vehicle/VehicleRoute'),
            loading: () => { return null; },
            delay:   300,
            timeout: 10000
        });

        return (<LoadableVehicleRoute {...props} />);
    };

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