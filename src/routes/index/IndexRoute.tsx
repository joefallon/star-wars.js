require('./IndexRoute.css');

import * as React from 'react';

import { IndexRouteProps } from './IndexRouteProps';
import { IndexRouteState } from './IndexRouteState';

class IndexRoute extends React.Component<IndexRouteProps, IndexRouteState> {

    public constructor(props: IndexRouteProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className='container IndexRoute'>
                <div className='header'>
                    <h1>Star Wars API Explorer</h1>
                </div>

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
                                            <th>Name</th>
                                            <th>Year</th>
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

                <div className='footer'>

                </div>
            </div>
        );
    }
}

export default IndexRoute;