//入口模块文件
//引入模块文件 并重命名
requirejs.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"nav": "nav"
	}
})

//调用模块功能
requirejs(["jquery", "nav"], function ($, nav) {
	$("body").css("background", "blue");
	console.log(nav.fnMax(5, 6));
})