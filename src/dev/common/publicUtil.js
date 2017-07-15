//获取header部分所需信息
function getHeaderNB(){
    function getHeader(url){
        var header;
        var versionIndex=url.lastIndexOf("&version");
        var tokenIndex=url.lastIndexOf("&token=");
        var token=url.slice(tokenIndex+7,versionIndex);
        var codeIndex=url.lastIndexOf("code=");
        var code=url.slice(codeIndex+5,tokenIndex);
        header={
            token:token,
            code:code
        };
        return header;
    }

    var infor=window.location.search;
    var header=getHeader(infor);
    return header;
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
    getHeaderNB:getHeaderNB, //获取提交所需的header验证信息
    getOptionIndex:getOptionIndex,
    alertNB:alertNB, //弹框
    printInfo:printInfo,
}

