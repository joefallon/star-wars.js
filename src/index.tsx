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

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
