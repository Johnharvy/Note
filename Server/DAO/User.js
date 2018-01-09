var mqlConnect = require("../common/database").mqlConnect;



/**
 * 增加用户
 * @param {String} userName 
 * @param {String} password 
 * @param {Func} callback 
 */
function addUser(userName,password,callback){
    var sqlStr = "insert into user(userName,password) values (?,?);";
    mqlConnect.query(sqlStr,[userName,password], function (err,result) {
        callback(err,result);
    });
}


/**
 *  删除用户
 * @param {String} userName 
 * @param {Func} callback 
 */

function deleteUser(userName,callback){
    var sqlStr = "delete from user where userName = ?;";
    mqlConnect.query(sqlStr,[userName], function (err,result) {
        callback(err,result);
});
}



/**
 *  更新用户
 * @param {String} userName 
 * @param {String} newPassword 
 * @param {Func} callback 
 */
function updateUser(userName,newPassword,callback){
    var sqlStr = "update  user set password = ?  where userName = ? and password = ?;";
    mqlConnect.query(sqlStr,[newPassword,userName,password], function (err,result) {
        callback(err,result);

    });
}


/**
 *  查找用户
 * @param {String} userName 
 * @param {String} password 
 * @param {Func} callback 
 */

function findUserByName(userName,password,callback){
    var sqlStr = "select * from user  where userName = ? and password = ?";
    mqlConnect.query(sqlStr,[userName,password], function (err,result) {
        callback(err,result);
    });
}


export default {
    addUser:addUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    findUserByName:findUserByName
};
