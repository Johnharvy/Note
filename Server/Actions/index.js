var express = require("express");
var http = require("http");
var app = require("../../app");
var text = require("../DAO/Text");
var Tool = require('../common/Tool');

function indexAction(){
    app.all("/index",function(req,rep){
        var userName = decodeURIComponent(req.body.userName)
        console.log(userName,'userName')
        if(!userName)  rep.send(JSON.stringify({code : "06", message : "先登录"}));
        
        else text.findTexts(userName,function(err,rs){
            if(err){
                var msg = {code:"00",message:"查询错误！"};
                rep.send(JSON.stringify(msg));
            }else if(rs[0]){
                var msg = {code:"01",message:"查询成功！",result:rs};
                rep.send(JSON.stringify(msg));
            }else{
                var msg = {code:"02",message:"您还没有记录的文章！"};
                rep.send(JSON.stringify(msg));
            }
        });
       
    });
}

module.exports = {
    indexAction :  indexAction
};

