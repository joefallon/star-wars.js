import { RouteComponentProps } from 'react-router';
import { IndexModel } from '../../models/IndexModel';


export interface IndexRouteProps extends RouteComponentProps<any> {
    model?: IndexModel
}
