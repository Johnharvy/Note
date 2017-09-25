/**
 *   服务端业务工具方法
 */

 //合并通过url和ajax传过来的参数，方便测试
function parse(arr){
    var _0 = {};
    arr.forEach(function(ob){
        Object.keys(ob).forEach(function(item){
            _0[item] = ob[item]; 
       });
    });
    return _0;
}


module.exports = {
    parse  : parse
}