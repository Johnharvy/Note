var API = require("../common/API");
var pb = require("../common/publicUtil");
var header = require("../common/templates/header.hbs");
var apiHost = "http://106.14.123.71";

var alertNB = pb.alertNB;
$("#header").html(header);
//注册表单提交动作
    $("#reg_form").validate({
        debug : true,
        errorElement : "em",
        errorPlacement : function(err,ele){
            err.appendTo(ele.parent());
        },
        success : function(ele){
            ele.parent("span").siblings("input").addClass("success");
        },
        rules : {
            userName : {required : true},
            password : {required  : true}
        },
        messages : {
            userName : {required : "用户名不能为空！"},
            password : {required : "密码不能为空！"}
        },
        submitHandler : function(form){
            var data =  $("#reg_form").serializeJson();
            console.log(data);
            API.postNB(apiHost + "/reg",data,null,function(rs) {
                if (rs.code == "01") {
                    alertNB("注册成功！",function(){
                        window.location.href = "./login.html";
                    });
                } else if(rs.code == "02"){
                    alertNB("该用户已注册！");
                }else{
                    alertNB("注册失败！");
                }
            }, function (err) {
                    alertNB("提交数据出错！");
            });
        }
    });

  //登录表单提交
  $("#login_form").validate({
      debug : true,
      errorElement : "em",
      errorPlacement : function(err,ele){
          err.appendTo(ele.parent());
      },
      success : function(ele){
          ele.parent("span").siblings("input").addClass("success");
      },
      rules : {
          userName : {required : true},
          password : {required  : true}
      },
      messages : {
          userName : {required : "用户名不能为空！"},
          password : {required : "密码不能为空！"}
      },
      submitHandler : function(form){
          var data =  $("#login_form").serializeJson();
          API.postNB(apiHost + "/login",data,null,function(rs){
               if(rs.code == "00"){
                alertNB(rs.message);
               }else if(rs.code == "02"){
                alertNB(rs.message);
               }else if(rs.code == "01"){
                alertNB(rs.message);
                   window.location.href="./index.html";
               }
          },function(err){
                alertNB("请求出错！");
          });
      }
  });



