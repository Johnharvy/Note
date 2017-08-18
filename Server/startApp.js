var http = require("http");
var app = require("../app");
var fs = require("fs");
var mqlConnect = require("./common/database").mqlConnect;
/*mqlConnect.connect();*/ //连接上数据库

 var baseUrl = "./Actions/"; //接口根目录
        //同步读取文件下的方法
    fs.readdirSync(baseUrl).forEach(function(fdir){
          var Actions = {};
          Actions[fdir] = require(baseUrl + fdir.slice(0,-3));
          Object.keys(Actions[fdir]).forEach(function(item){
                Actions[fdir][item]();
          });
    })

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

