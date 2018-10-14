'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path    = require('path');

const __API__ = JSON.stringify('https://swapi.co/api/');

module.exports = {
    entry: './src/index_test.tsx',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/index.js",
        pathinfo: false
    },

    // devtool: 'inline-source-map', // Original setting. Works, but is slow.

    /* Recommended Development Settings */
    // devtool: 'eval',                         // Error: Script error. (:0)
    // devtool: 'eval-source-map',              // Error: Script error. (:0)
    // devtool: 'cheap-eval-source-map',        // Error: Script error. (:0)
    // devtool: 'cheap-module-eval-source-map', // Error: Script error. (:0)

    /* Special Cases */
    // devtool: 'cheap-source-map',            // Karma cannot find source maps
    // devtool: 'inline-cheap-source-map',     // Error: Script error. (:0)
    // devtool: 'cheap-module-source-map',     // Karma cannot find source maps
    devtool: 'inline-cheap-module-source-map', // This one seems to be working. Use for now.

    mode: 'development',

    watchOptions: {
        aggregateTimeout: 500,
        poll: true,
        ignored: [ /node_modules/, "src/**/*.tsx", "src/**/*.ts", "src/**/*.scss", "src/**/*.css" ]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                    onlyCompileBundledFiles: true
                }
            },
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

            /* Not sure why this would ever be needed. */
            // {
            //     test: /\.(ttf|eot|woff|woff2)$/,
            //     loader: 'file-loader',
            //     options: { name: 'fonts/[name].[ext]' }
            // }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false,
        cacheWithContext: false
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "styles/[name].[hash:6].css" }),
        new webpack.DefinePlugin({__API__: __API__})
    ]
};