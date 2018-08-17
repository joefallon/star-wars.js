require('./IndexRoute.css');

import * as React from 'react';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { IndexRouteProps } from './IndexRouteProps';
import { IndexRouteState } from './IndexRouteState';

class IndexRoute extends React.Component<IndexRouteProps, IndexRouteState> {

    public constructor(props: IndexRouteProps) {
        super(props);
        this.state = {
            isLoading: true
        };

        setTimeout(this.displayContent, 2000);
    }

    public displayContent = () => {
        this.setState({isLoading: false});
    };

    public render() {
        if(this.state.isLoading) {
            return (
                <SpinLoader/>
            );
        }

        return (
            <div className='container IndexRoute'>
                <Header />

                <div className='main'>
                    <div className='row'>
                        <div className='sm-6 sm-offset-3 card'>
                            <div className='card-header'>
                                <h2>Films</h2>
                            </div>

                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-condensed'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href='#'>A New Hope</a></td>
                                                <td>1979</td>
                                            </tr>
                                            <tr>
                                                <td><a href='#'>A New Hope</a></td>
                                                <td>1979</td>
                                            </tr>
                                            <tr>
                                                <td><a href='#'>A New Hope</a></td>
                                                <td>1979</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexRoute;