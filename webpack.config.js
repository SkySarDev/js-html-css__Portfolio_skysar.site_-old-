const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const fileName = ext => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);
const optimization = () => {
    const configObj = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (isProd) {
        configObj.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
    }

    return configObj;
};

const plugins = () => {
    const basePlugins = [
        new MiniCssExtractPlugin({
            filename: `./css/${fileName('css')}`,
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, './dist/assets'),
                },
            ],
        }),
    ];

    if (isProd) {
        basePlugins.push(
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            })
        );
    }

    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    target: isDev ? 'web' : 'browserslist',
    mode: 'development',
    entry: path.resolve(__dirname, './src/js/main.js'),
    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: `./js/${fileName('js')}`,
        assetModuleFilename: './img/[name][ext][query]',
    },
    optimization: optimization(),
    plugins: plugins(),
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]',
                },
            },
            {
                test: /\.(?:ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: [
                  'svg-sprite-loader',
                  'svgo-loader'
                ]
            },
            {
                test: /\.(?:gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './img/ico/[name][ext]',
                },
            },
        ],
    },
    devServer: {
        port: 7777,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        compress: true,
        open: false,
    },
};
