import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { VehicleRouteProps } from './VehicleRouteProps';
import { VehicleRouteState } from './VehicleRouteState';

class VehicleRoute extends React.Component<VehicleRouteProps, VehicleRouteState> {

    public constructor(props: VehicleRouteProps) {
        super(props);
        document.title = 'Vehicle Info | API Explorer';
        this.state = {
            isLoading: true
        };
    }

    public componentDidMount() {
        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (<SpinLoader />);
        }

        return (
            <div className='container VehicleRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>Vehicle Name</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Model: </strong>
                                    <span className='model'>model name</span>
                                </div>

                                <div>
                                    <strong>Manufacturer: </strong>
                                    <span className='manufacturer'>manufacturer name</span>
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
                                    <span className='max-atmosphering-speed'>xxxx</span>
                                </div>

                                <div>
                                    <strong>Crew Count: </strong>
                                    <span className='crew-count'>xxxx</span>
                                </div>

                                <div>
                                    <strong>Passenger Count: </strong>
                                    <span className='passenger-count'>xxxx</span>
                                </div>

                                <div>
                                    <strong>Cargo Capacity: </strong>
                                    <span className='cargo-capacity'>xxxx</span>
                                </div>

                                <div>
                                    <strong>Consumables: </strong>
                                    <span className='consumables'>xxxx</span>
                                </div>

                                <div>
                                    <strong>Vehicle Class: </strong>
                                    <span className='vehicle-class'>vehicle class</span>
                                </div>

                                <h3>Pilots</h3>
                                <div>
                                    <ul>
                                        <li>
                                            <Link key={null} to='#' className='pilot-item'>pilot 1</Link>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Films</h3>
                                <div>
                                    <ul>
                                        <li>
                                            <Link key={null} to='#' className='film-item'>film 1</Link>
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

export default VehicleRoute;