define(function() {
	(function() {    //创建私有作用域
		Sub_Page_1 = function() {};    //创建一个全局对象，因为我没有加  var
		Sub_Page_1.prototype.say =function() {
			console.log('Hello RyanSuen!');
		};

		Sub_Page_1.prototype.run = function() {
			console.log('I am running!');
		};

	})();

	return {
		Sub_Page_1:Sub_Page_1
	};
});