import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import CharacterEntityTestFactory from '../../entities/CharacterEntityTestFactory';
import CharacterModel from '../../models/CharacterModel';
import CharacterRoute from './CharacterRoute';
import CharacterRouteProps from './CharacterRouteProps';
import FilmEntityTestFactory from '../../entities/FilmEntityTestFactory';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import PlanetEntityTestFactory from '../../entities/PlanetEntityTestFactory';
import SpeciesEntityTestFactory from '../../entities/SpeciesEntityTestFactory';

describe('CharacterRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    // it('displays the character information', (done) => {
    //
    //     function renderRoute(props: CharacterRouteProps) {
    //         const gateways = GatewaysTestFactory.create();
    //
    //         const char = CharacterEntityTestFactory.create();
    //         const retrieveCharacterStub = sinon.stub();
    //         retrieveCharacterStub.returns(char);
    //         gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
    //
    //         const film = FilmEntityTestFactory.create();
    //         const retrieveFilmStub = sinon.stub();
    //         retrieveFilmStub.returns(film);
    //         gateways.filmsGateway.retrieveFilm = retrieveFilmStub;
    //
    //         const planet = PlanetEntityTestFactory.create();
    //         const retrievePlanetStub = sinon.stub();
    //         retrievePlanetStub.returns(planet);
    //         gateways.planetsGateway.retrievePlanet = retrievePlanetStub;
    //
    //         const species = SpeciesEntityTestFactory.create();
    //         const retrieveSpeciesStub = sinon.stub();
    //         retrieveSpeciesStub.returns(species);
    //
    //         gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;
    //
    //         props.model = new CharacterModel(gateways);
    //
    //         return (<CharacterRoute {...props}/>);
    //     }
    //
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/character/1']} initialIndex={0}>
    //             <Switch>
    //                 <Route exact path='/character/:id' render={(props) => renderRoute(props)}/>
    //             </Switch>
    //         </MemoryRouter>
    //     );
    //
    //     setTimeout(() => {
    //         wrapper.update();
    //         assert.strictEqual(document.title, 'Character Info | API Explorer');
    //
    //         assert.strictEqual(wrapper.find('h2').text(),          'test name');
    //         assert.strictEqual(wrapper.find('.height').text(),     '1 cm');
    //         assert.strictEqual(wrapper.find('.mass').text(),       '2 kg');
    //         assert.strictEqual(wrapper.find('.hair-color').text(), 'green');
    //         assert.strictEqual(wrapper.find('.skin-color').text(), 'white');
    //         assert.strictEqual(wrapper.find('.eye-color').text(),  'brown');
    //         assert.strictEqual(wrapper.find('.birth-year').text(), '1900');
    //         assert.strictEqual(wrapper.find('.gender').text(),     'male');
    //
    //         const homeworldLink = wrapper.find('.homeworld').first();
    //         assert.strictEqual(homeworldLink.props()['to'], '/planet/2');
    //         assert.strictEqual(homeworldLink.text(),        'test planet name');
    //
    //         const films = wrapper.find('.film-item');
    //         const filmLink = films.first().find('Link');
    //         assert.strictEqual(filmLink.props()['to'], '/film/2');
    //         assert.strictEqual(filmLink.text(),        'test title');
    //
    //         assert.fail('not implemented');
    //         done();
    //     }, 0);
    // });
});