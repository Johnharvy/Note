var express = require("express");
var http = require("http");
var app = require("../../app");
var user = require("../DAO/User");
var Tool = require('../common/Tool');

function login(){
    app.all("/login",function(req,rep){
       var  data = Tool.parse([req.query,req.body])
        user.findUserByName(data.userName,data.password,function(err,rs){
             if(err){
                 var msg = {code:"00",message: "登录失败"};
                 rep.send(JSON.stringify(msg));
             }else if(rs[0]){
                 var msg = {code: "01",message:"身份正确！",userName : data.userName};
                 req.session.userName = data.userName;
                 rep.send(JSON.stringify(msg));
             }else{
                 var msg = {code :"02",message:"用户名或者密码有误！",userName : data.userName}
                 rep.send(JSON.stringify(msg));
             }
        });
       
    });

}

//处理注册
function registerAction(){
       app.all("/reg",function(req,rep){
           var  data = Tool.parse([req.query,req.body])
           user.findUserByName(data.userName,data.password,function(err,rs){
               if(rs[0]) {
                   var msg = {code:"02",message:"该用户名已注册！"};
                   rep.send(JSON.stringify(msg));
               }
               else{
                   user.addUser(data.userName,data.password,function(err,rs){
                       if(err){
                           console.log(err,"err");
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


/**
 *   退出
 * 
  */

 function exitAction(){
    app.all("/exit",function(req,rep){
        if(req.session.userName){
            req.session.userName = ""
            var msg = {code:"00",message:"已经退出！"};
            rep.send(JSON.stringify(msg));
        }else{
            var msg = {code:"02",message:"退出异常！"};
            rep.send(JSON.stringify(msg));
            
        }
    
    });
}



module.exports = {
    login:login, //登录
    register:registerAction, //注册
    exitAction : exitAction, //退出
};
