var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';
import CharacterEntityTestFactory from '../../entities/CharacterEntityTestFactory';
import CharacterModel from '../../models/CharacterModel';
import CharacterRoute from './CharacterRoute';
import FilmEntityTestFactory from '../../entities/FilmEntityTestFactory';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import PlanetEntityTestFactory from '../../entities/PlanetEntityTestFactory';
import SpeciesEntityTestFactory from '../../entities/SpeciesEntityTestFactory';
import { VehicleEntityTestFactory } from '../../entities/VehicleEntityTestFactory';
import { StarshipEntityTestFactory } from '../../entities/StarshipEntityTestFactory';
describe('CharacterRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    it('displays the character information', function (done) {
        function renderRoute(props) {
            var gateways = GatewaysTestFactory.create();
            var char = CharacterEntityTestFactory.create();
            var retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(char);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
            var film = FilmEntityTestFactory.create();
            var retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;
            var planet = PlanetEntityTestFactory.create();
            var retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);
            gateways.planetsGateway.retrievePlanet = retrievePlanetStub;
            var species = SpeciesEntityTestFactory.create();
            var retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);
            gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;
            var vehicle = VehicleEntityTestFactory.create();
            var retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);
            gateways.vehiclesGateway.retrieveVehicle = retrieveVehicleStub;
            var starship = StarshipEntityTestFactory.create();
            var retrieveStarshipStub = sinon.stub();
            retrieveStarshipStub.returns(starship);
            gateways.starshipsGateway.retrieveStarship = retrieveStarshipStub;
            props.model = new CharacterModel(gateways);
            return (React.createElement(CharacterRoute, __assign({}, props)));
        }
        var wrapper = mount(React.createElement(MemoryRouter, { initialEntries: ['/character/1'], initialIndex: 0 },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: '/character/:id', render: function (props) { return renderRoute(props); } }))));
        setTimeout(function () {
            wrapper.update();
            assert.strictEqual(document.title, 'Character Info | API Explorer');
            assert.strictEqual(wrapper.find('h2').text(), 'test name');
            assert.strictEqual(wrapper.find('.height').text(), '10 cm');
            assert.strictEqual(wrapper.find('.mass').text(), '22 kg');
            assert.strictEqual(wrapper.find('.hair-color').text(), 'test hair color');
            assert.strictEqual(wrapper.find('.skin-color').text(), 'test skin color');
            assert.strictEqual(wrapper.find('.eye-color').text(), 'test eye color');
            assert.strictEqual(wrapper.find('.birth-year').text(), '1900');
            assert.strictEqual(wrapper.find('.gender').text(), 'test gender');
            var homeworldLink = wrapper.find('.homeworld').first();
            assert.strictEqual(homeworldLink.props()['to'], '/planet/2');
            assert.strictEqual(homeworldLink.text(), 'test planet name');
            var films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1);
            var filmLink = films.first().find('Link');
            assert.strictEqual(filmLink.length, 1);
            assert.strictEqual(filmLink.props()['to'], '/film/2');
            assert.strictEqual(filmLink.text(), 'test title');
            var species = wrapper.find('.species-item');
            assert.strictEqual(species.length, 1);
            var speciesLink = species.first().find('Link');
            assert.strictEqual(speciesLink.length, 1);
            assert.strictEqual(speciesLink.props()['to'], '/species/13');
            assert.strictEqual(speciesLink.text(), 'test species name');
            var vehicles = wrapper.find('.vehicle-item');
            assert.strictEqual(vehicles.length, 1);
            var vehicleLink = vehicles.first().find('Link');
            assert.strictEqual(vehicleLink.length, 1);
            assert.strictEqual(vehicleLink.props()['to'], '/vehicles/20');
            assert.strictEqual(vehicleLink.text(), 'test vehicle name');
            // todo: test for starships
            var starships = wrapper.find('.starship-item');
            assert.strictEqual(starships.length, 1, 'starship-item count');
            var starshipLink = starships.first().find('Link');
            assert.strictEqual(starshipLink.length, 1, 'starship link count');
            assert.strictEqual(starshipLink.props()['to'], '/starship/23');
            assert.strictEqual(starshipLink.text(), 'test ship name');
            done();
        }, 0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJhY3RlclJvdXRlLnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sMEJBQTBCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxjQUFjLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFFOUMsT0FBTyxxQkFBcUIsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLHVCQUF1QixNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sd0JBQXdCLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFckYsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZCLFVBQVUsQ0FBQztRQUNQLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLFVBQUMsSUFBSTtRQUUxQyxxQkFBcUIsS0FBMEI7WUFDM0MsSUFBTSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFOUMsSUFBTSxJQUFJLEdBQUcs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