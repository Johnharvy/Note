var express = require("express");
var http = require("http");
var app = require("../../app");
var user = require("../DAO/User");

function login(){
    app.post("/login",function(req,rep){
        var data = req.body;
        console.log(data);
        user.findUserByName(data.userName,data.password,function(err,rs){
             if(err){
                 var msg = {code:"00",message:"登录失败！"};
                 rep.send(JSON.stringify(msg));
             }else if(rs[0]){
                 console.log(rs[0]);
                 var msg = {code: "01",message:"身份正确！"};
                 req.session.userName = data.userName;
                 rep.send(JSON.stringify(msg));
             }else{
                 var msg = {code :"02",message:"用户名或者密码有误！"}
                 rep.send(JSON.stringify(msg));
             }
        });

    });

}

function registerAction(){
       app.post("/reg",function(req,rep){
           var data = req.body;
           console.log(data);
           user.findUserByName(data.userName,data.password,function(err,rs){
               if(rs[0]) {
                   var msg = {code:"02",message:"该用户名已注册！"};
                   rep.send(JSON.stringify(msg));
               }
               else{
                   user.addUser(data.userName,data.password,function(err,rs){
                       if(err){
                           var msg = {code:"00",message:"注册失败！"};
                           rep.send(JSON.stringify(msg));
                       }
                       else{
                           var msg = {code:"01",message:"注册成功！"}
                           rep.send(JSON.stringify(msg));
                       }
                   });
               }
           });

       });
}

module.exports = {
    login:login, //登录
    register:registerAction, //注册
};
