/*
*建议先在网上看了RequireJS的用法,再看如下的注释
*/

require.config({
	//baseUrl: "js/lib",    //baseUrl是用来配置一个基路径
	paths: {    //paths,其它就是用来为我们要引入的js资源的路径重命名的，方便我们引入（require）的时候传参
		"jquery": "lib/jquery-1.9.1.min",    //如果没有配置基路径，这里的路径是相对于main.js的
		"shuxue": "shuxue",    //PS：不是只有符合AMD的模块才能在这里配置，不符合AMD规范的也可以
		"hahajquery": "hahajquery",
		'md5': 'lib/md5',    //它要依赖jQuery所以我们要在shim中配置
		'SubPage1': 'subpage1/subpage1'
	},
	shim: {
		'md5': {    //和第七行的md5代码对应
			deps:['jquery'],    //设置md5依赖的库
			exports: 'md5'    //设置外部调用名称，说实在我下懂怎么用
		}
		/*,
		'testexpots': {    //PS:不是AMD模块，普通js文件也可以在这里配置依赖关系,例如下一行
			//deps:['jquery']    //只要存在依赖关系都在这里配置
		}*/
	}
	
});


/*require,第一个数组参数传入了什么，就会在require.js就会怎么在html的head标签中添加引入对应js文件的script标签
*上面没有配置路径也可以在这里直接引入，如：‘lib/shimtest’
*那些不是AMD模块的js文件（很多函数，很多变量，而不是一个对象），只要在这里引入了就可以在回调函数中使用
*/
require(["jquery","shuxue","hahajquery",'md5','testexpots','lib/shimtest'],function($, shuxue, hahajquery) {
	$(function() {    //建议上面数组里面写的元素，也写在后面回调味函数，当传入参数
		
		/*
		***PS：一定要去看shimtest.js这个文件**
		*它说明了：
		*1：非AMD模块里面也能使用，依赖管理，可以先require.config();再require([],function() {})
		*2：更重要的是普通函数里面能够嵌套require();
		*3: 就连require()里面  还能再 require();
		*/

		console.log("testasdfahahahahahahsdf");
		var a = new shuxue.shuxuejisuan();
		console.log(a.add(1,2),"asdfasdfasdf",a.pi);
		console.log(a.minus(12,6));
		hahajquery.TestJquery();
		console.log($.md5('sun'));
		haha.aaa();
		haha.bbb();
		ccc();    //根本不是AMD模块，就是一个普通js文件，我在require()第一个参数中引入,在回调函数中引用了就能直接使用使用。
		console.log(ddd);
		bada();



	});
});