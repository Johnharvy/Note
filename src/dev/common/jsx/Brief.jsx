var React = require("react");
var $ = require("jquery");

  //简略单条
var Brief = React.createClass({
    clickHandle : function(e){
        window.location.href = "./write.html" + "?" + "id=" + this.props.word.id;
    },
    render:function(){
    return (
        <div className="list_single" onClick = {this.clickHandle}>
            <div className="list_content"><nobr>{this.props.word.cont}</nobr></div>
            <div className="list_date">{this.props.word.day}</div>
        </div>
     );
   }
   });

  //简略列表
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
                           <div>
                               <Briefs key={id} words1 = {item.words} month1 = {item.month}> </Briefs>
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
