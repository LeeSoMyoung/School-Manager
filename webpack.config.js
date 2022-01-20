const path = require('path');

module.exports={
    mode: 'development',
    entry: {
        main:'./src/frontend/static/js/index.js'
    },
    output:{
        path: path.resolve(__dirname,'src','frontend','dist','js'),
        filename: '[name].js'
    }
}