import { RouteComponentProps } from 'react-router';

import CharacterModel from '../../models/CharacterModel';

export interface CharacterRouteProps extends RouteComponentProps<any> {
    model?: CharacterModel
}