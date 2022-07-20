/*인터파크 추천*/

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "말의 알고리즘" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .cover > span > .imgWrap").eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .starWrap").eq(0).next().append("<strong>"+msg.documents[0].title+"</strong>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .textWrap").eq(0).append("<p>"+msg.documents[0].contents+"</p>");

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "마이 스트레인지 보이" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );


	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .cover > span > .imgWrap").eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .starWrap").eq(1).next().append("<strong>"+msg.documents[0].title+"</strong>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .textWrap").eq(1).append("<p>"+msg.documents[0].contents+"</p>");

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "내가 된다는 것" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );


	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .cover > span > .imgWrap").eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .starWrap").eq(2).next().append("<strong>"+msg.documents[0].title+"</strong>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .textWrap").eq(2).append("<p>"+msg.documents[0].contents+"</p>");

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "표범이 말했다" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );


	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .cover > span > .imgWrap").eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .starWrap").eq(3).next().append("<strong>"+msg.documents[0].title+"</strong>");

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li > a > .text > .textWrap").eq(3).append("<p>"+msg.documents[0].contents+"</p>");

});

$(function(){


	function prev(){	 
		$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li:last").prependTo(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul");
		$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul").css({"margin-left":"-457px"});
		$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul").stop().animate({"margin-left":"0"});
	}

	function next(){
		$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul").stop().animate({"margin-left":"-457px"}, function(){
			$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li:first").appendTo(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul");
			$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul").css({"margin-left":"0"});
		});
	}

	function slide(){
		$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul").stop().animate({"margin-left":"-457px"}, function(){
			$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul > li:first").appendTo(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul");
			$(".recommend_sliderWrap > .slideArea > .boxWrap > .box > ul").css({"margin-left":"0"});
		});
	}

	setInterval(slide,4000);


	$(".recommend_sliderWrap > .slideArea > .boxWrap > .sideBtn > .prev").click(function(){
		prev();
	});

	$(".recommend_sliderWrap > .slideArea > .boxWrap > .sideBtn > .next").click(function(){
		next();
	});


});




/*미디어 추천*/	

$(function(){

	function prev(){
		$(".media_pick_wrap > .view > ul > li:last").prependTo(".media_pick_wrap > .view > ul");
		$(".media_pick_wrap > .view > ul").css({"margin-left":"-363px"});
		$(".media_pick_wrap > .view > ul").stop().animate({"margin-left":"0"});
	}

	function next(){
		$(".media_pick_wrap > .view > ul").stop().animate({"margin-left":"-363px"}, function(){
			$(".media_pick_wrap > .view > ul > li:first").appendTo(".media_pick_wrap > .view > ul");
			$(".media_pick_wrap > .view > ul").css({"margin-left":"0"});
		});
	}

	function slide(){
		$(".media_pick_wrap > .view > ul").stop().animate({"margin-left":"-363px"}, function(){
			$(".media_pick_wrap > .view > ul > li:first").appendTo(".media_pick_wrap > .view > ul");
			$(".media_pick_wrap > .view > ul").css({"margin-left":"0"});
		});

	}


	setInterval(slide,3000);

	$(".media_pick_wrap > .control > .sideBtn > .prev").click(function(){
		prev();
	});

	$(".media_pick_wrap > .control > .sideBtn > .next").click(function(){
		next();
	});


});






/*이책 어떄*/

$(function(){
	$(".pick_control > .dotsWrap > .dots > .link_a").css({"background-position": "0 -18px"});

	$(".pick_control > .dotsWrap > .dots > .link_b, .pick_control > .sideBtn > .next").click(function(){
		$(".pick_control > .dotsWrap > .dots > .link_a").css({"background-position": ""});
		$(".pick_control > .dotsWrap > .dots > .link_b").css({"background-position": "0 -18px"});
		$(".pickWrap > .imgWrap > ul > li").eq(0).hide();
		$(".pickWrap > .imgWrap > ul > li").eq(1).show();
	});

	$(".pick_control > .dotsWrap > .dots > .link_a, .pick_control > .sideBtn > .prev").click(function(){
		$(".pick_control > .dotsWrap > .dots > .link_b").css({"background-position": ""});
		$(".pick_control > .dotsWrap > .dots > .link_a").css({"background-position": "0 -18px"});
		$(".pickWrap > .imgWrap > ul > li").eq(1).hide();
		$(".pickWrap > .imgWrap > ul > li").eq(0).show();
	});
});



/*분야별 추천*/

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "문학" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( liter ) {
	console.log( liter );

	var literBox = document.getElementsByClassName('liter');

	for (var i = 0; i < literBox.length; i++) {
		$(".liter > a > .bookCover > .imgWrap > .img").eq(i).append("<img src='"+liter.documents[i].thumbnail+"'/>");
		$(".liter > a > .textWrap > strong").eq(i).append("<strong>"+liter.documents[i].title+"</strong>");
		$(".liter > a > .textWrap > .priceWrap").eq(i).append("<p>"+liter.documents[i].price+"원"+"</p>");
	} 			

});


$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "교양" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( refine ) {
	console.log( refine );

	var refineBox = document.getElementsByClassName('refine');

	for (var i = 0; i < refineBox.length; i++) {
		$(".refine > a > .bookCover > .imgWrap > .img").eq(i).append("<img src='"+refine.documents[i].thumbnail+"'/>");
		$(".refine > a > .textWrap > strong").eq(i).append("<strong>"+refine.documents[i].title+"</strong>");
		$(".refine > a > .textWrap > .priceWrap").eq(i).append("<p>"+refine.documents[i].price+"원"+"</p>");
	} 			

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "경제" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( eco ) {
	console.log( eco );

	var ecoBox = document.getElementsByClassName('eco');

	for (var i = 0; i < ecoBox.length; i++) {
		$(".eco > a > .bookCover > .imgWrap > .img").eq(i).append("<img src='"+eco.documents[i].thumbnail+"'/>");
		$(".eco > a > .textWrap > strong").eq(i).append("<strong>"+eco.documents[i].title+"</strong>");
		$(".eco > a > .textWrap > .priceWrap").eq(i).append("<p>"+eco.documents[i].price+"원"+"</p>");
	} 			

});


$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "동화" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( kids ) {
	console.log( kids );

	var kidsBox = document.getElementsByClassName('kids');

	for (var i = 0; i < kidsBox.length; i++) {
		$(".kids > a > .bookCover > .imgWrap > .img").eq(i).append("<img src='"+kids.documents[i].thumbnail+"'/>");
		$(".kids > a > .textWrap > strong").eq(i).append("<strong>"+kids.documents[i].title+"</strong>");
		$(".kids > a > .textWrap > .priceWrap").eq(i).append("<p>"+kids.documents[i].price+"원"+"</p>");
	} 			

});


$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "어학" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( edu ) {
	console.log( edu );

	var eduBox = document.getElementsByClassName('edu');

	for (var i = 0; i < eduBox.length; i++) {
		$(".edu > a > .bookCover > .imgWrap > .img").eq(i).append("<img src='"+edu.documents[i].thumbnail+"'/>");
		$(".edu > a > .textWrap > strong").eq(i).append("<strong>"+edu.documents[i].title+"</strong>");
		$(".edu > a > .textWrap > .priceWrap").eq(i).append("<p>"+edu.documents[i].price+"원"+"</p>");
	} 			

});


$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "foreign" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( foreign ) {
	console.log( foreign );

	var foreignBox = document.getElementsByClassName('foreign');

	for (var i = 0; i < foreignBox.length; i++) {
		$(".foreign > a > .bookCover > .imgWrap > .img").eq(i).append("<img src='"+foreign.documents[i].thumbnail+"'/>");
		$(".foreign > a > .textWrap > strong").eq(i).append("<strong>"+foreign.documents[i].title+"</strong>");
		$(".foreign > a > .textWrap > .priceWrap").eq(i).append("<p>"+foreign.documents[i].price+"원"+"</p>");
	} 			

});

$(function(){

	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(0).attr("class", "aIn");

	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(0).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .a").show();
	});



	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(1).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .b").show();

	});


	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(2).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .c").show();
	});

	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(3).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .d").show();
	});


	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(4).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .e").show();
	});


	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(5).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .f").show();
	});


	$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").eq(6).mouseover(function(){
		$(".sec5_wrap > .taps > .tapsWrap > .tapLink > a").removeAttr("class");
		$(this).attr("class", "aIn");
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > ul").hide();
		$(".sec5_wrap > .contents > #contents1 > .boxWrap > .g").show();
	});



});


/* 주목 이달의 책 */

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "베스트셀러" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( corona ) {
	console.log( corona );

	var coronaBox = document.getElementsByClassName('corona');

	for (var i = 0; i < coronaBox.length; i++) {
		$(".corona > a > .book > .cover > .imgWrap").eq(i).append("<img src='"+corona.documents[i].thumbnail+"'/>");
		$(".corona > a > .text > .meta > .title").eq(i).append("<strong>"+corona.documents[i].title+"</strong>");
		$(".corona > a > .text > .meta > .priceWrap > .price > span").eq(i).append("<em>"+corona.documents[i].price+"</em>"+"원");
		$(".corona > a > .text > .meta > .priceWrap > .salePrice > em").eq(i).append("<em>"+corona.documents[i].sale_price+"</em>"+"원");
	} 			

});

$(function(){

	function prev(){
		$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider > li:last").prependTo("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider");
		$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider").css({"margin-left":"-345px"});
		$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider").stop().animate({"margin-left":"0"});
		$("#sec6_inner > .pointBook > .header > .page > .first").text($("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider > li:first").val());
	}

	function next(){

		$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider").stop().animate({"margin-left":"-345px"}, function(){
			$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider > li:first").appendTo("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider");
			$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider").css({"margin-left":"0"});
			$("#sec6_inner > .pointBook > .header > .page > .first").text($("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider > li:first").val());
		});
	}

	function slide(){

		$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider").stop().animate({"margin-left":"-345px"}, function(){
			$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider > li:first").appendTo("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider");
			$("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider").css({"margin-left":"0"});
			$("#sec6_inner > .pointBook > .header > .page > .first").text($("#sec6_inner > .pointBook > .contents > .sliderWrap > .view > .slider > li:first").val());
		});

	}



	setInterval(slide,3000);

	$("#sec6_inner > .pointBook > .contents > .sliderWrap > .control > .wrap > .prev").click(function(){
		prev();			
	});

	$("#sec6_inner > .pointBook > .contents > .sliderWrap > .control > .wrap > .next").click(function(){
		next();
	});

});




/* 특가할인 & 정가인하 */

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "핑크퐁" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( pink ) {
	console.log( pink );

	var pinkBox = document.getElementsByClassName('pink');

	for (var i = 0; i < pinkBox.length; i++) {
		$(".pink > a > .book > .imgWrap").eq(i).append("<img src='"+pink.documents[i].thumbnail+"'/>");
		$(".pink > a > .text > .title").eq(i).append("<strong>"+pink.documents[i].title+"</strong>");
		$(".pink > a > .text > .priceWrap > .price > span").eq(i).append("<em>"+pink.documents[i].price+"</em>"+"원");
		$(".pink > a > .text > .salePrice > span").eq(i).append("<em>"+pink.documents[i].price*0.5+"</em>"+"원");
	} 			

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "설민석" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( who ) {
	console.log( who );

	var whoBox = document.getElementsByClassName('who');

	for (var i = 0; i < whoBox.length; i++) {
		$(".who > a > .book > .imgWrap").eq(i).append("<img src='"+who.documents[i].thumbnail+"'/>");
		$(".who > a > .text > .title").eq(i).append("<strong>"+who.documents[i].title+"</strong>");
		$(".who > a > .text > .priceWrap > .price > span").eq(i).append("<em>"+who.documents[i].price+"</em>"+"원");
		$(".who > a > .text > .salePrice > span").eq(i).append("<em>"+who.documents[i].price*0.8+"</em>"+"원");
	} 			

});

$(function(){

	$("#sec6_inner > .bookSale > .header > ul > li").eq(0).click(function(){
		$(this).attr("class", "push");
		$("#sec6_inner > .bookSale > .header > ul > li").eq(1).attr("class", "");
		$("#sec6_inner > .bookSale > .contents > .sale").hide();
		$("#sec6_inner > .bookSale > .contents > .special").show();
	});

	$("#sec6_inner > .bookSale > .header > ul > li").eq(1).click(function(){
		$(this).attr("class", "push");
		$("#sec6_inner > .bookSale > .header > ul > li").eq(0).attr("class", "");
		$("#sec6_inner > .bookSale > .contents > .special").hide();
		$("#sec6_inner > .bookSale > .contents > .sale").show();
	});


	function prev1(){
		$("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(4), #sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(5), #sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(6), #sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(7)").prependTo("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider");
		$("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider").css({"margin-left":"-498px"});
		$("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider").stop().animate({"margin-left":"0"});
	}


	function next1(){
		$("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider").stop().animate({"margin-left":"-498px"}, function(){
			$("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(0), #sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(1), #sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(2), #sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider > li:eq(3)").appendTo("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider");
			$("#sec6_inner > .bookSale > .contents > .special > .wrap > .box > .sliderWrap > .slider").css({"margin-left":"0"});
		});
	}

	function prev2(){
		$("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(4), #sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(5), #sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(6), #sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(7)").prependTo("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider");
		$("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider").css({"margin-left":"-498px"});
		$("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider").stop().animate({"margin-left":"0"});
	}


	function next2(){
		$("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider").stop().animate({"margin-left":"-498px"}, function(){
			$("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(0), #sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(1), #sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(2), #sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider > li:eq(3)").appendTo("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider");
			$("#sec6_inner > .bookSale > .contents > .sale > .wrap > .box > .sliderWrap > .slider").css({"margin-left":"0"});
		});
	}

	$("#sec6_inner > .bookSale > .contents > div > .wrap > .box > .control > .prev").click(function(){
		prev1();
		prev2();
	});

	$("#sec6_inner > .bookSale > .contents > div > .wrap > .box > .control > .next").click(function(){
		next1();
		next2();
	});

});


/*Cd*/

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v2/search/image",
	data: { query: "Proof (Standard Edition) [3CD] :(3CD)" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}
	
})

.done(function( btsMain ) {
	console.log( btsMain );


	$(".CD > .contents > .sliderWrap > .box > a > .title > span").append("<img src='"+btsMain.documents[0].image_url+"'/>");



});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v2/search/image",
	data: { query: "'Beatbox'(Photobook Ver.)" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}
	
})

.done(function( nctMain ) {
	console.log( nctMain );


	$(".CD > .contents > .product > ul > .nct > a > .cover").append("<img src='"+nctMain.documents[2].image_url+"'/>");



});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v2/search/image",
	data: { query: "강다니엘 - 1st Full Album [The Story] 앨범커버" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}
	
})

.done(function( kangMain ) {
	console.log( kangMain );


	$(".CD > .contents > .product > ul > .kang > a > .cover").append("<img src='"+kangMain.documents[2].image_url+"'/>");



});	


/*DVD*/

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v2/search/image",
	data: { query: "헬렌:내 영혼의 자화상 - DVD" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( helene ) {
	console.log( helene );


	$(".DVD > .contents > .sliderWrap > .box > a > .title > span").append("<img src='"+helene.documents[0].image_url+"'/>");



});	

/* 특별판 Special Ed. */

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "스페셜에디션" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}
	
})

.done(function( specialEd ) {
	console.log( specialEd );

	var specialEdBox = document.getElementsByClassName('specialEd');

	for (var i = 0; i < specialEdBox.length; i++) {
		$(".specialEd > a  > .imgWrap").eq(i).append("<img src='"+specialEd.documents[i].thumbnail+"'/>");
		$(".specialEd > a  > .textWrap > strong").eq(i).append("<strong>"+specialEd.documents[i].title+"</strong>");
		$(".specialEd > a  > .textWrap > .priceWrap > .origin").eq(i).append("<em>"+specialEd.documents[i].price+"</em>");
		$(".specialEd > a  > .textWrap > .priceWrap > .price").eq(i).append("<em>"+specialEd.documents[i].sale_price+"원"+"</em>");
	} 			

});

$(function(){

	function prev(){
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:last").prependTo(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul");
		$(".Ed > .contents > .sliderWrap > .page .val").text($(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").val());
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").show();
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").nextAll().hide();
	}

	function next(){
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").appendTo(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul");
		$(".Ed > .contents > .sliderWrap > .page .val").text($(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").val());
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").show();
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").nextAll().hide();
	}

	function slide(){
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").appendTo(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul");
		$(".Ed > .contents > .sliderWrap > .page .val").text($(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").val());
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").show();
		$(".Ed > .contents > .sliderWrap > .boxWrap > .view > ul > li:first").nextAll().hide();
	}

	setInterval(slide,3000);

	$(".Ed > .contents > .sliderWrap > .boxWrap > .control > .prev").click(function(){
		prev();
	});

	$(".Ed > .contents > .sliderWrap > .boxWrap > .control > .next").click(function(){
		next();
	});

});

/*사이드 로그인*/

$(function(){


	$("#sky_wrapper > .sky_wrap_close > .c > a ").click(function(){

		if($("#sky_wrapper > .sky_wrap_close").css("right")=="-112px"){
			$("#sky_wrapper > .sky_wrap_close").stop().animate({
				right:"0px"
			});
			$("#sky_wrapper > .sky_wrap_close> .c > a > span").attr("class","show");
		}

		if($("#sky_wrapper > .sky_wrap_close").css("right")=="0px"){
			$("#sky_wrapper > .sky_wrap_close").stop().animate({
				right:"-112px"
			});
			$("#sky_wrapper > .sky_wrap_close> .c > a > span").attr("class","hidden");
		}


	});


});
