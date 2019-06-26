//点击事件
var flag = false;

$("#one").click(function () {
    flag = !flag;
    if (flag) {
        $(".two").css("display", "block");
    } else {
        $(".two").css("display", "none");
        $(".secondmenu").css("display", "none");
    }
    return false;

})

onscroll();

function onscroll() {
    var oNav = document.getElementsByClassName("nav")[0];
    document.onscroll = function () {
        let h = oNav.offsetHeight
        var stop = document.documentElement.scrollTop || document.body.scrollTop;
        if (stop > h) {
            oNav.style.position = "fixed";
            oNav.style.top = "0";
        } else {
            oNav.style.position = "";

        }
    }
}
var deff = $.ajax({
    type: "get",
    url: "../json/labal.json?_id=" + new Date().getTime(),
    async: true
});
deff.done(function (json) {
    var str = "";
    var pro = null;
    var stre = "";
    for (var i in json) {
        pro = json[i].list;
        str += `<li class="nav_li">${i}</li>`


    }
    //选项卡委托事件；
    $(".two").on("click", ".nav_li", function () {
        $(this).css("background", "#e3e3e3").siblings().css("background", "#bf2318");
        $(this).css("color", "#2a2a2a").siblings().css("color", "#fff");


        stre = "";
        for (var i in json) {
            // console.log(i)
            if ($(this).html() == i) {
                pro = json[i].list;
                for (var j in pro) {
                    stre += `<li>${pro[j].name}</li>`
                }
                $(".secondmenu").html(stre);
            }
        }
        $(".secondmenu").css("display", "block");



        return false;
    })
    $(".two").html(str);



})
//鼠标划上
$(".secondmenu").on("mouseenter", "li", function () {
    $(this).css("background", "#bf2318").siblings().css("background", "#000");
})
//鼠标划上
$("#newshop").mouseenter(function () {
    $(".news").slideDown(100);
})
$("#newshop").mouseleave(function () {
    $(".news").slideUp(100);
})
$(".news").mouseenter(function () {
    $(".news").stop().css("display", "block");
})
$(".news").mouseleave(function () {
    $(".news").slideUp(100);
})

//内容显示
$("#moreshop").on("mouseenter", ".moresee", function () {
    $(this).children(".mate").stop().fadeIn(300).parent().siblings().children(".mate").stop().fadeOut(300);
})
$("#moreshop").on("mouseleave", ".moresee", function () {
    $(this).children(".mate").stop().fadeOut(300);
})
//轮播图
var stimer = setInterval(function () {
    $(".swiper").animate({
        "margin-left": -304
    }, 1000, function () {
        $(".swiper_slide").first().appendTo($(".swiper"));
        $(".swiper").css("margin-left", 0);

    })
}, 2000);

// function move() {

// }
$(".left").click(function () {

    $(".swiper").animate({
        "margin-left": -304
    }, 1000, function () {
        $(".swiper_slide").first().appendTo($(".swiper"));
        $(".swiper").css("margin-left", 0);

    })


})
$(".right").click(function () {
    $(".swiper_slide").last().prependTo($(".swiper"));
    $(".swiper").css("margin-left", -304);
    $(".swiper").stop().animate({
        "margin-left": 0
    }, 1000, function () {


    })


})
//客服中心
$(".chat").click(function () {
    location.href = "https://qiyukf.com/client?k=c843342cd9913031105315f54c05e844&u=&d=zojcyvgdvrq4jwuzohdx&uuid=cm2affqgklx2mtts18lt&gid=0&sid=0&qtype=0&dvctimer=0&robotShuntSwitch=0&hc=0&robotId=0&pageId=1561467971240BTS0uCf4BF&t=%25E4%25BD%25B3%25E8%2583%25BD%25E5%25AE%2598%25E6%2596%25B9%25E7%25BA%25BF%25E4%25B8%258A%25E5%2595%2586%25E5%259F%258E%2520-%2520%25E9%25A6%2596%25E9%25A1%25B5"
})
//返回上一步

$(".totop").click(function () {

    $("html,body").animate({
        scrollTop: 0
    }, 1000, )

})