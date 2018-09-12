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
import FilmEntity from '../../entities/FilmEntity';
import { FilmModel } from '../../models/FilmModel';
import FilmRoute from './FilmRoute';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import VehicleEntity from '../../entities/VehicleEntity';
import PlanetEntity from '../../entities/PlanetEntity';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbVJvdXRlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxtUm91dGUudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxZQUFZLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUM7QUFJM0QsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNsQixVQUFVLENBQUM7UUFDUCxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxVQUFDLElBQUk7UUFFckMscUJBQXFCLEtBQXFCO1lBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZ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