import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

before(async () => {
    configure({ adapter: new Adapter() });
});