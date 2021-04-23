const path = require('path');
const outputPath = path.join(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// used for serving static files
const CopyWebpackPlugin = require('copy-webpack-plugin');

// ant primary color change
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './public/ant-theme-vars.less'), 'utf8'),
);

console.log(themeVariables);

module.exports = {
  output: {
    path: outputPath,
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: themeVariables,
              },
            },
          },
        ],
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/**/*',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/file.*', '**/ignored-directory/**'],
          },
        },
      ],
    }),
  ],
};
