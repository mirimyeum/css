$(function(){
    $(".gnb").stop().mouseenter(function(){
        $(".header_wrap").animate({"height":320},200)
        $(".depth2").show();
        
    })
    $(".header_wrap").stop().mouseleave(function(){
        $(".header_wrap").animate({"height":70},200)  
        $(".depth2").hide();
    })
})