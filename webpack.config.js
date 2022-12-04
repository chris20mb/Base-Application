const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require("sass-loader");



module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')

    },
    module: {
        rules: [
            {

                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {

                test: /\.css$/i,
                use: [
                    'syle-loader',
                    'css-loader'
                    
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    
                    
                }

            }

        ]

    },
    plugins: [
        new HtmlWebpackPlugin({

            filename:  'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({

            filename:'style.css'

        })
    ],
    mode: 'development'


}