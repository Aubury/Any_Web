const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/app/index.js',
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[chunkhash].js',
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
        runtimeChunk: true
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
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                include: path.resolve(__dirname, 'src/img'),
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            filename:  'img/[name].[chunkhash].[ext]',
                            context: '',
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
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
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Any Web',
            template: path.resolve(__dirname, 'src/html', 'index.html'),
            filename: 'index.html',
            inject: true,
            inlineSource: '.(js|css)$'

        }),
        new HtmlWebpackInlineSourcePlugin(),
        new WebpackMd5Hash()
      ]
}