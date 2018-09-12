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
import PlanetEntity from '../../entities/PlanetEntity';
import SpeciesEntity from '../../entities/SpeciesEntity';
import StarshipEntity from '../../entities/StarshipEntity';

import { FilmRouteProps } from './FilmRouteProps';

describe('FilmRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays the film information', (done) => {

        function renderRoute(props: FilmRouteProps) {
            const film = new FilmEntity();
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

            const retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);

            const character = new CharacterEntity();
            character.setUrl('char-url/1/');
            character.setName('test char name');
            const retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);

            const planet = new PlanetEntity();
            planet.setUrl('planet-url/1/');
            planet.setName('test planet name');
            const retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);

            const starship = new StarshipEntity();
            starship.setUrl('starship-url/1/');
            starship.setName('test starship name');
            const retrieveStarshipStub = sinon.stub();
            retrieveStarshipStub.returns(starship);

            const vehicle = new VehicleEntity();
            vehicle.setUrl('vehicle-url/1/');
            vehicle.setName('test vehicle name');
            const retrieveVehicleStub = sinon.stub();
            retrieveVehicleStub.returns(vehicle);

            const species = new SpeciesEntity();
            species.setUrl('species-url/1/');
            species.setName('test species name');
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
            assert.strictEqual(releaseDate.text(), '2012-12-12');

            const director = wrapper.find('.director');
            assert.strictEqual(director.text(), 'director');

            const producer = wrapper.find('.producer');
            assert.strictEqual(producer.text(), 'producer');

            const openingCrawl = wrapper.find('.opening-crawl');
            assert.strictEqual(openingCrawl.text(), 'opening crawl');

            const characters = wrapper.find('.characters');
            const firstCharacter = characters.childAt(0);
            assert.strictEqual(firstCharacter.props()['to'], '/character/1');
            assert.strictEqual(firstCharacter.text(), 'test char name');

            const planets = wrapper.find('.planets');
            const firstPlanet = planets.childAt(0);
            assert.strictEqual(firstPlanet.props()['to'], '/planet/1');
            assert.strictEqual(firstPlanet.text(), 'test planet name');

            const starships = wrapper.find('.starships');
            const firstStarship = starships.childAt(0);
            assert.strictEqual(firstStarship.props()['to'], '/starship/1');
            assert.strictEqual(firstStarship.text(), 'test starship name');

            const vehicles = wrapper.find('.vehicles');
            const firstVehicle = vehicles.childAt(0);
            assert.strictEqual(firstVehicle.props()['to'], '/vehicle/1');
            assert.strictEqual(firstVehicle.text(), 'test vehicle name');


            const species = wrapper.find('.species');
            const firstSpecies = species.childAt(0);
            assert.strictEqual(firstSpecies.props()['to'], '/species/1');
            assert.strictEqual(firstSpecies.text(), 'test species name');

            done();
        }, 0);
    });
});