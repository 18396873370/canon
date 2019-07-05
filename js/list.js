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


//大轮播图

var maxL = $(".motion").children("li").length
var oLi = $(".motion").children("li");
var oLi1 = $(".num").children("li");
var index = 0;
var abc = 0;
move();
var timer = setInterval(function () {
    move()
}, 2000);

oLi1.mouseenter(function () {
    clearInterval(timer);
    $(this).css({
        "width": 190,
        "background": "#c3c3c3"
    }).siblings().css({
        "width": 28,
        "background": "#fff"
    });
    oLi.eq($(this).index()).fadeIn(1000).siblings().fadeOut();
    abc = $(this).index();
})
oLi1.mouseleave(function () {
    index = abc;
    timer = setInterval(function () {
        move()
    }, 2000);
})
function move() {
    oLi1.eq(index).css({
        "width": 190,
        "background": "#c3c3c3"
    }).siblings().css({
        "width": 28,
        "background": "#fff"
    });
    oLi.eq(index).fadeIn(1000).siblings().fadeOut();
    index++;
    if (index == maxL) {
        index = 0;
    }

}




//轮播图
var dlff = $.ajax({
    type: "get",
    url: "../json/showshop.json?_id=" + new Date().getTime(),
    async: true
});
dlff.done(function (json) {
    var str = "";
    var pro = null;
    for (var i in json) {
        pro = json[i].list;
        for (var j in pro) {
            var pre = pro[j];
            if (pre.oldprice == pre.newprice) {
                str += `<li class="swiper_slide"><a href="details.html?pid=${pre.id}">
                <p class="text">${pre.name}</p>
                <p class="old_price">建议零售价：<span>${pre.oldprice}</span></p>
                <p class="active_price">&nbsp;</span></p>
                <img src="${pre.src}">
                <span class="look"> 立即查看</span>
                </a>
            </li>`
            } else {
                str += `<li class="swiper_slide"><a href="details.html?pid=${pre.id}">
                <p class="text">${pre.name}</p>
                <p class="old_price">建议零售价：<span>${pre.oldprice}</span></p>
                <p class="active_price">会员价: <span>${pre.newprice}</span></p>
                <img src="${pre.src}">
                <span class="look">立即查看</span>
                </a>
            </li>`
            }
        }
    }
    $(".center ul").html(str);
});
var loc = location.href;
var loc1 = loc.split("?")[1];
var loc2 = loc.split("&")[1];
var loc3 = loc.split("&")[0];
var loc4 = loc2.split("=")[1];
var loc5 = loc3.split("=")[1];
//console.log(loc5)

//动态添加
var deff = $.ajax({
    type: "get",
    url: "../json/moreshop.json?_id=" + new Date().getTime(),
    async: true
});
deff.done(function (json) {


    var str = "";
    var str1 = "<p>全部</p>";
    var str2 = "";
    var pro = null;
    var pro1 = null;
    var pro2 = null;
    var str3 = "";
    for (var i in json) {
        if (loc5 == i) {
            str += `<span>${json[i].name}</span>`
            pro = json[i].list;
            for (var j in pro) {
                pro1 = pro[j];
                //console.log(pro[j])

                for (let k in pro1) {
                    str1 += ` <li  pid='${k}' ><a href="javascript:;">${pro1[k].name}<a></li>`
                    //点击事件
                    $(".typeNavList").on("click", "li", function () {

                        var pid = $(this).attr("pid");
                        console.log(pid)
                        if (pid == k) {

                            pro2 = pro1[k].shop;
                            for (var l in pro2) {
                                if (pro2[l].oldprice == pro2[l].newprice) {
                                    str3 += `<div class="pro_1"><a href="details.html?pid=${pro2[l].id}">
                                                <div class="pro_11"><img src="${pro2[l].src}"></div>
                                                    <p class="old">建议零售价<span class="old_price">：${pro2[l].oldprice}</span></p>
                                                    <p class="new">&nbsp;</p>
                                                    <h3>${pro2[l].name}</h3>
                                                <dl>
                                                    <dd class="look"><a>关注</a></dd>
                                                    <dd class="inshopcar" pid='${pro2[l].id}' pname='${pro2[l].name}' price='${pro2[l].newprice}' src='${pro2[l].src}'><a href="shopcar.html?pid=${pro2[l].id}">加入购物车</a></dd>
                                                </dl></a>
                                                </div>`;


                                } else {
                                    str3 += `<div class="pro_1"><a href="details.html?pid=${pro2[l].id}">
                                            <div class="pro_11"><img src="${pro2[l].src}"></div>
                                                <p class="old">建议零售价<span class="old_price">：${pro2[l].oldprice}</span></p>
                                                <p class="new">会员价<span class="new_price">：${pro2[l].newprice}</span></p>
                                                <h3>${pro2[l].name}</h3>
                                            <dl>
                                                <dd class="look"><a>关注</a></dd>
                                                <dd class="inshopcar" pid='${pro2[l].id}' pname='${pro2[l].name}' price='${pro2[l].newprice}' src='${pro2[l].src}'><a href="shopcar.html?pid=${pro2[l].id}">加入购物车</a></dd>
                                            </dl>
                                            </a>
                                            </div>`;

                                }


                                //  console.log(pro2[l])


                            }
                            //console.log(str2)
                            $(".promain").html("")

                            console.log(str3)
                            $(".promain").html(str3);
                            str3 = "";
                        }

                    })
                    //console.log(pro1[k].name)
                    pro2 = pro1[k].shop;
                    if (loc4 == k) {
                        for (var l in pro2) {
                            var res = pro2.length
                            if (pro2[l].oldprice == pro2[l].newprice) {
                                str2 += `<div class="pro_1"><a href="details.html?pid=${pro2[l].id}">
                                            <div class="pro_11"><img src="${pro2[l].src}"></div>
                                                <p class="old">建议零售价<span class="old_price">：${pro2[l].oldprice}</span></p>
                                                <p class="new">&nbsp;</p>
                                                <h3>${pro2[l].name}</h3>
                                            <dl>
                                                <dd class="look"><a>关注</a></dd>
                                                <dd class="inshopcar" pid='${pro2[l].id}' pname='${pro2[l].name}' price='${pro2[l].newprice}' src='${pro2[l].src}'><a href="shopcar.html?pid=${pro2[l].id}">加入购物车</a></dd>
                                            </dl></a>
                                            </div>`;


                            } else {
                                str2 += `<div class="pro_1"><a href="details.html?pid=${pro2[l].id}">
                                        <div class="pro_11"><img src="${pro2[l].src}"></div>
                                            <p class="old">建议零售价<span class="old_price">：${pro2[l].oldprice}</span></p>
                                            <p class="new">会员价<span class="new_price">：${pro2[l].newprice}</span></p>
                                            <h3>${pro2[l].name}</h3>
                                        <dl>
                                            <dd class="look"><a>关注</a></dd>
                                            <dd class="inshopcar" pid='${pro2[l].id}' pname='${pro2[l].name}' price='${pro2[l].newprice}' src='${pro2[l].src}'><a href="shopcar.html?pid=${pro2[l].id}">加入购物车</a></dd>
                                        </dl>
                                        </a>
                                        </div>`;

                            }


                            //  console.log(pro2[l])

                        }
                    }
                }



            }
            $(".typename").html(str)
            $(".typeNavList").html(str1)
            $(".promain").html(str2)
        }
    }
});
//移入移出事件
$(".promain").on("mouseenter", ".pro_1", function () {
    $(this).css("border", "1px solid red")
})
$(".promain").on("mouseleave", ".pro_1", function () {
    $(this).css("border", "1px solid #e9e9e9")
})
//点击事件
//点击添加购物车时，将数据添加到localStorage

$(".promain").on("click", ".inshopcar", function () {
    //定义一个数组 存放多个数据
    var arr = [];
    var projson = {}; //存放一个商品的所有数据
    var flag = true; //假设值为ture 可以像数组添加数据；
    var pname = $(this).attr("pname");
    var pid = $(this).attr("pid");
    var price = $(this).attr("price");
    var psrc = $(this).attr("src");
    var count = 1
    projson = {
        "id": pid,
        "name": pname,
        "src": psrc,
        "price": price,
        "count": count
    }
    //取数据

    var str = localStorage.getItem("prolist");
    if (str != null) {
        arr = JSON.parse(str);
        arr.forEach((pro) => {
            if (pro.id === projson.id) {
                pro.count++;
                flag = false;
                return;
            }
        })
    }
    if (flag) {
        arr.push(projson)
    }
    //将数组存入到storge
    localStorage.setItem("prolist", JSON.stringify(arr));

    if (confirm("点击确定，跳转到购物车页面")) {
        location.href = "shopcar.html";
    }
})
//点击关注
var look = true;
$(".promain").on("click", ".look", function () {
    var zh = $.cookie("userinfo");
    if (zh) {
        if (look) {
            $(this).css("border", "1px solid #bc0003")
            alert("关注成功")
            console.log(look)
        } else {
            $(this).css("border", "1px solid #ccc")
            alert("取消关注成功")
        }
        look = !look;
    } else {
        if (confirm("点击确定，跳转登入页面")) {
            location.href = "login.html";
        }

    }




})