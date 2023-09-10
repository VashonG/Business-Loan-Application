const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles SASS to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML template
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Extracted CSS filename
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000, // Port for development server
    open: true, // Automatically open the browser
  },
};
