import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';

import VehicleRoute from './VehicleRoute';
import { VehicleEntity } from '../../entities/VehicleEntity';
import { VehicleModel } from '../../models/VehicleModel';
import { VehicleRouteProps } from './VehicleRouteProps';

describe('VehicleRoute', () => {
    beforeEach(async () => {
        document.title = '';
    });

    it('displays vehicle information', (done) => {
        function renderRoute(props: VehicleRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const vehicle = new VehicleEntity();
            vehicle.setName('test vehicle name');
            vehicle.setModel('test model name');
            vehicle.setManufacturer('test manufacturer name');
            vehicle.setCostInCredits(100);
            vehicle.setLengthInMeters(10);
            vehicle.setMaxAtmospheringSpeedInKPH(1000);
            vehicle.setCrewCount(1);
            vehicle.setPassengerCount(2);
            vehicle.setCargoCapacityInKilograms(20);
            vehicle.setConsumables('test consumables');
            vehicle.setVehicleClass('test class');
            vehicle.setPilotCharacterUrls(['https://swapi.co/api/people/1/']);
            vehicle.setFilmUrls(['https://swapi.co/api/films/1/']);

            const retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);
            gateways.vehiclesGateway.retrieveVehicle = retrieveVehicleStub;

            const pilot = new CharacterEntity();
            pilot.setUrl('https://swapi.co/api/people/2/');
            pilot.setName('test pilot name');

            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(pilot);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            const film = new FilmEntity();
            film.setUrl('https://swapi.co/api/films/2/');
            film.setTitle('test film title');

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
            assert.strictEqual(model.text(), 'test model name');

            const manufacturer = wrapper.find('.manufacturer');
            assert.strictEqual(manufacturer.text(), 'test manufacturer name');

            const cost = wrapper.find('.cost');
            assert.strictEqual(cost.text(), '100 credits');

            const length = wrapper.find('.length');
            assert.strictEqual(length.text(), '10 meters');

            const maxAtmospheringSpeed = wrapper.find('.max-atmosphering-speed');
            assert.strictEqual(maxAtmospheringSpeed.text(), '1000 kph');

            const crewCount = wrapper.find('.crew-count');
            assert.strictEqual(crewCount.text(), '1');

            const passengerCount = wrapper.find('.passenger-count');
            assert.strictEqual(passengerCount.text(), '2');

            const cargoCapacity = wrapper.find('.cargo-capacity');
            assert.strictEqual(cargoCapacity.text(), '20 kg');

            const consumables = wrapper.find('.consumables');
            assert.strictEqual(consumables.text(), 'test consumables');

            const vehicleClass = wrapper.find('.vehicle-class');
            assert.strictEqual(vehicleClass.text(), 'test class');

            const pilots    = wrapper.find('.pilot-item');
            const pilotLink = pilots.find('Link');
            assert.strictEqual(pilotLink.length, 1, 'pilot Link not found');
            assert.strictEqual(pilotLink.prop('to'), '/character/2');
            assert.strictEqual(pilotLink.text(),     'test pilot name');

            const films    = wrapper.find('.film-item');
            const filmLink = films.find('Link');
            assert.strictEqual(filmLink.length, 1, 'film link not found');
            assert.strictEqual(filmLink.prop('to'), '/film/2');
            assert.strictEqual(filmLink.text(),     'test film title');

            done();
        });
    });
});