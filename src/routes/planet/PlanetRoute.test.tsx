import * as assert from 'assert';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import { mount } from 'enzyme';
import sinon from 'sinon';

import PlanetRoute from './PlanetRoute';
import { PlanetRouteProps } from './PlanetRouteProps';
import { PlanetModel } from '../../models/PlanetModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { PlanetEntityTestFactory } from '../../entities/PlanetEntityTestFactory';

describe('PlanetRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays planet information', (done) => {

        function renderRoute(props: PlanetRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const planet = PlanetEntityTestFactory.create();
            const retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);
            gateways.planetsGateway.retrievePlanet = retrievePlanetStub;

            const film = FilmEntityTestFactory.create();
            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;

            const character = CharacterEntityTestFactory.create();
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            props.model = new PlanetModel(gateways);

            return (<PlanetRoute {...props}/>);
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
            assert.strictEqual(document.title, 'Planet Info | API Explorer');

            const planetName = wrapper.find('h2');
            assert.strictEqual(planetName.text(), 'test planet name');

            const rotationPeriod = wrapper.find('.rotation-period');
            assert.strictEqual(rotationPeriod.text(), '400 days');

            const orbitalPeriod = wrapper.find('.orbital-period');
            assert.strictEqual(orbitalPeriod.text(), '200 days');

            const diameter = wrapper.find('.diameter');
            assert.strictEqual(diameter.text(), '100 km');

            const climate = wrapper.find('.climate');
            assert.strictEqual(climate.text(), 'test climate');

            const gravity = wrapper.find('.gravity');
            assert.strictEqual(gravity.text(), 'test gravity');

            const surfaceWater = wrapper.find('.surface-water');
            assert.strictEqual(surfaceWater.text(), '500%');

            const population = wrapper.find('.population');
            assert.strictEqual(population.text(), '300');

            const films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1);

            const filmLink = films.first().find('Link');
            assert.strictEqual(filmLink.length, 1);
            assert.strictEqual(filmLink.props()['to'], '/film/2');
            assert.strictEqual(filmLink.text(), 'test title');

            const residents = wrapper.find('.resident-item');
            assert.strictEqual(residents.length, 1);

            const residentLink = residents.first().find('Link');
            assert.strictEqual(residentLink.length, 1);
            assert.strictEqual(residentLink.props()['to'], '/character/5');
            assert.strictEqual(residentLink.text(), 'test character name');

            done();
        });
    });
});