$(function () {
    // 각각 서브메뉴가 내려오기
    $(".nav>li").mouseover(function() {
        $(this).children(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseout(function() {
        $(this).children(".submenu").stop().slideUp();
    });

//그림이 옆으로 겹치면서 나오기
var imgs = 2;
var now = 0; 
        $(".slide img").eq(0).siblings().animate({"width":"-1100px"});
        setInterval(function() {
        now = now == imgs?0:now+=1
    $(".slide img").eq(now-1).animate({"width":"-1100px"});
                            // 폭은 1200px로 줘야지 보이져
    $(".slide img").eq(now).animate({"width":"1100px"});
        }, 3000);
});