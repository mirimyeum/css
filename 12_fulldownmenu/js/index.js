$(function(){
    // 마우스를 header에 hover하면 header 높이를 400px로 늘리기
    $("header").stop().mouseenter(function(){
        $("header").animate({'height':'400px'})
    })
    
    // 마우스가 header의 영역에서 벗어나면 header 높이를 80px로 돌아오기
    $("header").stop().mouseleave(function(){
        $("header").animate({'height':80})

    })

    // header를 클릭하면 함수실행하기
    $("header").click(function(){

    })
    
})