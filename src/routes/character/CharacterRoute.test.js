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
import CharacterEntityTestFactory from '../../entities/CharacterEntityTestFactory';
import FilmEntityTestFactory from '../../entities/FilmEntityTestFactory';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import CharacterModel from '../../models/CharacterModel';
import CharacterRoute from './CharacterRoute';
describe('CharacterRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    it('displays the character information', function (done) {
        function renderRoute(props) {
            var gateways = GatewaysTestFactory.create();
            var char = CharacterEntityTestFactory.create();
            var retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(char);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
            var film = FilmEntityTestFactory.create();
            var retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;
            props.model = new CharacterModel(gateways);
            return (React.createElement(CharacterRoute, __assign({}, props)));
        }
        var wrapper = mount(React.createElement(MemoryRouter, { initialEntries: ['/character/1'], initialIndex: 0 },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: '/character/:id', render: function (props) { return renderRoute(props); } }))));
        setTimeout(function () {
            wrapper.update();
            assert.strictEqual(document.title, 'Character Info | API Explorer');
            assert.strictEqual(wrapper.find('h2').text(), 'test name');
            assert.strictEqual(wrapper.find('.height').text(), '1 cm');
            assert.strictEqual(wrapper.find('.mass').text(), '2 kg');
            assert.strictEqual(wrapper.find('.hair-color').text(), 'green');
            assert.strictEqual(wrapper.find('.skin-color').text(), 'white');
            assert.strictEqual(wrapper.find('.eye-color').text(), 'brown');
            assert.strictEqual(wrapper.find('.birth-year').text(), '1900');
            assert.strictEqual(wrapper.find('.gender').text(), 'male');
            var homeworldLink = wrapper.find('.homeworld').first();
            assert.strictEqual(homeworldLink.props()['to'], '/planet/5');
            assert.strictEqual(homeworldLink.text(), 'Earth');
            assert.fail('not implemented');
            done();
        }, 0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJhY3RlclJvdXRlLnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sMEJBQTBCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxxQkFBcUIsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLGNBQWMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLGNBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDdkIsVUFBVSxDQUFDO1FBQ1AsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsVUFBQyxJQUFJO1FBRTFDLHFCQUFxQixLQUEwQjtZQUMzQyxJQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QyxJQUFNLElBQUksR0FBRywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqRCxJQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLHFC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