var API = require("../common/API");
var pb = require("../common/publicUtil");


var alertNB = pb.alertNB;
var date = new Date();
var lis  = $(".write_date ul li");
lis.eq(0).html((date.getMonth() + 1) + "—" + date.getDate());
lis.eq(1).html(date.getHours() + ":" + date.getMinutes());
if(date.getHours() > 11) lis.eq(2).html("下午");
else{lis.eq(2).html("上午");}

$(".write_area").css({
    "height":($(window).height()-110 +"px"),
});

$(".add_btn").on("click",function(){
    $(this).css({
        opacity:0.6,
    });

    var words = $(".write_area").val();
    var data = {};

    function add0(){
        var temp;
        if(this < 10){
            temp ="0" + this;
        }else{
            temp = this;
        }
        return temp;
    }
    Number.prototype.add0 = add0;

    var time = date.getFullYear() + "-" + (date.getMonth() + 1).add0() + "-" + date.getDate().add0() + " " + date.getHours().add0() +":" + date.getMinutes().add0() + ":" +date.getSeconds().add0();
    data.content = words;
    data.time = time;
    var userName = "朱星宇";
    data.userName = userName;
    API.postNB("/write",data,null,function(r){
      if(r.code == "01"){
          alertNB("添加成功！",function(){
              window.location.href = "./index.html";
          });
      }
    },function(err){
        alertNB("添加失败！");
    });
});

var id = window.location.search;
var pat1 = /id+(\=)+\d+/;
var id = id? id.match(pat1)[0].substr(3) : "";
var __a = {};
__a.id = id;

//如果有id传进来则请求对应id的文章内容
id? API.postNB("/init",__a,null,function(r){
    if(r.code == "01"){
        $(".write_area").val(r.result[0].content);
    }
   if(r.code == "00"){
        alertNB(r.message);
    }
},function(err){
    alertNB(r.message);
}) : null;

