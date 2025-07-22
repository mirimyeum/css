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

// 섹션4 배너슬라이드
$(document).ready(function(){
  $('.bannerslide').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });
});

// tab기능
//  tab li를 클릭하면 해당 li에 on class추가하고
// 나머진 on class 제거

$(".tab li").click(function(e){
  // 위로 올라가는 방지 
  e.preventDefault()
  $(".tab li").removeClass("on");
  $(this).addClass("on");
})

// list 박스를 클릭하면 on class추가/삭제
$(".content ul.list li").click(function(e){
  // 클릭시 화면이 위로 올라가는 기능을 방지
  e.preventDefault();
  $(".content ul.list li").removeClass("on");
  $(this).addClass("on");
})
