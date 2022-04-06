const path = require('path');

module.exports = {
  entry: {
    ipmirror: './index.js',
  },
  output: {
    filename: 'ipmirror.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'IPMirror',
    libraryTarget: 'umd',
  },
};
