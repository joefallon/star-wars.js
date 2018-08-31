// require('@babel/polyfill');
require("core-js/es6");
require("core-js/fn/array/includes");
require("core-js/fn/string/pad-start");
require("core-js/fn/string/pad-end");
require("core-js/fn/symbol/async-iterator");
require("core-js/fn/object/get-own-property-descriptors");
require("core-js/fn/object/values");
require("core-js/fn/object/entries");
require("core-js/fn/promise/finally");
require("core-js/web");
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
ReactDOM.render(React.createElement(BrowserRouter, null,
    React.createElement(App, null)), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM1QyxPQUFPLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQUMxRCxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUN0QyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFdkIsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFNUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxhQUFhO0lBQUMsb0JBQUMsR0FBRyxPQUFFLENBQWdCLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIn0=