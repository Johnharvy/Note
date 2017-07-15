var mysql=require("mysql");

//创建mysql数据库连接对象
var mqlConnect=mysql.createConnection({
    host:"106.14.123.71",
    port:3306,
    database:"note",
    multipleStatement:true, //允许同时执行多条sql语句
    user:"root",
    password:"root",
    charset:"utf8_unicode_ci"

});

module.exports = {
    mqlConnect : mqlConnect, //数据库连接对象
};
