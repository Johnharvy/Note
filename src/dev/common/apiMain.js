/**
 * Created by zhuxingyu on 17/7/17.
 */
var apiMain = process.env.NODE_ENV === "production" ?
    "http://106.14.123.71:3000" : "";

module.exports ={ 
   apiHost: apiMain
}