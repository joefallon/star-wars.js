'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack              = require('webpack');
const path                 = require('path');

const __API__ = JSON.stringify('https://swapi.co/api/');

module.exports = {
    entry: './src/index_test.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/index.js"
    },

    devtool: 'inline-source-map',

    mode: 'development',

    watchOptions: {
        aggregateTimeout: 250,
        poll: true,
        ignored: [ /node_modules/, "src/**/*.tsx", "src/**/*.ts", "src/**/*.scss", "src/**/*.css" ]
    },

    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: true, fallback: true }
                }
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' }}, 'css-loader']
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "styles/[name].[hash:6].css" }),
        new webpack.DefinePlugin({__API__: __API__}),
        // new webpack.ProvidePlugin({Promise: 'es6-promise'})
    ]
};