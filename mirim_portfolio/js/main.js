new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    anchors:['section0', 'section1', 'section2', 'section3', 'section4', 'section5'],
});

// 메뉴버튼과 X버튼 변동
let header = document.querySelector("header")
console.log(header)
let mbtn = document.querySelector(".m_btn")
console.log(mbtn)
mbtn.addEventListener("click",function(){
    header.classList.toggle("on")
})

// 디자인 work에 hover했을때 li 변환
$(function(){
    $("#section4 .projectlist li").mouseenter(function(){
        $("#section4 .projectlist li").removeClass("on");
        $(this).addClass("on");
    })
})

