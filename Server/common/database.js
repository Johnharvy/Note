var mysql=require("mysql");

//创建mysql数据库连接对象
/*var mqlConnect=mysql.createConnection({
    host:"106.14.123.71",
    port:3306,
    database:"note",
    multipleStatement:true, //允许同时执行多条sql语句
    user:"root",
    password:"root",
    charset:"utf8_unicode_ci"

});*/

//换成连接池，避免单个连接之间冲突
var mqlConnect=mysql.createPool({
    host:"106.14.123.71",
    port:3306,
    database:"note",
    multipleStatement:true, //允许同时执行多条sql语句
    user:"root",
    password:"root",
    charset:"utf8_unicode_ci"

});

var query = function(sql,options,callback){
        mqlConnect.getConnection(function(err,conn){
              if(err)   callback(err,null,null);  
              else{
                conn.query(sql,options,function(err,results,fields){  
                //释放连接  
                conn.release();  
                //事件驱动回调  
                callback(err,results,fields); 
                 })
              }
              })
    
 }

module.exports = {
    mqlConnect :{query : query}, //数据库连接对象
};
