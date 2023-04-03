const path = require('path');
module.exports = {
     mode: 'development',
     entry: './src/index.js',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'main.js'
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['@babel/preset-env'],
               plugins: [
                 ['@babel/plugin-proposal-class-properties', { loose: true }],
                 '@babel/plugin-transform-runtime'
               ]
             }
           }
         }
       ]
     },
     devServer: {
       static: path.join(__dirname, 'dist'),
       port: 9000
     }
   };