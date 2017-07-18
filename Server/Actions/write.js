var express=require("express");
var app = require("../../app");
var http = require("http");
var crypto = require("crypto"); //生成秘钥的模块
var text = require("../DAO/Text");

function writeAction() {  //写入记事
    app.post("/write", function (req, rep){
        var data = req.body;
        data.userName = req.session.userName;
        console.log(data);
        !data.id  ? text.addText(data.userName,data.content, function (err,rs) {
            if (err) {
                var msg = {code: "00", message: "查询错误！"};
                rep.send(JSON.stringify(msg));
            } else {
                var msg = {code: "01", message: "发表成功"};
                rep.send(JSON.stringify(msg));
            }
        }) : 
        text.updateText(data.content,data.userName,data.id, function (err,rs) {
            if (err) {
                var msg = {code: "00", message: "查询错误！"};
                rep.send(JSON.stringify(msg));
            } else {
                var msg = {code: "01", message: "修改成功"};
                rep.send(JSON.stringify(msg));
            }
        })
    });
}

function init(){
    app.post("/init", function (req, rep){
        var data = req.body;
        text.findTextById(data.id,function (err,rs) {
            if (err) {
                var msg = {code: "00", message: "找不到文章！"};
                rep.send(JSON.stringify(msg));
            } else {
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