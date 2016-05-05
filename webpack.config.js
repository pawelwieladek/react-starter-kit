var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './scripts/main.js'
    ],
    output: {
        path: './public/dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'public/')
    },
    devtool: 'source-map'
};