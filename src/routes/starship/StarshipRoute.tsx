require('./StarshipRoute.css');

import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { StarshipRouteProps } from './StarshipRouteProps';
import { StarshipRouteState } from './StarshipRouteState';

class StarshipRoute extends React.Component<StarshipRouteProps, StarshipRouteState>{

    public constructor(props: StarshipRouteProps) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    public async componentDidMount() {

        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (<SpinLoader />);
        }

        return (
            <div className='container StarshipRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>starship name</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Model: </strong>
                                    <span className='model'>model</span>
                                </div>

                                <div>
                                    <strong>Manufacturer: </strong>
                                    <span className='manufacturer'>manufacturer</span>
                                </div>

                                <div>
                                    <strong>Cost: </strong>
                                    <span className='cost'>cost</span>
                                </div>

                                <div>
                                    <strong>Length: </strong>
                                    <span className='length'>length</span>
                                </div>

                                <div>
                                    <strong>Max Atmosphering Speed: </strong>
                                    <span className='max-atmosphering-speed'>max-atmosphering-speed</span>
                                </div>

                                <div>
                                    <strong>Crew Count: </strong>
                                    <span className='crew-count'>crew-count</span>
                                </div>

                                <div>
                                    <strong>Passenger Count: </strong>
                                    <span className='passenger-count'>passenger-count</span>
                                </div>

                                <div>
                                    <strong>Cargo Capacity: </strong>
                                    <span className='cargo-capacity'>cargo-capacity</span>
                                </div>

                                <div>
                                    <strong>Consumables: </strong>
                                    <span className='consumables'>consumables</span>
                                </div>

                                <div>
                                    <strong>Hyperdrive Rating: </strong>
                                    <span className='hyperdrive-rating'>hyperdrive-rating</span>
                                </div>

                                <div>
                                    <strong>MGLT: </strong>
                                    <span className='mglt'>mglt</span>
                                </div>

                                <div>
                                    <strong>Starship Class: </strong>
                                    <span className='starship-class'>starship-class</span>
                                </div>

                                <h3>Pilots</h3>
                                <div>
                                    <ul className='link-list'>
                                        <li key={'id'} className='link-list-item'>
                                            <Link to={'/character/:id'} className='pilot-item'>
                                                pilot-item
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Films</h3>
                                <div>
                                    <ul className='link-list'>
                                        <li key={'id'} className='link-list-item'>
                                            <Link to={'/film/:id'} className='film-item'>
                                                film-item
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StarshipRoute;