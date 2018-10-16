require('./VehicleRoute.css');

import * as React from 'react';
import { Link } from 'react-router-dom';

import { VehicleModelFactory } from '../../models/VehicleModelFactory';
import { VehicleRouteProps } from './VehicleRouteProps';
import { VehicleRouteState } from './VehicleRouteState';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';

class VehicleRoute extends React.Component<VehicleRouteProps, VehicleRouteState> {

    public constructor(props: VehicleRouteProps) {
        super(props);
        document.title = 'Vehicle Info | API Explorer';
        this.state = {
            isLoading: true,
            id:        parseInt(props.match.params['id'], 10),
            model:     props.model ? props.model : VehicleModelFactory.create()
        };
    }

    public async componentDidMount() {
        await this.state.model.loadVehicle(this.state.id);
        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (<SpinLoader />);
        }

        const model   = this.state.model;
        const vehicle = model.getVehicle();

        const cost = vehicle.getCostInCredits();
        const formattedCost = isNaN(cost) ? 'unknown' : cost + ' credits';

        return (
            <div className='container VehicleRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                &lt; <Link to={'/'}>Back to All Films</Link>
                                <h2>{vehicle.getName()}</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Model: </strong>
                                    <span className='model'>{vehicle.getModel()}</span>
                                </div>

                                <div>
                                    <strong>Manufacturer: </strong>
                                    <span className='manufacturer'>{vehicle.getManufacturer()}</span>
                                </div>

                                <div>
                                    <strong>Cost: </strong>
                                    <span className='cost'>{formattedCost}</span>
                                </div>

                                <div>
                                    <strong>Length: </strong>
                                    <span className='length'>{vehicle.getLengthInMeters()} meters</span>
                                </div>

                                <div>
                                    <strong>Max Atmosphering Speed: </strong>
                                    <span className='max-atmosphering-speed'>
                                        {vehicle.getMaxAtmospheringSpeedInKPH()} kph
                                    </span>
                                </div>

                                <div>
                                    <strong>Crew Count: </strong>
                                    <span className='crew-count'>{vehicle.getCrewCount()}</span>
                                </div>

                                <div>
                                    <strong>Passenger Count: </strong>
                                    <span className='passenger-count'>{vehicle.getPassengerCount()}</span>
                                </div>

                                <div>
                                    <strong>Cargo Capacity: </strong>
                                    <span className='cargo-capacity'>
                                        {vehicle.getCargoCapacityInKilograms()} kg
                                    </span>
                                </div>

                                <div>
                                    <strong>Consumables: </strong>
                                    <span className='consumables'>{vehicle.getConsumables()}</span>
                                </div>

                                <div>
                                    <strong>Vehicle Class: </strong>
                                    <span className='vehicle-class'>{vehicle.getVehicleClass()}</span>
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
                        <li key={id} className='link-list-item'>
                            <Link to={`/character/${id}`} className='pilot-item'>{name}</Link>
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
                        <li key={id} className='link-list-item'>
                            <Link to={`/film/${id}`} className='film-item'>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
}

export default VehicleRoute;