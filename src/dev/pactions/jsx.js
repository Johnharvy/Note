/*
 *  首页显示
*/
var React = require("react");
var ReactDOM = require("react-dom");
var jsxURL = "../common/jsx/";
var D2 = require("../common/jsx/Reg.jsx");
var Briefs = require("../common/jsx/Brief.jsx");
var API = require("../common/API");
var pb = require("../common/publicUtil");
var struct = require("../plugin/struct");
var apiHost = require("../common/apiMain");
apiHost = apiHost.apiHost;

/*
 //样例数据格式
var data2 = [{words:[{cont:"内容1",day:"1号"},{cont:"内容2",day:"2号"}],month:"1"},
    {words:[{cont:"内容3",day:"3号"},{cont:"内容4",day:"4号"}],month:"2"}
];*/

 //请求index的数据
API.postNB(apiHost + "/index",null,null,function(rs){
    rs.code === "06" && (location.href = "./login.html");
    rs.result  = rs.result ? rs.result : [];
   
    (function(){
        for(var z = 0;z < rs.result.length; z++){
            rs.result[z].date2 =  rs.result[z].date.substr(5,2);
        }
    })();
     var _r = struct.getTeamsBy(rs.result,"date2");
     var mons = {};
     _r.forEach(function(mon){
           mon.length && (mons[mon[0]["date2"]] = mon.length)
     });
 
     localStorage && localStorage.setItem("mons",JSON.stringify(mons));
   
    //得到月份和日期
    function getTime(){
        var _a = {};
       /* var pat1 = /\- + (\d+) + \-/;
        var pat2 = /\- + (\d+) + \- + (\d+)/;*/
        _a.month = this.substr(5,2) +"月";
        _a.day =  this.substr(5,5);
        return _a;
    }

    String.prototype.getTime = getTime;

    var data = [];
    (function(){
        for(var i = 0; i < _r.length; i++){
            data[i] = {};
            data[i].month = _r[i][0].date.getTime().month;
            data[i].words=[];
            (function(){
                for(var j = _r[i].length - 1 ; j >= 0 ; j--){
                       data[i].words.push( {cont: _r[i][j].content, day: _r[i][j].date.getTime().day,id:_r[i][j].id});
                }
            })();
        }
    })();
 
    if(document.getElementById("list")){
        ReactDOM.render(
        <Briefs data={data}/>,
            document.getElementById("list")
    );
    }

},function(err){
     alert("访问出错！")
});






