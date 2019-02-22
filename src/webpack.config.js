const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        './main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: './index.hbs'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    partialDirs: [
                        path.join(__dirname, 'partials'),
                        path.join(__dirname, 'img'),
                    ]
                }
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.html?$/,
                // loader: 'babel-loader',
                exclude: /node_modules/,
                use: [
                    'file-loader',
                    'extract-loader',
                    'html-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 7001,
        overlay: {
            warnings: true,
            errors: true
        },
        historyApiFallback: true,
        // proxy: {
        //   "/api": {
        //     target: "http://localhost:3000",
        //     pathRewrite: {"^/api" : ""}
        //   }
        // }    
    }
};