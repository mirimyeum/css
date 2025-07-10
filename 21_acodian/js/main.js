$(function(){
    // 주메뉴 클릭시 2단메뉴 열리게
    $(".box>ul>li>a").click(function(){
        $(this).next().slideToggle().siblings().find("depth2").slideUp();
    })
})

// $(document).ready({

// })