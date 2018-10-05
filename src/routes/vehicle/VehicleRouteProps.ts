import { RouteComponentProps } from 'react-router';

import { VehicleModel } from '../../models/VehicleModel';

export interface VehicleRouteProps extends RouteComponentProps<any> {
    model?: VehicleModel
}