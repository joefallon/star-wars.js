import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import VehicleRoute from './VehicleRoute';

import { VehicleRouteProps } from './VehicleRouteProps';

describe('VehicleRoute', () => {
    beforeEach(async () => {
        document.title = '';
    });

    it('displays vehicle information', (done) => {

        function renderRoute(props: VehicleRouteProps) {
            return (<VehicleRoute {...props} />);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/vehicle/1']} initialIndex={0} >
                <Switch>
                    <Route exact path={'/vehicle/:id'} render={(props) => renderRoute(props)} />
                </Switch>
            </MemoryRouter>
        );

        setTimeout(() => {
            wrapper.update();
            assert.strictEqual(document.title, 'Vehicle Info | API Explorer');

            const vehicleName = wrapper.find('h2');
            assert.strictEqual(vehicleName.text(), 'test vehicle name');

            assert.fail('not implemented');
            done();
        });
    });
});