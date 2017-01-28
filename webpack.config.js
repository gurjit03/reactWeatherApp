module.exports = {
  entry : './app/app.jsx',
  output : {
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve: {
    root : __dirname,
    alias : {
      Weather : 'app/components/Weather.jsx',
      GetWeatherForm : 'app/components/GetWeatherForm.jsx',
      DisplayWeather : 'app/components/DisplayWeather.jsx',
      Navigation : 'app/components/Nav.jsx',
      Main : 'app/components/Main.jsx',
      About : 'app/components/About.jsx',
      Examples : 'app/components/Examples.jsx',
      OpenWeatherMap : 'app/api/OpenWeatherMap.jsx'
    },
    extensions : ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader : 'babel-loader',
        query : {
          presets: ['react','es2015']
        },
        test : /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
