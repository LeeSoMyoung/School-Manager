const path = require('path');
const miniCssExtract = require('mini-css-extract-plugin');

module.exports={
    mode: 'development',
    entry: {
        main:'./src/frontend/static/js/index.js'
    },
    output:{
        path: path.resolve(__dirname,'src','frontend','dist','js'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader',miniCssExtract.loader]
            },
            {
                test:/\.png$/,
                use:['file-loader']
            },{
                test:/\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            }
        ]
    },
    target:['web','es5']
}