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
import { FilmEntity } from '../../entities/FilmEntity';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { IndexModel } from '../../models/IndexModel';
import IndexRoute from './IndexRoute';
describe('IndexRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    context('on initial display', function () {
        it('displays the list of films', function (done) {
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
                film.setTitle('title');
                film.setUrl('url');
                film.setVehicleUrls(['vehicle1']);
                var films = [film];
                var retrieveAllFilmsStub = sinon.stub();
                retrieveAllFilmsStub.returns(films);
                var gateways = GatewaysTestFactory.create();
                gateways.filmsGateway.retrieveAllFilms = retrieveAllFilmsStub;
                props.model = new IndexModel(gateways);
                return (React.createElement(IndexRoute, __assign({}, props)));
            }
            var wrapper = mount(React.createElement(MemoryRouter, { initialEntries: ['/'], initialIndex: 0 },
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: '/', render: function (props) { return renderRoute(props); } }))));
            assert.strictEqual(document.title, 'API Explorer | Films');
            setTimeout(function () {
                wrapper.update();
                var row = wrapper.find('IndexRoute').instance().state['tableData'][0];
                assert.strictEqual(row['episodeId'], 1);
                assert.strictEqual(row['title'], 'title');
                assert.strictEqual(row['year'], 2012);
                assert.strictEqual(row['filmUrl'], 'url');
                done();
            }, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5kZXhSb3V0ZS50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sVUFBVSxNQUFNLGNBQWMsQ0FBQztBQUl0QyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLFVBQVUsQ0FBQztRQUNQLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLG9CQUFvQixFQUFFO1FBQzFCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxVQUFDLElBQUk7WUFFbEMscUJBQXFCLEtBQXNCO2dCQUN2QyxJQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFD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