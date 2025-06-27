$(function(){

  // 이미지 슬라이드
  $('.slide').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed:3000
  });

  // 서브메뉴 depth2
  $('.gnb').mouseenter(function(){
    $(".depth2").show();
  })
  $('.gnb').mouseleave(function(){
    $(".depth2").hide();
  })
  
  // 메인메뉴와 서브메뉴 묶음
  $('.gnb').mouseenter(function(){
    $(".depth2, .mainsub").show();
  })
  $('.gnb').mouseleave(function(){
    $(".depth2, .mainsub").hide();
  })
  
  // 팝업창 화면과 팝업창 클릭시 배경
  $('.notice:first-child').click(function(){
    $(".popup,.cover").show();
  })
  $('.close').click(function(){
    $(".popup,.cover").hide();
  })
  
  // 푸터 패밀리사이트
  $('.family').click(function(){
    $(" .family ul.lists").toggle();
  })  

})