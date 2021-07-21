const path = require('path');
const webpack = require('webpack');

module.exports = {
   entry: './src/client/index.js',
   module: {
      rules: [
         {
            test: '/\.js$/',
            exclude: /node_modules/,
            use: [ "babel-loader", 'eslint-loader'],
         },
         {
            test: /\.json$/,
            loader: 'json-loader'
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
         },
      ]
   }
}