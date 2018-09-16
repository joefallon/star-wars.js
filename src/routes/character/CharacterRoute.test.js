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
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { CharacterModel } from '../../models/CharacterModel';
import CharacterRoute from './CharacterRoute';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { PlanetEntityTestFactory } from '../../entities/PlanetEntityTestFactory';
import { SpeciesEntityTestFactory } from '../../entities/SpeciesEntityTestFactory';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJhY3RlclJvdXRlLnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLGNBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVyRixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDdkIsVUFBVSxDQUFDO1FBQ1AsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsVUFBQyxJQUFJO1FBRTFDLHFCQUFxQixLQUEwQjtZQUMzQyxJQUFNLFFBQVEsR0FB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