webpackJsonp([3,5],[
/* 0 */
/***/ (function(module, exports) {

	 layui.use('element', function(){
	  var $ = layui.jquery
	  ,element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
	});
	 
	   //设置统计图层
	  var app = echarts.init(document.getElementById("chartMount")),option = {},mons = [0,0,0,0,0,0,0,0,0,0,0,0]; //绑定渲染的dom图层
	  function getMonths(){
	     var m = [];
	      for(var i = 1; i < 13; i++ ){
	         m.push(i + "月")
	      }
	      return m;
	  }
	  
	  if(localStorage && localStorage.mons){
	     var m = JSON.parse(localStorage.mons);

	     for(var i in m){
	        mons[del0(i) - 1] = m[i]
	     }
	  }
	  console.log(mons);

	  option = {
	     title: {
	            text: '笔记统计'
	            },
	             //数据项提示组件
	            tooltip: {
	              trigger : 'axis'
	            },
	            //图例组件
	            legend: {
	                data:[
	                {name:'数量',icon:'rect',textStyle:{color:"#000"}},
	                ]
	            },
	            //横坐标显示
	            xAxis: {
	                data: getMonths(),
	                splitLine :{
	                    show:false
	                }
	            },
	            //纵坐标显示,不设置最小与最大刻度时将自动调整
	            yAxis: {
	                min : 0,
	                max : 10
	            },
	            //对应显示项的数据项
	            series: [{
	                name: '数量',
	                type: 'line',
	                data: mons
	            },
	            {
	                name: '数量',
	                type: 'bar',
	                data: mons
	            }
	            ]
	  }

	  app.setOption(option);

	  function del0(str){
	     str[0] === "0" && (str = str.replace("0",""))
	     return str
	  }

/***/ })
]);