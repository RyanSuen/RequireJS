/*模块依赖
require.config({
	baseUrl: "js/lib",
	path: {
		"jquery":"jquery-1.9.1.min"
	}
});*/

//["jquery"],$

define(function() {
	//创建对旬
	var shuxuejisuan = function () {
		
		$(window).on("click",function() {    //这个AMD模块我并没有引入jQuery也能使用jQuery，
			console.log("jquery test");
		});

		this.pi = 3.14159265;

		this.add = function(x,y) {
			console.log("myshuxue");
			return x+y;
		};

		this.minus =function(x,y) {
			return x-y;
		};

	};

	return {
		shuxuejisuan: shuxuejisuan
	};
});