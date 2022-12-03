const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')

    },
    plugins: [
        new HtmlWebpackPlugin({

            filename:  'index.html',
            template: './src/index.html'
        })
    ]


}