var express = require('express');
var http = require('http');
var path = require('path');



var app = express();
//�ϴ��ļ�
// var flash=require("connect-flash");
var multer = require("multer");
var cookieParser = require('cookie-parser')
var session = require("express-session");
// var favicon = require("static-favicon");
var logger = require("morgan");
var methodOverride = require("method-override");
var bodyParser = require('body-parser');
var errorhandler = require("errorhandler");

app.use(session({secret:"Note",cookie:{maxAge:72000000}}));

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
// app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

app.use(express.static(path.join(__dirname))); //Ĭ�ϸ��ļ����Ե�ַΪ���ʻ���ַ

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

module.exports = app;



