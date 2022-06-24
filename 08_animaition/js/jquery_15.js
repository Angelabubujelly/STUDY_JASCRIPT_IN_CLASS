$(function(){
    $(".btn1").click(function(){
        $("img").stop().animate({"width":400, "height":1})
                        .animate({width:0})
    })
    // $(".btn2").click(function(){
    //     $("img").stop().animate({width:400,height})
    //                     .animate({width:500,height:500})
    // })
    $(".btn2").click(function(){
        $("img").stop().css({width:'auto',height:'auto'})
    })
})