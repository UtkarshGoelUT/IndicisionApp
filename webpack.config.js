const { NamedModulesPlugin } = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = (env) => ({
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css'
    })],
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public', 'dist')
    },
    devtool: env === 'production' ? 'source-map' : 'cheap-module-eval-source-map'
});