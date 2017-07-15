var $ = require("jquery");
function postNB(url,data,header,success,error,beforeSend){ //请求地址，数据，headers信息，成功回调，错误提示，数据请求之前的回调
    $.ajax({
        type:"post",
        url:url,
        cache:false,
        data:data,
        headers:header,
        dataType:"json",
        beforeSend:beforeSend,
        success:success,
        error:error,
    });
}

function getNB(url,header,success,error,beforeSend){ //请求地址，数据，headers信息，成功回调，错误提示，数据请求之前的回调
    $.ajax({
        type:"get",
        url:url,
        cache:false,
        headers:header,
        dataType:"json",
        beforeSend:beforeSend,
        success:success,
        error:error,
    });
}


//替换data对象的属性名,arr长度小于obj属性个数时，部分替换，剩余保留，其他全服替换
function replaceProsName(obj,arr){
    var key = [];
    var value = [];
    var newOb = {};
    for (var x in obj){
        key.push(x);
        value.push(obj[x]);
    }
    if(arr.length <= key.length){
        for(var i = 0;i < arr.length;i++){
            newOb[arr[i]] = value[i];
        }
        for(var k = arr.length; k < key.length;k++){
            newOb[key[k]] = value[k];
        }
    }else{
        for(var i = 0;i < key.length;i++){
            newOb[arr[i]] = value[i];
        }
    }
    return newOb;
}

module.exports={
    postNB:postNB,  //ajax post请求
    replaceProsName:replaceProsName, //替换对象属性名
    getNB:getNB,
}