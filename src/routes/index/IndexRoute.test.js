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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5kZXhSb3V0ZS50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sVUFBVSxNQUFNLGNBQWMsQ0FBQztBQUl0QyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLFVBQVUsQ0FBQztRQUNQLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFLFVBQUMsSUFBSTtRQUVsQyxxQkFBcUIsS0FBc0I7WUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxD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