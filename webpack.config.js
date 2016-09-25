/**
 * Created by Administrator on 2016/9/12.
 */
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var host = "127.0.0.1"
var port =  "8888";
var path = require('path');
var postcss = function () {      //样式兼容性处理
    return [autoprefixer({browsers: ['last 2 versions']})];
}
module.exports = {
    entry:{
        app:[
            `webpack-dev-server/client?http://${host}:${port}`,
            './index.js'
        ]
    },
    output:{
        path:'./build',
        publicPath:'./build/',
        filename:'[name].js',
        chunkFilename: 'chunk/[id][chunkhash:6].js',
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets: ['es2015']}},
            {test: /\.(jpg|png)$/, loader: "url-loader?limit=8192"},
            {test: /\.less$/, loader: "style!css!postcss!less?sourceMap"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.html$/, loader: "html-loader"},
        ]
    },
    resolve: {
        extensions: [ '.html', '.js', '.less']
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin,
        new webpack.NoErrorsPlugin(),
    ],
    devServer: {
        contentBase: './',
        publicPath:'./build',
        hot:false,
        inline:true,
        host:host,
        port:port,
        noinfo:true
    }
};
