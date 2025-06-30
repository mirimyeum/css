$(function(){
    $('.list').slick({
        // 자동실행
    autoplay: true,
    // 한화면에 보일 슬라이드 갯수 설정
    slidesToShow:2,
    slidesToScroll:1,
    // 좌우버튼 숨기기
    arrows: false,
    // 페이지 버튼 보이기
    dots: true,
  });


// on click 기법추가
// $(function(){
//   $(".btn_pause").click(function(){
//     $(".btn_pause").toggleClass("on");
//   })

// })

// addClass -> class를 프로그램적으로 자동으로 추가
// removeClass -> class를 프로그램적으로 자동으로 삭제

// switch버튼
let sw = true;
$(".btn_pause").click(function(){
  if(sw==true){
    $(".btn_pause").addClass("on");
    // 슬라이드 일시정지 명령코드
    $(".list").slick("slickPause");
    sw=false;
  }else{
    $(".btn_pause").removeClass("on");
    // 슬라이드 다시 재생시켜주는 코드
    $(".list").slick("slickPlay");
    sw=true;
  }
})

})