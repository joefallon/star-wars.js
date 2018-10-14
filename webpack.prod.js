'use strict';
const common  = require('./webpack.base.js');
const merge   = require('webpack-merge');
const path    = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin          = require('uglifyjs-webpack-plugin');

const __API__ = JSON.stringify('https://swapi.co/api/');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].[chunkhash:6].js'
    },

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
        new UglifyJSPlugin({uglifyOptions: {ie8: false}}),
        new webpack.DefinePlugin(NODE_ENV),
        new webpack.DefinePlugin({__API__: __API__})
    ]
});