require('./StarshipRoute.css');

import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { StarshipRouteProps } from './StarshipRouteProps';
import { StarshipRouteState } from './StarshipRouteState';
import { StarshipModelFactory } from '../../models/StarshipModelFactory';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';

class StarshipRoute extends React.Component<StarshipRouteProps, StarshipRouteState>{

    public constructor(props: StarshipRouteProps) {
        super(props);
        document.title = 'Starship Info | API Explorer';

        this.state = {
            isLoading: true,
            model:     props.model ? props.model : StarshipModelFactory.create()
        };
    }

    public async componentDidMount() {
        const id = parseInt(this.props.match.params['id'], 10);
        await this.state.model.loadStarship(id);
        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (<SpinLoader />);
        }

        const model    = this.state.model;
        const starship = model.getStarship();

        const cost = starship.getCostInCredits();
        const formattedCost = isNaN(cost)? 'unknown' : cost + ' credits';

        const length = starship.getLengthInMeters();
        const formattedLength = isNaN(length) ? 'unknown' : length + ' meters';

        const maxAtmo = starship.getMaxAtmospheringSpeedInKPH();
        const formattedMaxAtmo = isNaN(maxAtmo) ? 'unknown' : maxAtmo + ' KPH';

        const crew = starship.getCrewCount();
        const formattedCrew = isNaN(crew) ? 'unknown' : crew;

        const passengerCount = starship.getPassengerCount();
        const formattedPassenger = isNaN(passengerCount) ? 'unknown' : passengerCount;

        const cargo = starship.getCargoCapacityInKilograms();
        const formattedCargo = isNaN(cargo) ? 'unknown' : cargo + ' kg';

        return (
            <div className='container StarshipRoute'>
                <Header/>

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                &lt; <Link to={'/'}>Back to All Films</Link>
                                <h2>{starship.getName()}</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Model: </strong>
                                    <span className='model'>{starship.getModel()}</span>
                                </div>

                                <div>
                                    <strong>Manufacturer: </strong>
                                    <span className='manufacturer'>{starship.getManufacturer()}</span>
                                </div>

                                <div>
                                    <strong>Cost: </strong>
                                    <span className='cost'>{formattedCost}</span>
                                </div>

                                <div>
                                    <strong>Length: </strong>
                                    <span className='length'>{formattedLength}</span>
                                </div>

                                <div>
                                    <strong>Max Atmosphering Speed: </strong>
                                    <span className='max-atmosphering-speed'>{formattedMaxAtmo}</span>
                                </div>

                                <div>
                                    <strong>Crew Count: </strong>
                                    <span className='crew-count'>{formattedCrew}</span>
                                </div>

                                <div>
                                    <strong>Passenger Count: </strong>
                                    <span className='passenger-count'>{formattedPassenger}</span>
                                </div>

                                <div>
                                    <strong>Cargo Capacity: </strong>
                                    <span className='cargo-capacity'>{formattedCargo}</span>
                                </div>

                                <div>
                                    <strong>Consumables: </strong>
                                    <span className='consumables'>{starship.getConsumables()}</span>
                                </div>

                                <div>
                                    <strong>Hyperdrive Rating: </strong>
                                    <span className='hyperdrive-rating'>
                                        {starship.getHyperdriveRating()}
                                    </span>
                                </div>

                                <div>
                                    <strong>MGLT: </strong>
                                    <span className='mglt'>{starship.getMegalightSpeed()}</span>
                                </div>

                                <div>
                                    <strong>Starship Class: </strong>
                                    <span className='starship-class'>{starship.getStarshipClass()}</span>
                                </div>

                                <h3>Pilots</h3>
                                <div>{this.getPilots()}</div>

                                <h3>Films</h3>
                                <div>{this.getFilms()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getPilots = () => {
        const pilots = this.state.model.getPilots();

        if(pilots.length == 0) {
            return (<>None</>);
        }

        return (
            <ul className='link-list'>
                {pilots.map((pilot: CharacterEntity) => {
                    const id   = pilot.getId();
                    const name = pilot.getName();

                    return (
                        <li key={id} className='link-list-item pilot-item'>
                            <Link to={`/character/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    private getFilms = () => {
        const films = this.state.model.getFilms();

        if(films.length == 0) {
            return (<>None</>);
        }

        return (
            <ul className='link-list'>
                {films.map((film: FilmEntity) => {
                    const id    = film.getId();
                    const title = film.getTitle();

                    return (
                        <li key={id} className='link-list-item film-item'>
                            <Link to={`/film/${id}`}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
}

export default StarshipRoute;