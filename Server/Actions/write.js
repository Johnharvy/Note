var express=require("express");
var app = require("../../app");
var http = require("http");
var crypto = require("crypto"); //生成秘钥的模块
var text = require("../DAO/Text"); 
var Tool = require('../common/Tool');

function writeAction() {  //写入记事
    app.all("/write", function (req, rep){
       /* if(!req.session.userName)  {rep.send(JSON.stringify({code : "06", msg : "登录超时"})); return;} */

       var  data = Tool.parse([req.query,req.body,req.session])
       var userName = decodeURIComponent(data.userName || "")
       data.userName = userName;
       
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
    app.all("/init", function (req, rep){
        /* if(!req.session.userName) { rep.send(JSON.stringify({code : "06", msg : "登录超时"})); return;} */
        var  data = Tool.parse([req.query,req.body,req.session])
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

//删除文章 
function deleteText(){
    app.all("/delete",function (req, rep){
           if(!req.session.userName)  {rep.send(JSON.stringify({code : "06", msg : "登录超时"})); return;}
           var  data = Tool.parse([req.query,req.body])

           text.deleteText(req.session.userName,data.id,function (err,rs){
                if (err){
                     var msg = {code : "00", message: "操作出错！"};
                     rep.send(JSON.stringify(msg));
                } else {
                     var msg = {code : "01",message: "删除成功"};
                     rep.send(JSON.stringify(msg));
                }
           });
         
    });
}


module.exports = {
    write:writeAction, //写入文章
    init:init, //初始化填充文章内容
    deleteText : deleteText  //删除文章 
};