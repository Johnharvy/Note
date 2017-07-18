//获取header部分所需信息
function getUrlParams(url){
    var infor = window.location.search, params = {}, query = infor.slice(1);
    query = query.split("&");
    query && query.forEach(function(item){
        params[item.split("=")[0]] = item.split("=")[1];
    });
    return params;
}

//jq-mobile下，根据select的option找到其序列位置，用于渲染更新数据
function  getOptionIndex($select,target){
    var options=$select.find("option"); //一共的个数
    var index;
    var temp=[];
    for(var i=0;i<options.length;i++){
        var str=options.eq(i).val();
        temp.push(str);
    }

    for(var i=1;i<=options.length;i++){
        if(temp[i-1]==target) index=i-1;
    }
    return index;
}

//弹出框设置
function alertNB(str,callback){
    if(callback)
        layer.alert(str,{
            title:"信息提示",
            area:["85%","auto"],

        },function(){callback();});
    else{
        layer.alert(str,{
            title:"信息提示",
            area:["85%","auto"],
        });
    }
}

//表单数据序列化
$.fn.serializeJson = function () {
    var serializeObj = {};
    var array = this.serializeArray();
    var str = this.serialize();
    $(array).each(
        function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [
                        serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
    return serializeObj;
};



//打印弹框信息
function printInfo(Arr){
    var infor = "";
    for(var i = 0;i<Arr.length;i++ ){
        infor = infor + Arr[i].toString() + "<br/>";
    }
    return infor;
}


module.exports={
    getUrlParams:getUrlParams, //获取提交所需的header验证信息
    getOptionIndex:getOptionIndex,
    alertNB:alertNB, //弹框
    printInfo:printInfo,
}

