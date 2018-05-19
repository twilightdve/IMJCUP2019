const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    contentBase: `${__dirname}/dist`,
    open: true,
    port: 3121
  },
  entry: {
    app: `${__dirname}/src/webpack/app`
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader'
              }
            }
          },
          {
            loader:
              process.env.NODE_ENV === 'production'
                ? 'strip-loader?strip[]=console.log'
                : 'strip-loader?strip[]='
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader:
              process.env.NODE_ENV === 'production'
                ? 'strip-loader?strip[]=console.log'
                : 'strip-loader?strip[]='
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     name: 'vendor',
  //     chunks: 'initial'
  //   }
  // },
  resolve: {
    alias: {
      vue:
        process.env.NODE_ENV === 'production'
          ? 'vue/dist/vue.min.js'
          : 'vue/dist/vue.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [new VueLoaderPlugin()],
  devtool: 'source-map'
};
