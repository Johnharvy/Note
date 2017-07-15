var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
//上传文件
var flash=require("connect-flash");
var multer=require("multer");

//文件上传的中间件
app.use(multer({
  dest:"../public/images",
  rename:function(fieldName,fileName){return fileName;}
}));
//使用session会话层
app.use(express.cookieParser());
app.use(express.session({secret:"blog",cookie:{maxAge:7200000}}));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname))); //默认根文件绝对地址为访问基地址

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

module.exports = app;



