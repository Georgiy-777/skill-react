const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

function setupDevtool(){
    if(IS_PROD){
        return false
    }
    if(IS_DEV){
        return  'eval';
    }

}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/Index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: "client.js"
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    devtool: setupDevtool(),
    // plugins: [
    //     new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
    //
    // ],
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: IS_DEV,
    // }
}