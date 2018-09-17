import { RouteComponentProps } from 'react-router';

import { PlanetModel } from '../../models/PlanetModel';

export interface PlanetRouteProps extends RouteComponentProps<any> {
    model?: PlanetModel
}