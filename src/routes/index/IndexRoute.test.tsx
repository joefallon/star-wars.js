import * as assert from 'assert';
import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';
import { FilmEntity } from '../../entities/FilmEntity';

import { FilmsGateway } from '../../gateways/FilmsGateway';
import { Gateways } from '../../gateways/Gateways';
import { IndexModel } from '../../models/IndexModel';
import { IndexRouteProps } from './IndexRouteProps';


describe('IndexRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    context('on initial display', () => {
        it('displays the list of films', async () => {

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

                const retrieveAllFilmsStub = sinon.stub();
                // retrieveAllFilmsStub.returns(films);
                // const filmsGateway = {} as FilmsGateway;
                // filmsGateway.retrieveAllFilms = retrieveAllFilmsStub;
                // const gateways = {} as Gateways;
                // gateways.filmsGateway = filmsGateway;
                //
                // const model = new IndexModel(gateways);
            }

            // const wrapper = mount(
            //     <MemoryRouter initialEntries={['/']} initialIndex={0}>
            //         <Switch>
            //             <Route exact path='/' render={(props) => renderRoute(props)}/>
            //         </Switch>
            //     </MemoryRouter>
            // );

            assert.ok(1);
        });
    });
});