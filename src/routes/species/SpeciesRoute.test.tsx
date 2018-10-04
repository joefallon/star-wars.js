import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { SpeciesEntity } from '../../entities/SpeciesEntity';
import { SpeciesModel } from '../../models/SpeciesModel';
import SpeciesRoute from './SpeciesRoute';
import { SpeciesRouteProps } from './SpeciesRouteProps';

describe('SpeciesRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays species information', (done) => {

        function renderRoute(props: SpeciesRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const species = new SpeciesEntity();
            species.setName('test species name');
            species.setClassification('test classification');
            species.setDesignation('test designation');
            species.setAverageHeightInCentimeters(100);
            species.setSkinColor('test skin colors');
            species.setHairColor('test hair colors');
            species.setEyeColor('test eye colors');

            const retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);
            gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;

            props.model = new SpeciesModel(gateways);

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
            assert.strictEqual(skinColors.text(), 'test skin colors');

            const hairColors = wrapper.find('.hair-colors');
            assert.strictEqual(hairColors.text(), 'test hair colors');

            const eyeColors = wrapper.find('.eye-colors');
            assert.strictEqual(eyeColors.text(), 'test eye colors');

            const characters = wrapper.find('.character-item');
            assert.strictEqual(characters.length, 1, 'character items not found');


            assert.fail('not implemented');
            done();
        });
    });
});