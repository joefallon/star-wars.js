import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import SpeciesRoute from './SpeciesRoute';
import { SpeciesRouteProps } from './SpeciesRouteProps';
import { SpeciesModel } from '../../models/SpeciesModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { PlanetEntityTestFactory } from '../../entities/PlanetEntityTestFactory';
import { SpeciesEntityTestFactory } from '../../entities/SpeciesEntityTestFactory';

describe('SpeciesRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays species information', (done) => {

        function renderRoute(props: SpeciesRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const species = SpeciesEntityTestFactory.create();
            const retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);
            gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;

            const character = CharacterEntityTestFactory.create();
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            const film = FilmEntityTestFactory.create();
            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;

            const planet = PlanetEntityTestFactory.create();
            const retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);
            gateways.planetsGateway.retrievePlanet = retrievePlanetStub;

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
            assert.strictEqual(classification.text(), 'test species classification');

            const designation = wrapper.find('.designation');
            assert.strictEqual(designation.text(), 'test species designation');

            const averageHeight = wrapper.find('.average-height');
            assert.strictEqual(averageHeight.text(), '10 cm');

            const skinColors = wrapper.find('.skin-colors');
            assert.strictEqual(skinColors.text(), 'test species skin color');

            const hairColors = wrapper.find('.hair-colors');
            assert.strictEqual(hairColors.text(), 'test species hair color');

            const eyeColors = wrapper.find('.eye-colors');
            assert.strictEqual(eyeColors.text(), 'test species eye color');

            const language = wrapper.find('.language');
            assert.strictEqual(language.text(), 'test language');

            const lifespan = wrapper.find('.average-lifespan');
            assert.strictEqual(lifespan.text(), '20 years');

            const characters = wrapper.find('.character-item');
            assert.strictEqual(characters.length, 1, 'character items not found');

            const characterLink = characters.first().find('Link');
            assert.strictEqual(characterLink.length, 1, 'character link not found');
            assert.strictEqual(characterLink.text(), 'test character name');
            assert.strictEqual(characterLink.prop('to'), '/character/5');

            const films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1, 'film items not found');

            const filmLink = films.first().find('Link');
            assert.strictEqual(filmLink.length, 1, 'film link not found');
            assert.strictEqual(filmLink.text(), 'test title');
            assert.strictEqual(filmLink.prop('to'), '/film/2');

            const homeworld = wrapper.find('.homeworld').find('Link');
            assert.strictEqual(homeworld.length, 1, `homeworld.length is not 1`);
            assert.strictEqual(homeworld.text(), 'test planet name');
            assert.strictEqual(homeworld.prop('to'), '/planet/2');

            done();
        });
    });
});