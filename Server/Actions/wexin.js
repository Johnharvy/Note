var express = require("express");
var http = require("http");
var app = require("../../app");
var url = require("url");
var crypto = require("crypto");
var request = require('request')
var  grant_type = 'client_credential'
var  appid = 'wx1a30593cc918dafb'
var  secret = '505a24a69c3276b77c216d2545ed2990'


   //验证微信接口
function examWxAction(){
    app.all("/wxJssdk",function(req,res){
        var query = url.parse(req.url,true).query;
        var signature = query.signature;
        var echostr = query.echostr;
        var timestamp = query['timestamp'];
        var nonce = query.nonce;
        var oriArray = new Array();

        oriArray[0] = nonce;
        oriArray[1] = timestamp;
        oriArray[2] = "Johnharvy";//这里是你在微信开发者中心页面里填的token，而不是****

        oriArray.sort();
        var original = oriArray.join('');
        var scyptoString = sha1(original);

        if(signature == scyptoString){
          res.end(echostr);
          console.log("Confirm and send echo back");
        }else {
          res.end("false");
          console.log("Failed!");
        }     
    });
}

//对字符串进行加密
function sha1(str){
    var md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
  }

//获取票据
function getTicket(){
    app.all('/getJssdk',function(req,res){
          
         //获取token
        request('https://api.weixin.qq.com/cgi-bin/token?grant_type=' + grant_type + '&appid=' + appid + '&secret=' + secret, function(err, response, body) {
        var access_token = JSON.parse(body).access_token
      
         //获取票据
        request('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + access_token + '&type=jsapi', function(err, response, body){
        var jsapi_ticket = JSON.parse(body).ticket
       
      
        var  nonce_str = 'abcdef'  // 密钥，字符串任意，可以随机生成
        var  timestamp = new Date().getTime() // 时间戳
        var  url = req.body.url  // 使用接口的url链接，不包含#后的内容
       
        // 将请求以上字符串，先按字典排序，再以'&'拼接，如下：其中j > n > t > u，此处直接手动排序
        var  str = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonce_str + '&timestamp=' + timestamp + '&url=' + url
      
        // 用sha1加密
        var  signature = sha1(str)
      
         //发送给前端
        res.send({
            appId: appid,
            timestamp: timestamp,
            nonceStr: nonce_str,
            signature: signature,
            view : {
                 jsapi_ticket : jsapi_ticket,
                 noncestr : nonce_str,
                 timestamp : timestamp ,
                 url  : url
              }
           })

          })
      })
    });
   
}
module.exports = {
    examWxAction :  examWxAction,
    getTicket  :  getTicket
};