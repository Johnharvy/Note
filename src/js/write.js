webpackJsonp([4],[function(t,e,n){var a=n(37),i=n(38),o=i.alertNB,d=new Date,s=$(".write_date ul li");s.eq(0).html(d.getMonth()+1+"—"+d.getDate()),s.eq(1).html(d.getHours()+":"+d.getMinutes()),d.getHours()>11?s.eq(2).html("下午"):s.eq(2).html("上午"),$(".write_area").css({height:$(window).height()-110+"px"}),$(".add_btn").on("click",function(){function t(){var t;return t=this<10?"0"+this:this}$(this).css({opacity:.6});var e=$(".write_area").val(),n={};Number.prototype.add0=t;var i=d.getFullYear()+"-"+(d.getMonth()+1).add0()+"-"+d.getDate().add0()+" "+d.getHours().add0()+":"+d.getMinutes().add0()+":"+d.getSeconds().add0();n.content=e,n.time=i;var r="朱星宇";n.userName=r,a.postNB("/write",n,null,function(t){"01"==t.code&&o("添加成功！",function(){window.location.href="./index.html"})},function(t){o("添加失败！")})});var c=window.location.search,u=/id+(\=)+\d+/,c=c.match(u)[0].substr(3),l={};l.id=c,a.postNB("/init",l,null,function(t){"01"==t.code&&$(".write_area").val(t.result[0].content),"00"==t.code&&o(t.message)},function(t){o(r.message)})}]);