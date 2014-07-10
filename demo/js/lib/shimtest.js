require.config({
	paths:  {
		'SubPage1': 'subpage1/subpage1',
		'jquery': 'lib/jquery-1.9.1.min'
	}
});
function bada() {
	console.log('我是bada函数');
	
	//测试点击的时候再加载js文件 
	require(['jquery'], function(jquery) {
		$('#load-js-button').click(function() {
			console.log('click load js');
			require(['notAMD', 'SubPage1'], function(notAMD, SubPage1) {
				not_a_amd_model();

				var sub_page_1 = new SubPage1.Sub_Page_1();
				sub_page_1.say();
			});
		});

	});
	

}

