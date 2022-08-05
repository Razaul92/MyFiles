const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.html',
  output: {
    filename: 'index.html',
    path: path.resolve(__dirname, 'scripts'),
    publicPath: 'scripts/'
  }
};