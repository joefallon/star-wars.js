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
import FilmEntity from '../../entities/FilmEntity';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5kZXhSb3V0ZS50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxVQUFVLE1BQU0sY0FBYyxDQUFDO0FBSXRDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsVUFBVSxDQUFDO1FBQ1AsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEJBQTRCLEVBQUUsVUFBQyxJQUFJO1FBRWxDLHFCQUFxQixLQUFzQjtZQUN2QyxJQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIs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