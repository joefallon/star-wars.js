import { RouteComponentProps } from 'react-router';

import { StarshipModel } from '../../models/StarshipModel';

export interface StarshipRouteProps extends RouteComponentProps<any> {
    model?: StarshipModel
}