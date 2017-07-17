var express=require("express");
var app = require("../../app");
var http = require("http");
var crypto = require("crypto"); //生成秘钥的模块
var text = require("../DAO/Text");

function writeAction() {  //写入记事
    app.post("/write", function (req, rep){
        var data = req.body;
        console.log(req.session.userName,"88");
        data.userName = req.session.userName;
        text.addText(data.userName,data.content, function (err,rs) {
            if (err) {
                console.log(err,"write");
                var msg = {code: "00", message: "查询错误！"};
                rep.send(JSON.stringify(msg));
            } else {
                var msg = {code: "01", message: "成功"};
                rep.send(JSON.stringify(msg));
            }
        });
    });
}

function init(){
    app.post("/init", function (req, rep){
        var data = req.body;
        console.log(data);
        text.findTextById(data.id,function (err,rs) {
            if (err) {
                var msg = {code: "00", message: "找不到文章！"};
                rep.send(JSON.stringify(msg));
            } else {
                console.log("123");
                console.log(rs);
                var msg = {code: "01", message: "找到了文章！",result:rs};
                rep.send(JSON.stringify(msg));
            }
        });
    });
}
module.exports = {
    write:writeAction, //写入文章
    init:init, //初始化填充文章内容
};