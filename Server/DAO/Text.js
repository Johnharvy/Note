var mqlConnect = require("../common/database").mqlConnect;


//根据用户名增
function addText(userName,content,callback){
    var sqlStr = "insert into text(userName,content) values (?,?);";
    mqlConnect.query(sqlStr,[userName,content], function (err,result) {
        callback(err,result);
    });
}


//删
function deleteText(userName,id,callback){
    var sqlStr = "delete from text where userName = ? and id = ?;";
    mqlConnect.query(sqlStr,[userName,id], function (err,result) {
        callback(err,result);

    });
}
//改
function updateText(newCont,userName,id,callback){
    var sqlStr = "update  text set content = ?  where userName = ? and id = ?;";
    mqlConnect.query(sqlStr,[newCont,userName,id], function (err,result) {
        callback(err,result);

    });
}

//查找
function findTexts(userName,callback){
    var sqlStr = "select * from text  where userName = ?";
    mqlConnect.query(sqlStr,[userName], function (err,result) {
        callback(err,result);

    });
}

function findTextByName(userName,id,callback){
    var sqlStr = "select * from text  where userName = ? and id = ?";
    mqlConnect.query(sqlStr,[userName,id], function (err,result) {
        callback(err,result);

    });
}

function findTextById(id,callback){
    var sqlStr = "select * from text where id = ?";
    mqlConnect.query(sqlStr,[id],function(err,result){
        callback(err,result);
    });
}

module.exports = {
    addText:addText, //添加文章
    deleteText:deleteText, //删除文章
    updateText:updateText, //更新文章
    findTexts:findTexts, //查找所有的文章
    findTextByName:findTextByName, //根据文章题目名找文章
    findTextById:findTextById, //根据id找文章
};