/*전체카테고리*/

$(function(){
	$(".allView > a").click(function(){
		$(this).toggleClass("up");
		$("#hBottom_box1 > .allView > .allView_wrap").slideToggle();
	});

	$("#hBottom_box1 > .allView > .allView_wrap > #all_category > .closeIcon > a").click(function(){
		$("#hBottom_box1 > .allView > .allView_wrap").slideUp();
	});
});

/*마우스를 올려주세요 배너*/

$(function(){

	$("#sideLeft > .mainLeft > .a").mouseover(function(){
		if($("#sideLeft > .mainLeft > .aBox").css("display")=="none"){
			$("#sideLeft > .mainLeft > .aBox").stop().animate({width:"toggle",height:"toggle",opacity:"1"},'slow');
		}
	});

	$("#sideLeft > .mainLeft > .aBox > .xBtn").click(function(){
		$("#sideLeft > .mainLeft > .aBox").stop().animate({width:"toggle",height:"toggle",opacity:"0"},'slow');
	});

});


/*사이드 배너 클릭*/

$(function(){

	$("#sideLeft > .mainLeft > .b > .contents > li:first").nextAll().hide();

	$("#sideLeft > .mainLeft > .b > .btn > .prev").click(function(){
		$("#sideLeft > .mainLeft > .b > .contents > li").hide();
		$("#sideLeft > .mainLeft > .b > .contents > li:first").show();
		$("#sideLeft > .mainLeft > .b > .contents > li:last").prependTo("#sideLeft > .mainLeft > .b > .contents");
	});

	$("#sideLeft > .mainLeft > .b > .btn > .next").click(function(){
		$("#sideLeft > .mainLeft > .b > .contents > li").hide();
		$("#sideLeft > .mainLeft > .b > .contents > li:first").show();
		$("#sideLeft > .mainLeft > .b > .contents > li:first").appendTo("#sideLeft > .mainLeft > .b > .contents");
	});

});





/*메인 슬라이더*/

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "파친코" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );
	

	$(".topInnerBanner > .bookList > .book > a > .cover > .coverWrap > .img").eq(0).append("<img src='"+msg.documents[2].thumbnail+"'/>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(0).append("<strong>"+msg.documents[2].title+"</strong>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(0).append("<p>"+msg.documents[2].contents+"</p>");

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "계속가보겠습니다" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );
	

	$(".topInnerBanner > .bookList > .book > a > .cover > .coverWrap > .img").eq(1).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(1).append("<strong>"+msg.documents[0].title+"</strong>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(1).append("<p>"+msg.documents[0].contents+"</p>");

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "책먹는여우의여름이야기" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );
	

	$(".topInnerBanner > .bookList > .book > a > .cover > .coverWrap > .img").eq(2).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(2).append("<strong>"+msg.documents[0].title+"</strong>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(2).append("<p>"+msg.documents[0].contents+"</p>");

});

$.ajax({

	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query: "사장을 위한 정관정요" },
	headers: {Authorization: "KakaoAK 43458cafd2f4189f4d94e224104c20c2"}

})

.done(function( msg ) {
	console.log( msg );
	

	$(".topInnerBanner > .bookList > .book > a > .cover > .coverWrap > .img").eq(3).append("<img src='"+msg.documents[0].thumbnail+"'/>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(3).append("<strong>"+msg.documents[0].title+"</strong>");

	$(".topMainBanner > .topInnerBanner > .bookList > .book > a > .meta").eq(3).append("<p>"+msg.documents[0].contents+"</p>");

});

$(function(){

	$(".bannerTab > .subBannerTab").eq(0).css({"display":"block"});
	$(".bannerTab > .subBannerTab").eq(2).css({"display":"none"});
	$(".bannerTab > .a > ul > li > a").eq(0).attr("class","In");
	$(".bannerTab > .b > ul > li > a").eq(0).attr("class","In");

	$(".bannerTab").eq(0).mouseover(function(){
		$(".bannerTab > a").removeAttr("class");
		$(".bannerTab > a").eq(0).attr("class","In");
		$(".bannerTab > .subBannerTab").eq(0).css({"display":"block"});
		$(".topMainBanner").hide();
		$("#bannerList > .a").show();
	});

	$(".bannerTab").eq(1).mouseover(function(){
		$(".bannerTab > .subBannerTab ").css({"display":"none"});
		$(".bannerTab > a").removeAttr("class");
		$(".bannerTab > a").eq(1).attr("class","In");
		$(".topMainBanner").hide();
		$("#bannerList > .b").show();
		$("#bannerList > .b > div").show();
	});

	$(".bannerTab").eq(2).mouseover(function(){
		$(".bannerTab > .subBannerTab ").css({"display":"none"});
		$(".bannerTab > a").removeAttr("class");
		$(".bannerTab > a").eq(2).attr("class","In");
		$(".bannerTab > .subBannerTab ").eq(2).css({"display":"block"});
		$(".topMainBanner").hide();
		$("#bannerList > .c").show();
	});

	$(".bannerTab").eq(3).mouseover(function(){
		$(".bannerTab > .subBannerTab ").css({"display":"none"});
		$(".bannerTab > a").removeAttr("class");
		$(".bannerTab > a").eq(3).attr("class","In");
		$(".topMainBanner").hide();
		$("#bannerList > .d").show();
		$("#bannerList > .d > div").show();
	});




	$(".bannerTab > .a > ul > li").eq(0).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(0).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(0).attr("class","In");
	});

	$(".bannerTab > .a > ul > li").eq(1).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(1).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(1).attr("class","In");
	});

	$(".bannerTab > .a > ul > li").eq(2).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(2).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(2).attr("class","In");
	});

	$(".bannerTab > .a > ul > li").eq(3).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(3).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(3).attr("class","In");
	});

	$(".bannerTab > .a > ul > li").eq(4).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(4).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(4).attr("class","In");
	});

	$(".bannerTab > .a > ul > li").eq(5).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(5).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(5).attr("class","In");
	});

	$(".bannerTab > .a > ul > li").eq(6).mouseover(function(){
		$("#bannerList > .a > .topInnerBanner").hide();
		$("#bannerList > .a > .topInnerBanner").eq(6).show();
		$(".bannerTab > .a > ul > li > a").removeAttr("class");
		$(".bannerTab > .a > ul > li > a").eq(6).attr("class","In");
	});



	$(".bannerTab > .b > ul > li").eq(0).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").stop().hide();
		$("#bannerList > .c > .topInnerBanner").eq(0).stop().show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(0).attr("class","In");
	});

	$(".bannerTab > .b > ul > li").eq(1).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").hide();
		$("#bannerList > .c > .topInnerBanner").eq(1).show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(1).attr("class","In");
	});

	$(".bannerTab > .b > ul > li").eq(2).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").hide();
		$("#bannerList > .c > .topInnerBanner").eq(2).show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(2).attr("class","In");
	});

	$(".bannerTab > .b > ul > li").eq(3).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").hide();
		$("#bannerList > .c > .topInnerBanner").eq(3).show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(3).attr("class","In");
	});

	$(".bannerTab > .b > ul > li").eq(4).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").hide();
		$("#bannerList > .c > .topInnerBanner").eq(4).show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(4).attr("class","In");
	});

	$(".bannerTab > .b > ul > li").eq(5).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").hide();
		$("#bannerList > .c > .topInnerBanner").eq(5).show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(5).attr("class","In");
	});

	$(".bannerTab > .b > ul > li").eq(6).mouseover(function(){
		$("#bannerList > .c > .topInnerBanner").hide();
		$("#bannerList > .c > .topInnerBanner").eq(6).show();
		$(".bannerTab > .b > ul > li > a").removeAttr("class");
		$(".bannerTab > .b > ul > li > a").eq(6).attr("class","In");
	});

});


$(function(){

	let i=0

	function prev(){

		i--;

		if(i < $(".topMainBanner:first").index()){
			i=3;
		}

		$(".topMainBanner").stop().fadeOut();
		$(".topMainBanner").eq(i).stop().fadeIn();
		$(".bannerTab > .subBannerTab ").css({"display":"none"});
		$(".bannerTab > a").removeAttr("class");
		$(".bannerTab > a").eq(i).attr("class","In");
		$(".bannerTab > .subBannerTab").eq(i).show();


	}

	function next(){

		i++;

		if(i > $(".topMainBanner:last").index()){
			i=0;
		}

		$(".topMainBanner").eq(i).stop().fadeIn();
		$(".topMainBanner").eq(i-1).stop().fadeOut();
		$(".bannerTab > .subBannerTab ").css({"display":"none"});
		$(".bannerTab > a").removeAttr("class");
		$(".bannerTab > a").eq(i).attr("class","In");
		$(".bannerTab > .subBannerTab").eq(i).show();

	}



	$("#topBannerController > .prev").click(function(){
		prev();
	});

	$("#topBannerController > .next").click(function(){
		next();
	});

	let clear = setInterval(next,4000);


	$(".bannerTab, #topBannerController").mouseover(function(){

		clearInterval(clear);

	});

	

	$(".bannerTab, #topBannerController").mouseout(function(){

		clear = setInterval(next,4000);

	});

});




/*베스트셀러 오늘, 주간 페이지 변경*/

$(function(){
	$("#bBottom_header > ul > .week").click(function(){
		$(this).attr("class", "weekin");
		$("#bBottom_header > ul > .today").attr("class", "todayout");
		$("#bBottom_section > #todayBest").hide();
		$("#bBottom_section > #weekBest").show();			
	});

	$("#bBottom_header > ul > .today").click(function(){
		$(this).attr("class", "today");
		$("#bBottom_header > ul > .weekin").attr("class", "week");
		$("#bBottom_section > #weekBest").hide();
		$("#bBottom_section > #todayBest").show();	
	});
});