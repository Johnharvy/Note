/**
 * Created by zhuxingyu on 17/7/17.
 */

// process.env.NODE_ENV = "development";


var apiMain = process.env.NODE_ENV === "production" ?
    "http://ycccz.com" : "";

var apiMain =  "http://ycccz.com";  

module.exports ={ 
   apiHost: apiMain
}