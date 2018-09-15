require('./test_helpers/global_before');
require('./test_helpers/global_after');

const testsContext = require.context(".", true, /\.test$/);
testsContext.keys().forEach(testsContext);
