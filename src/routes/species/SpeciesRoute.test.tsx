import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';

import SpeciesRoute from './SpeciesRoute';
import { SpeciesRouteProps } from './SpeciesRouteProps';

describe('SpeciesRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays species information', (done) => {

        function renderRoute(props: SpeciesRouteProps) {

            return (<SpeciesRoute {...props} />);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['planet/1']} initialIndex={0}>
                <Switch>
                    <Route exact path={'planet/:id'} render={(props) => renderRoute(props)} />
                </Switch>
            </MemoryRouter>
        );

        setTimeout(() => {
            wrapper.update();
            assert.strictEqual(document.title, 'Species Info | API Explorer');

            const speciesName = wrapper.find('h2');
            assert.strictEqual(speciesName.text(), 'test species name');

            const classification = wrapper.find('.classification');
            assert.strictEqual(classification.text(), 'test classification');

            const designation = wrapper.find('.designation');
            assert.strictEqual(designation.text(), 'test designation');

            const averageHeight = wrapper.find('.average-height');
            assert.strictEqual(averageHeight.text(), '100 cm');

            const skinColors = wrapper.find('.skin-colors');
            assert.strictEqual(skinColors, 'test skin colors');

            const hairColors = wrapper.find('.hair-colors');
            assert.strictEqual(hairColors, 'test hair colors');

            const eyeColors = wrapper.find('.eye-colors');
            assert.strictEqual(eyeColors, 'test eye colors');

            assert.fail('not implemented');
            done();
        });
    });
});