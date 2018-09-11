import { RouteComponentProps } from 'react-router';

import CharacterModel from '../../models/CharacterModel';

export default interface CharacterRouteProps extends RouteComponentProps<any> {
    model?: CharacterModel
}