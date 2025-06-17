$(function(){
    // 클릭이벤트
    $("#btn1").click(function(){
        $(".box div:first-child").hide();
    })
    
    $("#btn2").click(function(){
        $(".box div:first-child").show();
    })
    
    $("#btn3").click(function(){
        $(".box div:nth-child(3)").toggle();
    })

    $("#btn4").click(function(){
        $(".box div:last-child").hide();
    })

    $("#btn5").click(function(){
        $(".box div:last-child").show();
    })
})