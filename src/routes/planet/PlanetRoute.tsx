require('./PlanetRoute.css');

import * as React from 'react';

import { PlanetModelFactory } from '../../models/PlanetModelFactory';
import { PlanetRouteProps } from './PlanetRouteProps';
import { PlanetRouteState } from './PlanetRouteState';

class PlanetRoute extends React.Component<PlanetRouteProps, PlanetRouteState>{

    public constructor(props: PlanetRouteProps) {
        super(props);

        this.state = {
            model: props.model ? props.model : PlanetModelFactory.create()
        };
    }

    public render() {
        return (null);
    }
}

export default PlanetRoute;