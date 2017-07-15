var mqlConnect = require("../common/database").mqlConnect;


//增
function addUser(userName,password,callback){
    var sqlStr = "insert into User(userName,password) values (?,?);";
    mqlConnect.query(sqlStr,[userName,password], function (err,result) {
        callback(err,result);
    });
}
//删
function deleteUser(userName,callback){
    var sqlStr = "delete from User where userName = ?;";
    mqlConnect.query(sqlStr,[userName], function (err,result) {
        callback(err,result);

    });
}
//改
function updateUser(userName,newPassword,callback){
    var sqlStr = "update  User set password = ?  where userName = ? and password = ?;";
    mqlConnect.query(sqlStr,[newPassword,userName,password], function (err,result) {
        callback(err,result);

    });
}

//查找
function findUserByName(userName,password,callback){
    var sqlStr = "select * from User  where userName = ? and password = ?";
    mqlConnect.query(sqlStr,[userName,password], function (err,result) {
        callback(err,result);
    });
}


module.exports = {
    addUser:addUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    findUserByName:findUserByName
};
