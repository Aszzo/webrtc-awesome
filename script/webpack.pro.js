const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    },
    // webpack打包优化
    optimization: {
        minimizer: [new TerserWebpackPlugin({
            terserOptions: {
                output: {
                    comments: false
                }
            }
        })],
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        runtimeChunk: true
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
        })
    ],
    // 如何展示性能提示
    performance: false
});