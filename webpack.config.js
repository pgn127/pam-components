var path = require('path');
module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test    : /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: [
          // strip.loader('console.log'),
          {
            loader: 'babel-loader',
            options: {
              // cacheDirectory: true,
              // presets: ['@babel/preset-env', '@babel/react']
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.png', '.jpg', '.ico', '.svg'],
    // modules: [
    //   `${path.resolve(__dirname, './')}/node_modules`, `${path.resolve(__dirname, './')}/node_modules/material-ui/node_modules`, `${path.resolve(__dirname, './')}/node_modules/react-addons-css-transition-group/node_modules`,
    // ],
  // alias: aliases,
  // alias: aliases, todo
  },
  externals: {
    // 'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};
