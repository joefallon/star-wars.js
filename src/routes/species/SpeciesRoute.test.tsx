import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';
import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';

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
            species.setCharacterUrls(['https://swapi.co/api/people/1/']);
            species.setFilmUrls(['https://swapi.co/api/films/2/']);

            const retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);
            gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;

            const character = new CharacterEntity();
            character.setName('test character name');
            character.setUrl('https://swapi.co/api/people/1/');

            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            const film = new FilmEntity();
            film.setUrl('https://swapi.co/api/films/2/');
            film.setTitle('test film title');

            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;

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

            const characterLink = characters.first().find('Link');
            assert.strictEqual(characterLink.length, 1, 'character link not found');
            assert.strictEqual(characterLink.text(), 'test character name');
            assert.strictEqual(characterLink.prop('to'), '/character/1');

            const films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1, 'film items not found');



            assert.fail('not implemented');
            done();
        });
    });
});