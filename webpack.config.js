const webpack = require('webpack');
const path = require('path');
const { argv } = require('yargs');
const cfg = require('./package.json');

function getDeployTime() {
  const updateData = (data) => {
    if (data < 10) {
      return '0' + data;
    }

    return data;
  };

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const mounth = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const version =
    year +
    updateData(mounth) +
    updateData(day) +
    '-' +
    updateData(hours) +
    updateData(minutes) +
    updateData(seconds);

  return version;
}

module.exports = {
  mode: argv.mode || 'development',
  entry: './src/index.ts',
  output: {
    filename: `sdk/js/v1/recognid${argv.mode == 'production' ? '.min' : ''}.js`,
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
            presets: ['@babel/preset-typescript'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.svg/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: { extensions: ['.ts'] },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        appName: JSON.stringify(cfg.name),
        appVersion: JSON.stringify(cfg.version),
        deployTime: JSON.stringify(getDeployTime()),
      },
    }),
  ],
};
