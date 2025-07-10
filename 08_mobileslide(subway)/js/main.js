$(function(){

    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:{
    display: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // 페이지버튼을 숫자로 표시변경
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// 배너슬라이드 slide슬라이드
  $('.banner_slide').slick({
    autoplay:true,
    slidesToShow:2,
    // 좌우버튼 숨기기
    arrows:false,
    // 페이지 버튼 보이기
    dots: true
  });

  $(".m_gnb>ul>li>a").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  });

  // 햄버거 버튼 클릭시 m_side_wrap을 left -100%에서 0으로 튀어나오게하기
  $(".m_btn").click(function(){
    $(".cover").fadeIn()
    $(".m_side_wrap").animate({"left":0},300);
  })

  // 닫기버튼 클릭시 브라우저 바깥으로 보내기
  $(".m_close").click(function(){
    $(".m_side_wrap").animate({"left":'-100%'},300);
    $(".cover").fadeOut()
  })

  // 메뉴 클릭에만 커버띄우기
  
})