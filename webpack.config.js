const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app/index.js',
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist',
        // port: 7700
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/css'),
                use:[
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, 'src/img'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name:  'img/[name].[ext]',
                        context: ''
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, 'src/fonts'),
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        root: path.resolve(__dirname, 'src'),
                        attrs: ['img:src', 'link:href']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Any Web',
            template: path.resolve(__dirname, 'src/html', 'index.html'),
            filename: 'index.html',
            inject: true,
            inlineSource: '.(js|css)$' // embed all javascript and css inline

        }),
        new HtmlWebpackInlineSourcePlugin(),
        new ExtractTextPlugin("[name].css") //Extract to styles.css file
    ]
}