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
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import SpeciesRoute from './SpeciesRoute';
describe('SpeciesRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    it('displays species information', function (done) {
        function renderRoute(props) {
            return (React.createElement(SpeciesRoute, __assign({}, props)));
        }
        var wrapper = mount(React.createElement(MemoryRouter, { initialEntries: ['planet/1'], initialIndex: 0 },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: 'planet/:id', render: function (props) { return renderRoute(props); } }))));
        setTimeout(function () {
            wrapper.update();
            assert.strictEqual(document.title, 'Species Info | API Explorer');
            var speciesName = wrapper.find('h2');
            assert.strictEqual(speciesName.text(), 'test species name');
            var classification = wrapper.find('.classification');
            assert.strictEqual(classification.text(), 'test classification');
            var designation = wrapper.find('.designation');
            assert.strictEqual(designation.text(), 'test designation');
            var averageHeight = wrapper.find('.average-height');
            assert.strictEqual(averageHeight.text(), '100 cm');
            var skinColors = wrapper.find('.skin-colors');
            assert.strictEqual(skinColors, 'test skin colors');
            var hairColors = wrapper.find('.hair-colors');
            assert.strictEqual(hairColors, 'test hair colors');
            var eyeColors = wrapper.find('.eye-colors');
            assert.strictEqual(eyeColors, 'test eye colors');
            assert.fail('not implemented');
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2llc1JvdXRlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGVjaWVzUm91dGUudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzRCxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLFVBQVUsQ0FBQztRQUNQLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLFVBQUMsSUFBSTtRQUVwQyxxQkFBcUIsS0FBd0I7WUFFekMsT0FBTyxDQUFDLG9CQUFDLFlBQVksZUFBSyxLQUFLLEVBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQ2pCLG9CQUFDLFlBQVksSUFBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQztZQUN2RCxvQkFBQyxNQUFNO2dCQUNILG9CQUFDLEtBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEdBQUksQ0FDckUsQ0FDRSxDQUNsQixDQUFDO1FBRUYsVUFBVSxDQUFDO1lBQ1AsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1lBRWxFLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUU1RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUVqRSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFM0QsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRW5ELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVuRCxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFbkQsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9