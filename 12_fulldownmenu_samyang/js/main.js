$(function(){
    // 마우스를 gnb메뉴에 hover하면 header 높이를 380px로 늘리기
    $("ul.gnb").stop().mouseenter(function(){
        $("#header_wrap").animate({"height": 380},300); 
        // 300 = 0.3초 의미
        // 전체메뉴가 늘어났을때 2단메뉴가 보이게
        $(".depth2").show();
        $("#header_wrap").css({'border-bottom':'1px solid #c3c3c3'});
    })
    
    // 마우스가 전체박스의 영역에서 벗어나면 header 높이를 110px로 돌아오기
    $("#header_wrap").stop().mouseleave(function(){
        $("#header_wrap").animate({"height": 110},300);
        // 전체메뉴를 벗어났을때 2단메뉴가 숨겨지게
        $(".depth2").hide();
        $("#header_wrap").css({'border-bottom':'none'});
    })
})