var React = require("react");
var $ = require("jquery");
var API = require("../API.js");
var apiMain = require("../apiMain.js");
var alertNB = require("../publicUtil").alertNB;
  //简略单条
var Brief = React.createClass({
    clickHandle : function(e){
        window.location.href = "./write.html" + "?" + "id=" + this.props.word.id;
    },
    del : function(id){
            layer.confirm("确定删除这篇日记吗^_^",function(){
             API.postNB(apiMain.apiHost + "/delete",{id : id},null, function(rs){
                    switch(rs.code){
                       case "00" : {alertNB("删除失败！"); break;};
                       case "01" :{alertNB("删除成功！",function(){location.reload()});break;};
                       default : {return;}
                    }
             },function(err){
                alert("请求数据出错!");  
             });});   
    },
    render:function(){
    return (
        <div className="list_single">
              <div className="list_content"  onClick = {this.clickHandle}><nobr>{this.props.word.cont}</nobr></div>
              <div className="list_date">{this.props.word.day} 
              <span onClick = {this.del.bind(this,this.props.word.id)} className="del">删除</span></div>
        </div>
     );
   }
   });

  //文章在首页简略列表
var Briefs = React.createClass({
    render : function(){
    return (
        <div id="list_block">
        <div className="list_time">{this.props.month1}</div>
        <div className="list_line"></div>
        <ul>
            {this.props.words1.map(function(item,id){
                return (
                    <Brief key={id} word={item}/> 
                       );
             })}

        </ul>
    </div>
        );
    }
    });


  var IndexList = React.createClass({
      render : function(){
         return (
             <div>
                 <ul>
                   {/*React.Children.map(this.state.t1,function(item){*/
                       this.props.data.map(function(item,id){
                       return(
                           <div key={id}>
                               <Briefs  words1 = {item.words} month1 = {item.month}> </Briefs>
                           </div>
                        );
                    })
                   }
                 </ul>
             </div>

         );
      }
  });




module.exports=IndexList;
