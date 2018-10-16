import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import sinon from 'sinon';

import IndexRoute from './IndexRoute';
import { IndexRouteProps } from './IndexRouteProps';
import { IndexModel } from '../../models/IndexModel';

import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { FilmEntity } from '../../entities/FilmEntity';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';

describe('IndexRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays the list of films', (done) => {

        function renderRoute(props: IndexRouteProps) {
            const film = FilmEntityTestFactory.create();
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
            assert.strictEqual(row['title'], 'test title');
            assert.strictEqual(row['year'], 2012);
            assert.strictEqual(row['filmUrl'], 'https://swapi.co/api/films/2/');

            done();
        }, 0);
    });
});