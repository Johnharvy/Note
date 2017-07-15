var header = require("../common/templates/header.hbs");
var footer = require("../common/templates/footer.hbs");
var API = require("../common/API");
var pb = require("../common/publicUtil");
var alertNB = pb.alertNB;


$("#header_hb").html(header);
$("#footer_hb").html(footer);
var height = $(window).height();
$("#content").css({"height":(height-120)+"px",});

$(".create_btn").on("click",function(){
    window.location.href="./write.html";
});






