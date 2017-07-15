var http = require("http");
var app = require("../app");
var mqlConnect = require("./common/database").mqlConnect;
mqlConnect.connect(); //连接上数据库

var baseUrl = "./Actions/";
var indexAction = require(baseUrl + "index");
var writeAction = require(baseUrl + "write");
var loginAction = require(baseUrl + "login");

//Server
//访问首页接口
indexAction();

//登录，注册
loginAction.login();
loginAction.register();

//添加文章
writeAction.write();
writeAction.init();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

