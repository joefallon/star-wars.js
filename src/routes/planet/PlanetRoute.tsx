require('./PlanetRoute.css');

import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';
import { PlanetModelFactory } from '../../models/PlanetModelFactory';
import { PlanetRouteProps } from './PlanetRouteProps';
import { PlanetRouteState } from './PlanetRouteState';

class PlanetRoute extends React.Component<PlanetRouteProps, PlanetRouteState>{

    public constructor(props: PlanetRouteProps) {
        super(props);
        document.title = 'Planet Info | API Explorer';

        this.state  = {
            isLoading: true,
            id:        parseInt(props.match.params['id'], 10),
            model:     props.model ? props.model : PlanetModelFactory.create()
        };
    }

    public async componentDidMount() {
        const id    = this.state.id;
        const model = this.state.model;
        await model.loadPlanetData(id);

        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (
                <SpinLoader />
            );
        }

        const model  = this.state.model;
        const planet = model.getPlanet();
        const water  = isNaN(planet.getSurfaceWaterPercent()) ? 'unknown'
                                                              : planet.getSurfaceWaterPercent() + '%';

        return (
            <div className='container PlanetRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>{planet.getName()}</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Rotation Period: </strong>
                                    <span className='rotation-period'>
                                        {planet.getRotationPeriodInDays()} days
                                    </span>
                                </div>

                                <div>
                                    <strong>Orbital Period: </strong>
                                    <span className='orbital-period'>
                                        {planet.getOrbitalPeriodInDays()} days
                                    </span>
                                </div>

                                <div>
                                    <strong>Diameter: </strong>
                                    <span className='diameter'>
                                        {planet.getDiameterInKilometers()} km
                                    </span>
                                </div>

                                <div>
                                    <strong>Climate: </strong>
                                    <span className='climate'>{planet.getClimate()}</span>
                                </div>

                                <div>
                                    <strong>Gravity: </strong>
                                    <span className='gravity'>{planet.getGravity()}</span>
                                </div>

                                <div>
                                    <strong>Terrain: </strong>
                                    <span className='terrain'>{planet.getTerrain()}</span>
                                </div>

                                <div>
                                    <strong>Surface Water Coverage: </strong>
                                    <span className='surface-water'>{water}</span>
                                </div>

                                <div>
                                    <strong>Population: </strong>
                                    <span className='population'>{planet.getPopulation()}</span>
                                </div>

                                <h3>Films</h3>
                                <div>{this.getFilms()}</div>

                                <h3>Residents</h3>
                                <div>{this.getResidents()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getFilms = () => {
        const films = this.state.model.getFilms();

        return (
            <ul className='films'>
                {films.map((film: FilmEntity) => {
                    const name = film.getTitle();
                    const id   = film.getId();

                    return (
                        <li key={id} className='film-item'>
                            <Link to={`/film/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    private getResidents = () => {
        const residents = this.state.model.getResidents();

        return (
            <ul className='residents'>
                {residents.map((resident: CharacterEntity) => {
                    const name = resident.getName();
                    const id   = resident.getId();

                    return (
                        <li key={id} className='resident-item'>
                            <Link to={`/character/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
}

export default PlanetRoute;