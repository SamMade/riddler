const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "riddler.bundle.js"
    },  
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.template.ejs',
        inject: 'body'
    })],
    module: {
        rules: [  
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [require('postcss-cssnext')()]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }, 
            {
                test: /\.(ico|jpg|png|gif|svg|eot|otf|webp|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0'
    }
};