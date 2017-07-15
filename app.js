var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
//�ϴ��ļ�
var flash=require("connect-flash");
var multer=require("multer");

//�ļ��ϴ����м��
app.use(multer({
  dest:"../public/images",
  rename:function(fieldName,fileName){return fileName;}
}));
//ʹ��session�Ự��
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

app.use(express.static(path.join(__dirname))); //Ĭ�ϸ��ļ����Ե�ַΪ���ʻ���ַ

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

module.exports = app;



