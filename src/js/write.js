webpackJsonp([4],{0:function(t,e,a){var n=a(34),i=a(35),o=a(26);o=o.apiHost;var s=i.alertNB,d=new Date,c=$(".write_date ul li");c.eq(0).html(d.getMonth()+1+"—"+d.getDate()),c.eq(1).html(d.getHours()+":"+d.getMinutes()),d.getHours()>11?c.eq(2).html("下午"):c.eq(2).html("上午"),$(".write_area").css({height:$(window).height()-110+"px"}),$(".add_btn").on("click",function(){function t(){var t;return t=this<10?"0"+this:this}$(this).css({opacity:.6});var e=$(".write_area").val(),a={};Number.prototype.add0=t;var r=d.getFullYear()+"-"+(d.getMonth()+1).add0()+"-"+d.getDate().add0()+" "+d.getHours().add0()+":"+d.getMinutes().add0()+":"+d.getSeconds().add0();a.content=e,a.time=r,a.id=i.getUrlParams(location.search).id,n.postNB(o+"/write",a,null,function(t){"01"==t.code&&s(t.message,function(){window.location.href="./index.html"})},function(t){s("添加失败！")})});var l=window.location.search,u=/id+(\=)+\d+/,l=l?l.match(u)[0].substr(3):"",h={};h.id=l,l?n.postNB(o+"/init",h,null,function(t){"01"==t.code&&$(".write_area").val(t.result[0].content),"00"==t.code&&s(t.message)},function(t){s(r.message)}):null},26:function(t,e,a){var n="http://106.14.123.71:3000";t.exports={apiHost:n}}});