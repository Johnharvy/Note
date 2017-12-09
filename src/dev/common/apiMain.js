/**
 * Created by zhuxingyu on 17/7/17.
 */

// process.env.NODE_ENV = "development";


var apiMain = process.env.NODE_ENV === "production" ?
    "http://ycccz.com" : "";

var apiMain =  "http://ycccz.com"; 

apiMain = "106.14.123.71:80";

module.exports ={ 
   apiHost: apiMain
}