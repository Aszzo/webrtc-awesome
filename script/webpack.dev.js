const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [
                'css-hot-loader',
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    }
});