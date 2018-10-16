import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import sinon from 'sinon';
import { MemoryRouter, Route, Switch } from 'react-router';

import FilmRoute from './FilmRoute';
import { FilmRouteProps } from './FilmRouteProps';
import { FilmModel } from '../../models/FilmModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { PlanetEntityTestFactory } from '../../entities/PlanetEntityTestFactory';
import { SpeciesEntityTestFactory } from '../../entities/SpeciesEntityTestFactory';
import { StarshipEntityTestFactory } from '../../entities/StarshipEntityTestFactory';
import { VehicleEntityTestFactory } from '../../entities/VehicleEntityTestFactory';

describe('FilmRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays the film information', (done) => {

        function renderRoute(props: FilmRouteProps) {
            const film = FilmEntityTestFactory.create();
            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);

            const character = CharacterEntityTestFactory.create();
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);

            const planet = PlanetEntityTestFactory.create();
            const retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);

            const starship = StarshipEntityTestFactory.create();
            const retrieveStarshipStub = sinon.stub();
            retrieveStarshipStub.returns(starship);

            const vehicle = VehicleEntityTestFactory.create();
            const retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);

            const species = SpeciesEntityTestFactory.create();
            const retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);

            const gateways = GatewaysTestFactory.create();
            gateways.filmsGateway.retrieveFilm           = retrieveFilmStub;
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
            gateways.planetsGateway.retrievePlanet       = retrievePlanetStub;
            gateways.starshipsGateway.retrieveStarship   = retrieveStarshipStub;
            gateways.vehiclesGateway.retrieveVehicle     = retrieveVehicleStub;
            gateways.speciesGateway.retrieveSpecies      = retrieveSpeciesStub;

            props.model = new FilmModel(gateways);

            return (<FilmRoute {...props}/>);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/film/1']} initialIndex={0}>
                <Switch>
                    <Route exact path='/film/:episodeId' render={(props) => renderRoute(props)}/>
                </Switch>
            </MemoryRouter>
        );

        setTimeout(() => {
            wrapper.update();

            const h2 = wrapper.find('h2');
            assert.strictEqual(h2.text(), 'test title');

            const episodeId = wrapper.find('.episode-id');
            assert.strictEqual(episodeId.text(), '1');

            const releaseDate = wrapper.find('.release-date');
            assert.strictEqual(releaseDate.text(), '2012-11-11');

            const director = wrapper.find('.director');
            assert.strictEqual(director.text(), 'test director');

            const producer = wrapper.find('.producer');
            assert.strictEqual(producer.text(), 'test producer');

            const openingCrawl = wrapper.find('.opening-crawl');
            assert.strictEqual(openingCrawl.text(), 'test opening crawl');

            const characters = wrapper.find('.characters');
            const firstCharacter = characters.childAt(0);
            assert.strictEqual(firstCharacter.props()['to'], '/character/5');
            assert.strictEqual(firstCharacter.text(), 'test character name');

            const planets = wrapper.find('.planets');
            const firstPlanet = planets.childAt(0);
            assert.strictEqual(firstPlanet.props()['to'], '/planet/2');
            assert.strictEqual(firstPlanet.text(), 'test planet name');

            const starships = wrapper.find('.starships');
            const firstStarship = starships.childAt(0);
            assert.strictEqual(firstStarship.props()['to'], '/starship/23');
            assert.strictEqual(firstStarship.text(), 'test ship name');

            const vehicles = wrapper.find('.vehicles');
            const firstVehicle = vehicles.childAt(0);
            assert.strictEqual(firstVehicle.props()['to'], '/vehicle/20');
            assert.strictEqual(firstVehicle.text(), 'test vehicle name');


            const species = wrapper.find('.species');
            const firstSpecies = species.childAt(0);
            assert.strictEqual(firstSpecies.props()['to'], '/species/13');
            assert.strictEqual(firstSpecies.text(), 'test species name');

            done();
        }, 0);
    });
});