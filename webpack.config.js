const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app/index.js',
        another: './src/app/another-module.js',
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
                test: /\.(gif|png|jpe?g|svg)$/i,
                include: path.resolve(__dirname, 'src/img'),
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            name:  'img/[name].[ext]',
                            context: '',
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
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
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                        // options: {
                        //     bypassOnDebug: true, // webpack@1.x
                        //     disable: true, // webpack@2.x and newer
                        //     name:  'img/[name].[ext]',
                        //     context: ''
                        // },

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
        // new HtmlWebpackPlugin(),
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