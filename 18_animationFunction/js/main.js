$(function(){
    $("#btn1").click(function(){
        $(".box1 li:first-child").fadeOut();
    })

    $("#btn2").click(function(){
        $(".box1 li:first-child").fadeIn();
    })
    
    $(".btn1").click(function(){
        $(".box1 li:last-child").fadeToggle();
    })

    $("#btn3").click(function(){
        $(".box2 li:first-child").slideUp();
    })

    $("#btn4").click(function(){
        $(".box2 li:first-child").slideDown();
    })

    $("#btn5").click(function(){
        $(".box2 li:last-child").slideToggle();
    })

})