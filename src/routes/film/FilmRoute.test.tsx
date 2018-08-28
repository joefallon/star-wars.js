import * as assert from 'assert';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';

import { FilmRouteProps } from './FilmRouteProps';

describe('FilmRoute', () => {
    beforeEach(() => {
        document.title = '';
    });

    it('displays the film information', async () => {

        function renderRoute(props: FilmRouteProps) {

            return (null);
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/film/1']} initialIndex={0}>
                <Switch>
                    <Route exact path='/film/:episodeId' render={(props) => renderRoute(props)}/>
                </Switch>
            </MemoryRouter>
        );

        assert.fail('not implemented');
    });
});