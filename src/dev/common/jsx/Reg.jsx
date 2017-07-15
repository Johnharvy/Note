var React = require("react");
var $ = require("jquery");

//简略单条
var D1 = React.createClass({
        render:function(){
            return(
        <div>
                <div>{this.props.daynote.cont}</div>
        </div>
);
}
});

var D2 = React.createClass({
    render:function(){
        return (
            <div>
              {this.props.monthnote.map(function(item){
                    return (
                        <D1 daynote={item}/>
                    );
                })}
            </div>
        );
    }
});

module.exports = D2;
