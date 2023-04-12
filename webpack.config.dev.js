const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // after the devD installations
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // erase <style> line from public/index.html
const CopyPlugin =require('copy-webpack-plugin'); 
const Dotenv = require('dotenv-webpack'); 
const BundleAnalizerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js', // after install & config css-js optimizers changed 'main.js' for current line to add n show hash
      assetModuleFilename: 'assets/images/[hash][ext][query]' // to add images to dist assets/images file
   },
   mode: 'development',
   devtool: 'source-map',
   resolve: {
      extensions: ['.js'],
      alias: {
         '@utils': path.resolve(__dirname, 'src/utils/'),
         '@templates': path.resolve(__dirname, 'src/templates/'),
         '@styles': path.resolve(__dirname, 'src/styles/'),
         '@images': path.resolve(__dirname, 'src/assets/images/'),
      }
   },
   module: { //after install 4 babel devDependencies & add .babelrc
      rules: [ 
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         { // after install devD css-loader
            test: /\.css|.styl$/i, // add .styl after install stylus-loader devD
            use: [MiniCssExtractPlugin.loader, 
            'css-loader',
            'stylus-loader'
            ],
         },
         {
            test: /\.png|.jpg$/i,
            type: 'asset/resource'
         },
         {
            test: /\.(woff|woff2)$/,
            use: {
               loader: 'url-loader',
               options: {
                  limit: 10000,
                  mimetype: 'application/font-woff',
                  name: '[name].[contenthash].[ext]', // added .[contenthash] to '[name].[ext]' line
                  outputPath: './assets/fonts',
                  publicPath: '../assets/fonts',
                  esModule: false,
               },
            }
         }
      ]
   },
   plugins: [ // after install html-webpack-plugin devDependency
      new HtmlWebpackPlugin({
         inject: true,
         template: './public/index.html',
         filename: './index.html'
      }),
      new MiniCssExtractPlugin( 
         { // value added after install minimizer devD to move the .css to dist/assets
            filename: 'assets/[name].[contenthash].css'
         }
      ), 
      new CopyPlugin({ // after install the devD copy-webpack-plugin
         patterns: [ 
            {
               from: path.resolve(__dirname, 'src', 'assets/images'), // here are files that we want to move
               to: 'assets/images'
            }
         ]
      }),
      new Dotenv(), 
      new BundleAnalizerPlugin(
         {
         analyzerMode:  'static', //to do it just at the build instance
         openAnalyzer:  true, // to show the result inmediatly
         }
      ),
   ],
   // optimization:{} part deleted in dev.js file
   devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      port: 3001,
   },
}