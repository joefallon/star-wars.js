'use strict';
const webpack                 = require('webpack');
const UglifyJSPlugin          = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge                   = require('webpack-merge');
const common                  = require('./webpack.base.js');

const __API__ = JSON.stringify('https://swapi.co/api/');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(common, {

    mode: 'production',

    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ]
    },

    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin(NODE_ENV),
        new webpack.DefinePlugin({__API__: __API__})
    ]
});