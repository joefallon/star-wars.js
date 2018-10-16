import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import VehicleRoute from './VehicleRoute';
import { VehicleRouteProps } from './VehicleRouteProps';
import { VehicleModel } from '../../models/VehicleModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { VehicleEntityTestFactory } from '../../entities/VehicleEntityTestFactory';

describe('VehicleRoute', () => {
    beforeEach(async () => {
        document.title = '';
    });

    it('displays vehicle information', (done) => {
        function renderRoute(props: VehicleRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const vehicle = VehicleEntityTestFactory.create();
            const retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);
            gateways.vehiclesGateway.retrieveVehicle = retrieveVehicleStub;

            const pilot = CharacterEntityTestFactory.create();
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(pilot);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            const film = FilmEntityTestFactory.create();
            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;

            props.model = new VehicleModel(gateways);

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

            const model = wrapper.find('.model');
            assert.strictEqual(model.text(), 'test model');

            const manufacturer = wrapper.find('.manufacturer');
            assert.strictEqual(manufacturer.text(), 'test manufacturer');

            const cost = wrapper.find('.cost');
            assert.strictEqual(cost.text(), '2 credits');

            const length = wrapper.find('.length');
            assert.strictEqual(length.text(), '4 meters');

            const maxAtmospheringSpeed = wrapper.find('.max-atmosphering-speed');
            assert.strictEqual(maxAtmospheringSpeed.text(), '5 kph');

            const crewCount = wrapper.find('.crew-count');
            assert.strictEqual(crewCount.text(), '3');

            const passengerCount = wrapper.find('.passenger-count');
            assert.strictEqual(passengerCount.text(), '6');

            const cargoCapacity = wrapper.find('.cargo-capacity');
            assert.strictEqual(cargoCapacity.text(), '1 kg');

            const consumables = wrapper.find('.consumables');
            assert.strictEqual(consumables.text(), 'test consumables');

            const vehicleClass = wrapper.find('.vehicle-class');
            assert.strictEqual(vehicleClass.text(), 'test vehicle class');

            const pilots    = wrapper.find('.pilot-item');
            const pilotLink = pilots.find('Link');
            assert.strictEqual(pilotLink.length, 1, 'pilot Link not found');
            assert.strictEqual(pilotLink.prop('to'), '/character/5');
            assert.strictEqual(pilotLink.text(),     'test character name');

            const films    = wrapper.find('.film-item');
            const filmLink = films.find('Link');
            assert.strictEqual(filmLink.length, 1, 'film link not found');
            assert.strictEqual(filmLink.prop('to'), '/film/2');
            assert.strictEqual(filmLink.text(),     'test title');

            done();
        });
    });
});