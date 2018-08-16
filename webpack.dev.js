'use strict';
const webpack = require('webpack');
const common  = require('./webpack.base.js');
const merge   = require('webpack-merge');
const path    = require('path');

const __API__ = JSON.stringify('https://swapi.co/api/');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].[chunkhash:6].js'
    },

    devtool: 'inline-source-map',

    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: false,
        inline: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },

    watchOptions: {
        aggregateTimeout: 250,
        poll: false,
        ignored: [ /node_modules/,  'src/**/*.tsx', 'src/**/*.ts', 'src/**/*.test.*',
                   'src/**/*.scss', 'src/**/*.css' ]
    },

    plugins: [
        new webpack.DefinePlugin({__API__: __API__})
    ]
});