$("ul.slide li").mouseover(function(){
    $(this).stop().animate({
        width:"70%"
    }).siblings().stop().animate({
        width:"20%"
    })
})

$("ul.slide").mouseleave(function(){
    $("ul.slide li").stop().animate({
        width:"25%"
    })
})

$(".part li").click(function(){
    var index = $(this).index()
    $(".part li").removeClass("active").eq(index).addClass("active")
    $("iframe").removeClass("active").eq(index).addClass("active")
})

var imgs = document.querySelectorAll(".header ul li")
var index = 0
function Changeone(type){
    imgs[index].className=""

    if(type===false) index--;
    else if(type === true) index++;
    else index = type;

    if(index >= imgs.length) index = 0;
    if(index < 0) index = imgs.length-1;

    imgs[index].className="show";
}

setInterval(function(){
    Changeone(true);
},3000);


$(".music img").mouseover(function(){
    $("audio").css("display","block")
})
$(".music img").mouseleave(function(){
    setTimeout(() => {
    $("audio").css("display","none")
    }, 2000);
})
document.addEventListener("click",function(){
    var audio = document.querySelector("audio")
    var music = document.querySelector(".music img")
    audio.play()
    music.style.animation = "run 2s linear infinite"
})


