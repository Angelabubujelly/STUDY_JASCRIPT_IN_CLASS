$(function () {
    // 각각 서브메뉴가 내려오기
    $(".nav>li").mouseover(function() {
        $(this).children(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseout(function() {
        $(this).children(".submenu").stop().slideUp();
    });

    // 서브메뉴가 한꺼번에 내려오기
    // $(".nav").mouseover(function() {
    //     $(".submenu").stop().slideDown();
    // });
    // $(".nav").mouseout(function() {
    //     $(".submenu").stop().slideUp();
    // });

    // 그림 옆으로 밀기
    var x = $(".slide>div");
    setInterval(function() {
        if(x.position().left == -2600) {
            x.animate({left:"-=1300"}, function() {
                x.css("left", 0);
            })
        } else {
            x.animate({left:"-=1300"})
        }    
    }, 2000);
});