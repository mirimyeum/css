$(function(){
    $(".gnb>li").mouseenter(function(){
        // .stop(2단메뉴가 한번만 보여지게)
        $(this).find(".depth2").stop().fadeIn(500)
    })
    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").stop().fadeOut(500)
    })

    // 메인 비주얼 swiper슬라이드
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

    // 페이지 버튼

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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


})