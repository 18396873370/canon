//是否有账号登入
var zh = $.cookie("userinfo");
if (zh) {
    var userjson = JSON.parse(zh);
    $("#yhimg").html(userjson.name);
    $(".login").css("margin-left", 137);
    var img = `<img src='../img/用户.png'>`
    var imgs = `<img src="../img/1111111.png">`
    $(".yhimg").html(img);
    $(".jt").html(imgs);
    $("#yhimg").attr("href", "#")
    $(".login").mouseenter(function () {
        $(".yhzx").slideDown(300);
        $("#yhzx").on("mouseenter", "p", function () {
            $(".yhzx").stop().css("display", "block");
            $(this).css("background", "#bf2318").siblings().css("background", "#e3e3e3");
            $(this).children("a").css("color", "#fff").parent().siblings().children("a").css("color", "#000");
        })
    })
    $(".login").mouseleave(function () {
        $(".yhzx").slideUp(300);
    })
    $("#yhzx").on("mouseleave", "p", function () {
        $(".yhzx").css("display", "none");
    })

} else {
    $("#yhimg").html("登入/注册");
    $(".login").css("margin-left", "11 %");
    $(".yhimg").html("");
    $(".jt").html("");
}

//热销商品
var daff = $.ajax({
    type: "get",
    url: "../json/newshop.json?_id=" + new Date().getTime(),
    async: true
});
daff.done(function (json) {
    var str = "";
    var pro = null;
    for (var i in json.list) {
        pro = json.list[i];
        if (pro.oldprice == 0) {
            str += `<li> <a href="details.html?pid=${pro.id}">
            <img class="hot" src="../img/hot2.140f870.png">
           <img class="newhot" src="../img/is_new2.5a16c51.png">
            <img class="shop" src="../${pro.src}">
            <p class="font">${pro.name}</p>
            <p class="active_price">会员价:<span>${pro.newprice}</span></p>
            </a>
        </li>`

        } else if (pro.newprice == 0) {
            str += `<li><a href="details.html?pid=${pro.id}">
            <img class="hot" src="../img/hot2.140f870.png">
           <img class="newhot" src="../img/is_new2.5a16c51.png">
            <img class="shop" src="../${pro.src}">
            <p class="font">${pro.name}</p>
            <p class="old_price">建议零售价:<span>${pro.oldprice}</span></p>
            </a> 
        </li>`
        }


    }
    $("#newsgood").html(str);

})
//客服中心
$(".chat").click(function () {
    location.href = "https://qiyukf.com/client?k=c843342cd9913031105315f54c05e844&u=&d=zojcyvgdvrq4jwuzohdx&uuid=cm2affqgklx2mtts18lt&gid=0&sid=0&qtype=0&dvctimer=0&robotShuntSwitch=0&hc=0&robotId=0&pageId=1561467971240BTS0uCf4BF&t=%25E4%25BD%25B3%25E8%2583%25BD%25E5%25AE%2598%25E6%2596%25B9%25E7%25BA%25BF%25E4%25B8%258A%25E5%2595%2586%25E5%259F%258E%2520-%2520%25E9%25A6%2596%25E9%25A1%25B5"
})
//返回上一步

$(".totop").click(function () {

    $("html,body").animate({
        scrollTop: 0
    }, 1000)

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
    //选项卡委托事件；
    $(".two").on("click", ".nav_li", function () {
        $(this).css("background", "#e3e3e3").siblings().css("background", "#bf2318");
        $(this).css("color", "#2a2a2a").siblings().css("color", "#fff");


        stre = "";
        for (let i in json) {
            // console.log(i)
            if ($(this).html() == json[i].name) {
                pro = json[i].list;
                for (let j in pro) {
                    console.log()
                    stre += `<li style="line-height:20px">
                                <a href="list.html?pid=${pro[j].id}&pid1=${i}">${pro[j].name}</a>
                            </li>`
                    $(".secondmenu").on("click", "li", function () {
                        location.href = `list.html?pid=${i}&pid1=${pro[j].id}`;
                    })

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
//购物车显示

var str = localStorage.getItem("prolist");
if (str == "[]") {
    $(".prop").css("display", "block");
    $(".center_shopcar").css("display", "none");
    // var strCon = "";
    // var arr = JSON.parse(str);
    // arr.forEach((shopinfo) => {
    //     var money = shopinfo.price;
    //     money = money.split("￥")[1];
    //     money = parseInt(money)
    //     strCon += `
    //     <ol class="moe_" data-id="${shopinfo.id}">
    //     <li class="check_1"><input class="ck" type="checkbox"></li>
    //             <li class="img_1"><img src="${shopinfo.src}"></li>
    //             <li class="name_1">${shopinfo.name}</li>

    //             <li class="money_2">${shopinfo.price}</li>
    //             <li class="price_2" data-id="${shopinfo.id}" >
    //                 <span class="btn_up">+</span>
    //                 <span class="num_text">${shopinfo.count}</span>
    //                 <span class="btn_down">-</span>
    //             </li>
    //             <li class="money_3">￥${money*shopinfo.count}.00</li>
    //             <li class="operate_1">
    //                 <span class="delete">删除</span>
    //                 <p class="lock">关注</p>
    //             </li>
    //             </ol>`
    // })
    // $(".moe").html(strCon);
} else {
    $(".prop").css("display", "none");
    $(".center_shopcar").css("display", "block");
    var strCon = "";
    var arr = JSON.parse(str);
    arr.forEach((shopinfo) => {
        var money = shopinfo.price;
        money = money.split("￥")[1];
        money = parseInt(money)
        strCon += `
        <ol class="moe_" data-id="${shopinfo.id}">
        <li class="check_1"><input class="ck" type="checkbox"></li>
                <li class="img_1"><img src="${shopinfo.src}"></li>
                <li class="name_1">${shopinfo.name}</li>

                <li class="money_2">${shopinfo.price}</li>
                <li class="price_2" data-id="${shopinfo.id}" >
                    <span class="btn_up">+</span>
                    <span class="num_text">${shopinfo.count}</span>
                    <span class="btn_down">-</span>
                </li>
                <li class="money_3">￥${money * shopinfo.count}.00</li>
                <li class="operate_1">
                    <span class="delete">删除</span>
                    <p class="lock">关注</p>
                </li>
                </ol>`
    })
    $(".moe").html(strCon);
}


//复选框
$(".check input").click(function () {
    $(".moe .moe_ li input").prop("checked", $(this).prop("checked"))
    $("#checked").prop("checked", $(this).prop("checked"))
    // console.log($(".num_text").html())
    money()
})
$("#checked").click(function () {
    $(".moe .moe_ li input").prop("checked", $(this).prop("checked"))
    $(".check input").prop("checked", $(this).prop("checked"))
    money()

})
$(".moe").on("click", ".ck", function () {
    money()

});

//加减数量
$(".moe").on("click", ".btn_up", function () {
    var index = parseInt($(this).next().html());
    index += 1;
    $(this).next().html(index);
    var pid = $(this).parent().data("id");
    console.log(pid)
    var count = parseInt($(this).next().html());
    //遍历数组
    arr.forEach((pro) => {
        if (pro.id === pid) {
            pro.count++;
            //将数组重新存入到storage中
            localStorage.setItem("prolist", JSON.stringify(arr));
            // //页面同步改变
            $(this).next().html(pro.count)
            // //同步改变金额
            $(this).parent().next().html(pro.count * pro.price)
            var money = pro.price;
            money = money.split("￥")[1];
            money = parseInt(money)
            $(this).parent().next().html("￥" + pro.count * money + ".00")
        }
    })
    money()


});
$(".moe").on("click", ".btn_down", function () {
    var index = parseInt($(this).prev().html());
    index += -1;
    $(this).prev().html(index);
    if (index < 1) {
        alert("亲：数量已到最低，不能在减少了")
        index = 1;
        $(this).prev().html(index);
    }
    var pid = $(this).parent().data("id");
    console.log(pid)
    var count = parseInt($(this).next().html());
    //遍历数组
    arr.forEach((pro) => {
        if (pro.id === pid) {
            pro.count--;
            //将数组重新存入到storage中
            localStorage.setItem("prolist", JSON.stringify(arr));
            // //页面同步改变
            $(this).next().html(pro.count)
            // //同步改变金额
            $(this).parent().next().html(pro.count * pro.price)
            var money = pro.price;
            money = money.split("￥")[1];
            money = parseInt(money)
            $(this).parent().next().html("￥" + pro.count * money + "0.00")
        }
    })
    money()

});
//删除功能
$(".moe").on("click", ".delete", function () {
    money()
    $(this).parent().parent().remove();
    var pid = $(this).parent().parent().data("id");
    console.log(pid)
    arr.forEach((pro, index) => {
        if (pro.id === pid) {
            arr.splice(index, 1)
            localStorage.setItem("prolist", JSON.stringify(arr));

        }
    })
    look();
    $(".numb").html(count);
    $(".money").html("￥" + money + ".00");
});

//判断所选几件商品

function money() {
    var count = 0;
    var money = 0;
    //结算的是被选中的复选框
    $(".ck:checked").each(function () {
        count += Number($(this).parent().parent().find(".price_2").find(".num_text").html());
        money += parseInt(($(this).parent().parent().find(".money_3").html().split("￥")[1]));

    })
    $(".numb").html(count);
    $(".money").html("￥" + money + ".00");
}
//删除选中所有
$("#del").click(function () {
    check()

})


function check() {
    //结算的是被选中的复选框
    $(".ck:checked").each(function () {
        $(this).parent().parent().remove();
        var pid = $(this).parent().parent().data("id");
        arr.forEach((pro, index) => {
            if (pro.id === pid) {
                arr.splice(index, 1)
                localStorage.setItem("prolist", JSON.stringify(arr));
            }
        })

    })

}