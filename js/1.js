$(function(){
	//点击顶部菜单，变换样式和下方显示内容
	$("ul[id='top'] li a").click(function(){
		$("ul[id='top'] li a").attr("class","noclick");
		$(this).attr("class","isclick");
		if($(this).parent().attr("id")=="qb"){
			$(".lunbo").show();
			$(".type").show();
		}
		if($(this).parent().attr("id")=="rmjj"){
			$(".lunbo").hide();
			$(".ad").hide();
			$(".type").hide();
			$(".rmjj").show();
		}
		if($(this).parent().attr("id")=="yllm"){
			$(".lunbo").hide();
			$(".type").hide();
			$(".yllm").show();
		}
		if($(this).parent().attr("id")=="wyzq"){
			$(".lunbo").hide();
			$(".type").hide();
			$(".wyzq").show();
		}
		if($(this).parent().attr("id")=="zjdj"){
			$(".lunbo").hide();
			$(".type").hide();
			$(".zjdj").show();
		}
		if($(this).parent().attr("id")=="syzq"){
			$(".lunbo").hide();
			$(".type").hide();
			$(".syzq").show();
		}
		if($(this).parent().attr("id")=="tyzq"){
			$(".lunbo").hide();
			$(".type").hide();
			$(".tyzq").show();
		}
	})
	//左侧菜单点击变更样式
	$("ul[id='left'] li a").click(function(){
//		alert($(this).attr("class"));
		if($(this).attr("class")=="isclick1"){
			$(this).next().hide(500);
			$(this).attr("class","noclick1");
			$(this).find("span").css("transform","rotateZ(0deg)");
		}
		else{
			$("ul[id='left'] li a").removeClass().attr("class","noclick1");
			$("ul[id='left'] li a").find("span").css("transform","rotateZ(0)");
			$(this).attr("class","isclick1");
	//		$(this).find(".pic").css("color","lightgreen");
			$(this).find("span").css("transform","rotateZ(-90deg)");
			$(this).parent().siblings().find("div").hide(500);
	        $(this).next().show(500);
		}
		
	})
    //左侧子级菜单变更样式
	$(".menu ul li a").click(function(){
		$(".menu ul li a").removeClass().attr("class","noclick1");
		$(this).attr("class","isclick2");
		$(this).parent().parent().parent().prev().attr("class","isclick1");
		$(this).parent().parent().parent().prev().find("span").css("transform","rotateZ(-90deg)")
	})
	//点击不在关注后，去除该模块
	$(".del").click(function(){
		$(this).parent().parent().remove();
	})
})