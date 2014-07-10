//hahajquery.js

define(function() {
	var TestJquery = function() {
		$(window).on("click",function() {
			console.log("测试jquery成功");
		});
	};

	return {
		TestJquery:TestJquery
	};
});