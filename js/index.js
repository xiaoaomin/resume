

$(function(){
	// 选中所有按钮添加点击事件 
	$(".tab .anniu_box .anniu").click(function(){
		// 所有内容隐藏
		$(".tab .content_box ul").hide();
		// num表示点击的按钮是哪个
		var num = $(".tab .anniu_box .anniu").index($(this));
		// 把对应的内容显示出来
		$(".tab .content_box ul").eq(num).show();
		// 把所有的按钮背景色去掉
		$(".tab .anniu_box .anniu").css({
			"background":"rgba(0,0,0,0)",
		})
		// 把对应按钮的背景色添加
		$(this).css({
			"background":"#4EB2D6"
		})
	})

$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器 


})