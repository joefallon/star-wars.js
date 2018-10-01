import { RouteComponentProps } from 'react-router';

import { SpeciesModel } from '../../models/SpeciesModel';

export interface SpeciesRouteProps extends RouteComponentProps<any> {
    model?: SpeciesModel;
}