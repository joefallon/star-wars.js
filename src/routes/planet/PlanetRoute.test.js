var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as assert from 'assert';
import * as React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { CharacterEntityTestFactory } from '../../entities/CharacterEntityTestFactory';
import { FilmEntityTestFactory } from '../../entities/FilmEntityTestFactory';
import { GatewaysTestFactory } from '../../gateways/GatewaysTestFactory';
import { PlanetEntityTestFactory } from '../../entities/PlanetEntityTestFactory';
import { PlanetModel } from '../../models/PlanetModel';
import PlanetRoute from './PlanetRoute';
describe('PlanetRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    it('displays planet information', function (done) {
        function renderRoute(props) {
            var gateways = GatewaysTestFactory.create();
            var planet = PlanetEntityTestFactory.create();
            var retrievePlanetStub = sinon.stub();
            retrievePlanetStub.returns(planet);
            gateways.planetsGateway.retrievePlanet = retrievePlanetStub;
            var film = FilmEntityTestFactory.create();
            var retrieveFilmStub = sinon.stub();
            retrieveFilmStub.returns(film);
            gateways.filmsGateway.retrieveFilm = retrieveFilmStub;
            var character = CharacterEntityTestFactory.create();
            var retrieveCharacterStub = sinon.stub();
            retrieveCharacterStub.returns(character);
            gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
            props.model = new PlanetModel(gateways);
            return (React.createElement(PlanetRoute, __assign({}, props)));
        }
        var wrapper = mount(React.createElement(MemoryRouter, { initialEntries: ['planet/1'], initialIndex: 0 },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: 'planet/:id', render: function (props) { return renderRoute(props); } }))));
        setTimeout(function () {
            wrapper.update();
            assert.strictEqual(document.title, 'Planet Info | API Explorer');
            var planetName = wrapper.find('h2');
            assert.strictEqual(planetName.text(), 'test planet name');
            var rotationPeriod = wrapper.find('.rotation-period');
            assert.strictEqual(rotationPeriod.text(), '400 days');
            var orbitalPeriod = wrapper.find('.orbital-period');
            assert.strictEqual(orbitalPeriod.text(), '200 days');
            var diameter = wrapper.find('.diameter');
            assert.strictEqual(diameter.text(), '100 km');
            var climate = wrapper.find('.climate');
            assert.strictEqual(climate.text(), 'test climate');
            var gravity = wrapper.find('.gravity');
            assert.strictEqual(gravity.text(), 'test gravity');
            var surfaceWater = wrapper.find('.surface-water');
            assert.strictEqual(surfaceWater.text(), '500%');
            var population = wrapper.find('.population');
            assert.strictEqual(population.text(), '300');
            var films = wrapper.find('.film-item');
            assert.strictEqual(films.length, 1);
            var filmLink = films.first().find('Link');
            assert.strictEqual(filmLink.length, 1);
            assert.strictEqual(filmLink.props()['to'], '/film/2');
            assert.strictEqual(filmLink.text(), 'test title');
            var residents = wrapper.find('.resident-item');
            assert.strictEqual(residents.length, 1);
            var residentLink = residents.first().find('Link');
            assert.strictEqual(residentLink.length, 1);
            assert.strictEqual(residentLink.props()['to'], '/character/5');
            assert.strictEqual(residentLink.text(), 'test name');
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0Um91dGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBsYW5ldFJvdXRlLnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLFdBQVcsTUFBTSxlQUFlLENBQUM7QUFJeEMsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUNwQixVQUFVLENBQUM7UUFDUCxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLElBQUk7UUFFbkMscUJBQXFCLEtBQXVCO1lBQ3hDLElBQU0sUUFBUSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTlDLElBQU0sTUFBTSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hELElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQztZQUU1RCxJQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QyxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7WUFFdEQsSUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEQsSUFBTSxxQkFBcUIsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MscUJBQXFCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztZQUVyRSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXhDLE9BQU8sQ0FBQyxvQkFBQyxXQUFXLGVBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUNqQixvQkFBQyxZQUFZLElBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUM7WUFDdkQsb0JBQUMsTUFBTTtnQkFDSCxvQkFBQyxLQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixHQUFJLENBQ3JFLENBQ0UsQ0FDbEIsQ0FBQztRQUVGLFVBQVUsQ0FBQztZQUNQLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQUVqRSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFMUQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXRELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVyRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTlDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFFbkQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuRCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFaEQsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUU3QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUVsRCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhDLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXJELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=