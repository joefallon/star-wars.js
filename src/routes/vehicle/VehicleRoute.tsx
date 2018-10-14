import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';

import { VehicleModelFactory } from '../../models/VehicleModelFactory';
import { VehicleRouteProps } from './VehicleRouteProps';
import { VehicleRouteState } from './VehicleRouteState';

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

        return (
            <div className='container VehicleRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
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
                                    <span className='cost'>{vehicle.getCostInCredits()} credits</span>
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

        return (
            <ul>
                {pilots.map((pilot: CharacterEntity) => {
                    const id   = pilot.getId();
                    const name = pilot.getName();

                    return (
                        <li key={id}>
                            <Link to={`/character/${id}`} className='pilot-item'>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    private getFilms = () => {
        const films = this.state.model.getFilms();

        return (
            <ul>
                {films.map((film: FilmEntity) => {
                    const id    = film.getId();
                    const title = film.getTitle();

                    return (
                        <li key={id}>
                            <Link to={`/film/${id}`} className='film-item'>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
}

export default VehicleRoute;