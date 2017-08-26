var API = require("../common/API");
var pb = require("../common/publicUtil");
var apiHost = require("../common/apiMain");
var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("../common/jsx/Header.jsx"); //头部组件
ReactDOM.render(<Header/>,document.querySelector("#header_hb"));
apiHost = apiHost.apiHost;


var alertNB = pb.alertNB;
var date = new Date();
var lis  = $(".write_date ul li");
lis.eq(0).html((date.getMonth() + 1) + "-" + date.getDate());
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

    //调整时间数据格式
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
    // var userName = "朱星宇";
    // data.userName = userName;
    data.id = pb.getUrlParams(location.search).id;

    //添加文章
    API.postNB(apiHost + "/write",data,null,function(r){
      r.code === "06" &&  (location.href = "./login.html");  
      if(r.code == "01"){
          alertNB(r.message,function(){
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
id? API.postNB(apiHost  + "/init",__a,null,function(r){
    r.code === "06" &&  (location.href = "./login.html");
    if(r.code == "01"){
        $(".write_area").val(r.result[0].content);
    }
   if(r.code == "00"){
        alertNB(r.message);
    }
},function(err){
    alertNB(r.message);
}) : null;

