$(function () {
    // 각각 서브메뉴가 내려오기
    $(".nav>li").mouseover(function() {
        $(this).children(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseout(function() {
        $(this).children(".submenu").stop().slideUp();
    });

    // 그림 옆으로 나왔다 사라지기
    // //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    //     //이미지 개수?
    //     var imgs = 2;
    //     //현재 보여지는 이미지 번호는 인덱스 번호0
    //     var now = 0; 
    //     $(".slide img").eq(0).siblings().css({"margin-left":"-3000px"})
    //     setInterval(function() {
    // //현재보여지는 그림이 0면 번을 넣으주고,???????????????먼소리여
    // //그렇지 않으면 +=1하겠다. 3항연산자쥬
    //     now = now == imgs?0:now+=1
    // $(".slide img").eq(now-1).css({"margin-left":"-3000px"});
    // $(".slide img").eq(now).css({"margin-left":"0px"});
    //     }, 2000);

//그림이 위로 나왔다 사라지기
var imgs = 2;
var now = 0; 

        $(".slide img").eq(0).siblings().css({"margin-top":"-800px"});
        setInterval(function() {
        now = now == imgs?0:now+=1
    $(".slide img").eq(now-1).css({"margin-top":"-800px"});
                            // 폭은 1200px로 줘야지 보이져
    $(".slide img").eq(now).css({"margin-top":"0px"});
        }, 3000);
});