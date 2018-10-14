'use strict';
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'js/[name].[chunkhash:6].js',
        chunkFilename: 'js/[name].[chunkhash:6].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.worker\.ts$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: false, fallback: false }
                }
            },
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: { name: '[path][name].[chunkhash:6].[ext]' }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' }}, 'css-loader']
            }
        ]
    },
    optimization: {
        // runtimeChunk: 'single',  // creates runtime.js
        runtimeChunk: {
            name: 'manifest'  // places webpack runtime in manifest.js
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'all'   // or 'all' or 'initial'
                },
                common: {
                    name: 'common',
                    chunks: 'all',  // or 'all' or 'initial'
                    minChunks: 2,
                    minSize: 0
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles/[name].[hash:6].css' }),
        new CopyWebpackPlugin([ {from:'static/img',to:'img'} ]),
        new CopyWebpackPlugin([ {from:'static/fonts',to:'fonts'} ]),
        new HtmlWebpackPlugin({ template: './static/index.html' })
    ]
};