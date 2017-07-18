var express = require("express");
var http = require("http");
var app = require("../../app");
var text = require("../DAO/Text");

function indexAction(){
    app.get("/index",function(req,rep){
        text.findTexts(req.session.userName,function(err,rs){
            if(err){
                var msg = {code:"00",message:"查询错误！"};
                rep.send(JSON.stringify(msg));
            }else if(rs[0]){
                var msg = {code:"01",message:"查询成功！",result:rs};
                rep.send(JSON.stringify(msg));
            }else{
                var msg = {code:"02",message:"查无数据！"};
                rep.send(JSON.stringify(msg));
            }
        });
    });
}

module.exports = indexAction;

