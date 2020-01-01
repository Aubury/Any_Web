const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    entry: {
        index: './src/app/index.js',
        another: './src/app/another-module.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
                        name: 'img/[name].[ext]',
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
                    attrs: [':data-src']
                  }
                }
              }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Any Web',
            filename: 'index.html',
            template: 'src/html/index.html',
            inject: true,
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        }),
        new HtmlWebpackInlineSourcePlugin(),
      ]
}