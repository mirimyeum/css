$(function(){
      $('.slide').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    fade:true
  });

    $('.notice ul li:first-child a').click(function(){
        $(".cover").show();
        $(".popup").show();
    })
    $('.btn_close').click(function(){
        $(".popup").hide();
        $(".cover").hide();
    });
    
    $('.fm').click(function(){
        $(".family ul").toggle();
        })

    $('.gnb').mouseenter(function(){
        $(".depth2,.gnbbg").show();
        })
    $('.gnb').mouseleave(function(){
        $(".depth2,.gnbbg").hide();
        })
  


})