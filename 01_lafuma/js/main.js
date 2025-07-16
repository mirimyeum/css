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

$(function(){
  $(".content ul.list li").mouseenter(function(){
    let num = $(this).find("img").attr('src')
    console.log(num)
    // 치환
    let num2 = num.replace('_ot','_ov')
    console.log(num2)

    $(this).find("img").attr('src',num2)
  })
})

$(function(){
  $(".content ul.list li").mouseleave(function(){
    let num = $(this).find("img").attr('src')
    console.log(num)
    // 치환
    let num2 = num.replace('_ot','_ov')
    console.log(num2)

    $(this).find("img").attr('src',num2)
  })
})


})

$(function(){
  $('.btn_family').click(function(){
    $('.family_box .list').slideToggle()
    $(this).toggleClass("on")
  })
})