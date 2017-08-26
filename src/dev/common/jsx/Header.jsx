var React = require("react");

var Header = React.createClass({
     redirect : function(title){
           var rurl;
           title === "首页" ? rurl = "./index.html" : (window.history.back());
           window.location.href = rurl; 
     },
     render:function(){

         return (
            <div id="header">
            <div className = "head_title">  
             <span className = "fir_link" onClick = {this.redirect.bind(this , "首页")}>{"首页"}</span>
             <span className = "title">{document.title}</span>
             <span className = "up_link"  onClick = {this.redirect.bind(this , '返回')}>{document.title != 
                "登陆页" ? "返回" : ""}</span>
            </div>
            </div>
        )
     }
});

module.exports = Header;