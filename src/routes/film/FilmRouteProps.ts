import { RouteComponentProps } from 'react-router';
import { FilmModel } from '../../models/FilmModel';

export interface FilmRouteProps extends RouteComponentProps<any> {
    model?: FilmModel
}