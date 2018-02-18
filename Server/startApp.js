var http = require("http");
var app = require("../app");
var fs =  require('fs')
var https = require('https');


var httpsOptions = {
   key : fs.readFileSync('./214511821350771.key'),
   cert : fs.readFileSync('./214511821350771.pem')
}

var mqlConnect = require("./common/database").mqlConnect;


 var baseUrl = "./Actions/"; //接口根目录
        //同步读取文件下的方法
    fs.readdirSync(baseUrl).forEach(function(fdir){
          var Actions = {};
          Actions[fdir] = require(baseUrl + fdir.slice(0,-3));
          Object.keys(Actions[fdir]).forEach(function(item){
                Actions[fdir][item]();
          });
    })

/* http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
}); */

https.createServer(app).listen(httpsOptions,app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

