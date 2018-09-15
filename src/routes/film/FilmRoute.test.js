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
import sinon from 'sinon';
import { MemoryRouter, Route, Switch } from 'react-router';
import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';
import { FilmModel } from '../../models/FilmModel';
import FilmRoute from './FilmRoute';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import VehicleEntity from '../../entities/VehicleEntity';
import { PlanetEntity } from '../../entities/PlanetEntity';
import SpeciesEntity from '../../entities/SpeciesEntity';
import StarshipEntity from '../../entities/StarshipEntity';
describe('FilmRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    it('displays the film information', function (done) {
        function renderRoute(props) {
            var film = new FilmEntity();
            film.setCharacterUrls(['character1']);
            film.setCreated('2012-12-12T12:12:12');
            film.setDirector('director');
            film.setUpdated('2012-12-12T11:11:11');
            film.setEpisodeId(1);
            film.setOpeningCrawl('opening crawl');
            film.setPlanetUrls(['planet1']);
            film.setProducer('producer');
            film.setReleaseDate('2012-12-12');
            film.setSpeciesUrls(['species1']);
            film.setStarshipUrls(['starship1']);
            film.setTitle('test title');
            film.setUrl('url');
            film.setVehicleUrls(['vehicle1']);
            var retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            var character = new CharacterEntity();
            character.setUrl('char-url/1/');
            character.setName('test char name');
            var retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);
            var planet = new PlanetEntity();
            planet.setUrl('planet-url/1/');
            planet.setName('test planet name');
            var retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);
            var starship = new StarshipEntity();
            starship.setUrl('starship-url/1/');
            starship.setName('test starship name');
            var retrieveStarshipStub = sinon.stub();
            retrieveStarshipStub.returns(starship);
            var vehicle = new VehicleEntity();
            vehicle.setUrl('vehicle-url/1/');
            vehicle.setName('test vehicle name');
            var retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);
            var species = new SpeciesEntity();
            species.setUrl('species-url/1/');
            species.setName('test species name');
            var retrieveSpeciesStub = sinon.stub();
            retrieveSpeciesStub.returns(species);
            var gateways = GatewaysTestFactory.create();
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
            gateways.planetsGateway.retrievePlanet = retrievePlanetStub;
            gateways.starshipsGateway.retrieveStarship = retrieveStarshipStub;
            gateways.vehiclesGateway.retrieveVehicle = retrieveVehicleStub;
            gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;
            props.model = new FilmModel(gateways);
            return (React.createElement(FilmRoute, __assign({}, props)));
        }
        var wrapper = mount(React.createElement(MemoryRouter, { initialEntries: ['/film/1'], initialIndex: 0 },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: '/film/:episodeId', render: function (props) { return renderRoute(props); } }))));
        setTimeout(function () {
            wrapper.update();
            var h2 = wrapper.find('h2');
            assert.strictEqual(h2.text(), 'test title');
            var episodeId = wrapper.find('.episode-id');
            assert.strictEqual(episodeId.text(), '1');
            var releaseDate = wrapper.find('.release-date');
            assert.strictEqual(releaseDate.text(), '2012-12-12');
            var director = wrapper.find('.director');
            assert.strictEqual(director.text(), 'director');
            var producer = wrapper.find('.producer');
            assert.strictEqual(producer.text(), 'producer');
            var openingCrawl = wrapper.find('.opening-crawl');
            assert.strictEqual(openingCrawl.text(), 'opening crawl');
            var characters = wrapper.find('.characters');
            var firstCharacter = characters.childAt(0);
            assert.strictEqual(firstCharacter.props()['to'], '/character/1');
            assert.strictEqual(firstCharacter.text(), 'test char name');
            var planets = wrapper.find('.planets');
            var firstPlanet = planets.childAt(0);
            assert.strictEqual(firstPlanet.props()['to'], '/planet/1');
            assert.strictEqual(firstPlanet.text(), 'test planet name');
            var starships = wrapper.find('.starships');
            var firstStarship = starships.childAt(0);
            assert.strictEqual(firstStarship.props()['to'], '/starship/1');
            assert.strictEqual(firstStarship.text(), 'test starship name');
            var vehicles = wrapper.find('.vehicles');
            var firstVehicle = vehicles.childAt(0);
            assert.strictEqual(firstVehicle.props()['to'], '/vehicle/1');
            assert.strictEqual(firstVehicle.text(), 'test vehicle name');
            var species = wrapper.find('.species');
            var firstSpecies = species.childAt(0);
            assert.strictEqual(firstSpecies.props()['to'], '/species/1');
            assert.strictEqual(firstSpecies.text(), 'test species name');
            done();
        }, 0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbVJvdXRlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxtUm91dGUudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sYUFBYSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLGFBQWEsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUkzRCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLFVBQVUsQ0FBQztRQUNQLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFLFVBQUMsSUFBSTtRQUVyQyxxQkFBcUIsS0FBcUI7WUFDdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZ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