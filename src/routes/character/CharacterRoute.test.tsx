import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import CharacterRoute from './CharacterRoute';
import { CharacterRouteProps } from './CharacterRouteProps';
import { CharacterModel } from '../../models/CharacterModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { PlanetEntityTestFactory } from '../../entities/PlanetEntityTestFactory';
import { SpeciesEntityTestFactory } from '../../entities/SpeciesEntityTestFactory';
import { StarshipEntityTestFactory } from '../../entities/StarshipEntityTestFactory';
import { VehicleEntityTestFactory } from '../../entities/VehicleEntityTestFactory';

describe('CharacterRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays the character information', (done) => {

        function renderRoute(props: CharacterRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const char = CharacterEntityTestFactory.create();
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(char);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            const film = FilmEntityTestFactory.create();
            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;

            const planet = PlanetEntityTestFactory.create();
            const retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);
            gateways.planetsGateway.retrievePlanet = retrievePlanetStub;

            const species = SpeciesEntityTestFactory.create();
            const retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);
            gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;

            const vehicle = VehicleEntityTestFactory.create();
            const retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);
            gateways.vehiclesGateway.retrieveVehicle = retrieveVehicleStub;

            const starship = StarshipEntityTestFactory.create();
            const retrieveStarshipStub = sinon.stub();
            retrieveStarshipStub.returns(starship);
            gateways.starshipsGateway.retrieveStarship = retrieveStarshipStub;

            props.model = new CharacterModel(gateways);

            return (<CharacterRoute {...props}/>);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/character/1']} initialIndex={0}>
                <Switch>
                    <Route exact path='/character/:id' render={(props) => renderRoute(props)}/>
                </Switch>
            </MemoryRouter>
        );

        setTimeout(() => {
            wrapper.update();
            assert.strictEqual(document.title, 'Character Info | API Explorer');

            assert.strictEqual(wrapper.find('h2').text(),          'test character name');
            assert.strictEqual(wrapper.find('.height').text(),     '10 cm');
            assert.strictEqual(wrapper.find('.mass').text(),       '22 kg');
            assert.strictEqual(wrapper.find('.hair-color').text(), 'test hair color');
            assert.strictEqual(wrapper.find('.skin-color').text(), 'test skin color');
            assert.strictEqual(wrapper.find('.eye-color').text(),  'test eye color');
            assert.strictEqual(wrapper.find('.birth-year').text(), '1900');
            assert.strictEqual(wrapper.find('.gender').text(),     'test gender');

            const homeworldLink = wrapper.find('.homeworld').first();
            assert.strictEqual(homeworldLink.prop('to'), '/planet/2');
            assert.strictEqual(homeworldLink.text(),     'test planet name');

            const films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1);

            const filmLink = films.first().find('Link');
            assert.strictEqual(filmLink.length, 1);
            assert.strictEqual(filmLink.prop('to'), '/film/2');
            assert.strictEqual(filmLink.text(),     'test title');

            const species = wrapper.find('.species-item');
            assert.strictEqual(species.length, 1);

            const speciesLink = species.first().find('Link');
            assert.strictEqual(speciesLink.length, 1);
            assert.strictEqual(speciesLink.prop('to'), '/species/13');
            assert.strictEqual(speciesLink.text(),     'test species name');

            const vehicles = wrapper.find('.vehicle-item');
            assert.strictEqual(vehicles.length, 1);

            const vehicleLink = vehicles.first().find('Link');
            assert.strictEqual(vehicleLink.length, 1);
            assert.strictEqual(vehicleLink.prop('to'), '/vehicle/20');
            assert.strictEqual(vehicleLink.text(),     'test vehicle name');

            const starships = wrapper.find('.starship-item');
            assert.strictEqual(starships.length, 1, 'starship-item count');

            const starshipLink = starships.first().find('Link');
            assert.strictEqual(starshipLink.length, 1, 'starship link count');
            assert.strictEqual(starshipLink.prop('to'), '/starship/23');
            assert.strictEqual(starshipLink.text(),     'test ship name');

            done();
        }, 0);
    });
});