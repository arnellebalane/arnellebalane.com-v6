require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const config = require('sapper/config/webpack.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

const alias = {
  svelte: path.resolve('node_modules', 'svelte'),
  '@components': path.resolve('src', 'components'),
  '@lib': path.resolve('src', 'routes', '_lib'),
};
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env': JSON.stringify({
          NODE_ENV: mode,
          BASE_URL: process.env.BASE_URL,
          CLOUDINARY_BASE_URL: process.env.CLOUDINARY_BASE_URL,
        }),
      }),
      new MiniCssExtractPlugin({
        filename: '[hash]/[name].css',
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    },
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              css: false,
              generate: 'ssr',
              dev,
            },
          },
        },
      ],
    },
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode: process.env.NODE_ENV,
  },
};
