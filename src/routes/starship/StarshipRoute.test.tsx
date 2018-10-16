import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import StarshipRoute from './StarshipRoute';
import { StarshipRouteProps } from './StarshipRouteProps';
import { StarshipModel } from '../../models/StarshipModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { StarshipEntityTestFactory } from '../../entities/StarshipEntityTestFactory';

describe('StarshipRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays starship information', (done) => {
        function renderRoute(props: StarshipRouteProps) {
            const gateways = GatewaysTestFactory.create();

            const starship = StarshipEntityTestFactory.create();
            const retrieveStarshipStub = sinon.stub();
            retrieveStarshipStub.returns(starship);
            gateways.starshipsGateway.retrieveStarship = retrieveStarshipStub;

            const pilot = CharacterEntityTestFactory.create();
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(pilot);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;

            const film = FilmEntityTestFactory.create();
            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;


            props.model = new StarshipModel(gateways);

            return (<StarshipRoute {...props}/>);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/starship/1']} initialIndex={0} >
                <Switch>
                    <Route exact path={'/starship/:id'} render={(props) => renderRoute(props)} />
                </Switch>
            </MemoryRouter>
        );

        setTimeout(() => {
            wrapper.update();
            assert.strictEqual(document.title, 'Starship Info | API Explorer');

            const title = wrapper.find('h2');
            assert.strictEqual(title.text(), 'test ship name');

            const model = wrapper.find('.model');
            assert.strictEqual(model.text(), 'test model');

            const manufacturer = wrapper.find('.manufacturer');
            assert.strictEqual(manufacturer.text(), 'test manufacturer');

            const cost = wrapper.find('.cost');
            assert.strictEqual(cost.text(), '2000 credits');

            const length = wrapper.find('.length');
            assert.strictEqual(length.text(), '400 meters');

            const maxAtmoSpeed = wrapper.find('.max-atmosphering-speed');
            assert.strictEqual(maxAtmoSpeed.text(), '5 KPH');

            const crewCount = wrapper.find('.crew-count');
            assert.strictEqual(crewCount.text(), '300');

            const passengerCount = wrapper.find('.passenger-count');
            assert.strictEqual(passengerCount.text(), '600');

            const cargoCapacity = wrapper.find('.cargo-capacity');
            assert.strictEqual(cargoCapacity.text(), '1000 kg');

            const consumables = wrapper.find('.consumables');
            assert.strictEqual(consumables.text(), 'test consumables');

            const hyperdriveRating =  wrapper.find('.hyperdrive-rating');
            assert.strictEqual(hyperdriveRating.text(), 'test rating');

            const mglt = wrapper.find('.mglt');
            assert.strictEqual(mglt.text(), '6');

            const starshipClass = wrapper.find('.starship-class');
            assert.strictEqual(starshipClass.text(), 'test ship class');

            const pilots = wrapper.find('.pilot-item');
            assert.strictEqual(pilots.length, 1, 'pilots.length != 1');

            const pilotLink = pilots.first().find('Link');
            assert.strictEqual(pilotLink.length, 1, 'pilotLink.length != 1');
            assert.strictEqual(pilotLink.prop('to'), '/character/5');
            assert.strictEqual(pilotLink.text(), 'test character name');

            const films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1, 'films.length != 1');

            const filmLink = films.first().find('Link');
            assert.strictEqual(filmLink.length, 1, 'filmLink.length != 1');
            assert.strictEqual(filmLink.prop('to'), '/film/2');
            assert.strictEqual(filmLink.text(), 'test title');

            done();
        }, 0);
    });
});