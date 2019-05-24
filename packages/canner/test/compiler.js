import path from 'path';
import webpack from 'webpack';
import Memoryfs from 'memory-fs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /schema\.js/,
        use: [{
          loader: 'canner-schema-loader',
          options,
        }, {
          loader: 'babel-loader',
        }],
      }],
    },
  });

  compiler.outputFileSystem = new Memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
};
