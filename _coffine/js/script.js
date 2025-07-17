// Jquery & Javascript

$(function(){
    // 닫기버튼을 클릭하면 pop창 높이는 0으로 설정
    $(".btn_close").click(function(){
        $(".popup").slideUp();
    })
});

$(function(){
    // 마우스를 주메뉴 li에 hover했을때
    $(".gnb>li>a").mouseenter(function(){
        $("header").stop().animate({"height":"370px"},300);
        $(".depth2").stop().fadeIn(300);
    })
    // 마우스를 주메뉴 li에서 벗어났을때
    $("header").mouseleave(function(){
        $("header").stop().animate({"height":"103px"},300);
        $(".depth2").stop().fadeOut(300);
    })
});

// 메인슬라이드
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    // 페이지 버튼 보임
    dots: true,
  });
})