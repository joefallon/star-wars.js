import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import { FilmEntity } from '../../entities/FilmEntity';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { IndexModel } from '../../models/IndexModel';
import IndexRoute from './IndexRoute';
import { IndexRouteProps } from './IndexRouteProps';


describe('IndexRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays the list of films', (done) => {

        function renderRoute(props: IndexRouteProps) {
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
            film.setTitle('title');
            film.setUrl('url');
            film.setVehicleUrls(['vehicle1']);

            const films: FilmEntity[] = [ film ];

            var retrieveAllFilmsStub = sinon.stub();
            retrieveAllFilmsStub.returns(films);

            const gateways = GatewaysTestFactory.create();
            gateways.filmsGateway.retrieveAllFilms = retrieveAllFilmsStub;

            props.model = new IndexModel(gateways);

            return (<IndexRoute {...props}/>);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Switch>
                    <Route exact path='/' render={(props) => renderRoute(props)}/>
                </Switch>
            </MemoryRouter>
        );

        assert.strictEqual(document.title, 'API Explorer | Films');

        setTimeout(() => {
            wrapper.update();

            const row = wrapper.find('IndexRoute').instance().state['tableData'][0];
            assert.strictEqual(row['episodeId'], 1);
            assert.strictEqual(row['title'],     'title');
            assert.strictEqual(row['year'],      2012);
            assert.strictEqual(row['filmUrl'],   'url');

            done();
        }, 0);
    });
});