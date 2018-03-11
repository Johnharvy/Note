var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var baseUrl = "./src/dev/pactions/";

module.exports = {
    //插件项
    plugins: [commonsPlugin,new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
   ],
    //页面入口文件配置
    entry: {
      index : baseUrl + "index.js",
      write : baseUrl + "write.js",
      login : baseUrl + "login.js",
      option : baseUrl + "option.js",
        jsx :[baseUrl + "jsx.js"]
    },

    //入口文件输出配置
    output: {
        path: 'src/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.(hbs|html)$/, loader: "handlebars"}
        ]
    },
   
    //其它解决方案配置
    resolve: {
        root:'G:/baseNode/baseNd/baseNd/views', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};