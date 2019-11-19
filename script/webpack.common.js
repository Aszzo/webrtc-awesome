const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板
const resolve = (dir) => path.join(__dirname, '..', dir);
module.exports = {
    entry: {
        index: resolve('./src/index.tsx')
    },
    output:{
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[name].[chunkhash:5].chunk.js',
        path: resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|woff2|eot|woff|mp3|mp4|swf)(\?.*)?$/i,
                loader: 'url-loader', // 小于3k, 转成base64
                options: {
                    limit: 10000,
                    name: 'assets/media/[name].[hash:5].[ext]',
                },
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'], // 确保引用时省略模块扩展名
    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('public/index.html'),
            inject: true
        })
    ]
}