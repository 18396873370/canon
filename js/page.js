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

//跳转详情页
var str = location.href;
var arr = str.split("?")[1];
var pid = str.split("=")[1];

var deff = $.ajax({
    type: "get",
    url: "../json/shopmore.json?_id=" + new Date().getTime(),
    async: true
});

deff.done(function (json) {
    console.log();
    var sar = "";
    var scr = "";
    var srr = "";
    var str = "";
    var pro = null;
    for (var i in json) {
        pro = json[i]
        //console.log(json[i].id);
        if (pro.id == pid) {
            if (pro.newprice == pro.oldprice) {
                srr += ` <li class="sheet "></li>
                <li class="names">${pro.name}</li>`
                sar += `
                <div class="mast"></div>
                <img class= "smaill"  src="${pro.src}">
            <div class="left_">
                <img id="bigimg" src="${pro.src}">
            </div>`
                str += `
                    <dd><img src="${pro.src}"> </dd>
                  `
                scr += `<h2>${pro.name}</h2>
                <p class="prompting">赠品优酷年卡，在订单完成7天后，请自行联系客服领取</p>
                <div class="date">
                    <p class="new"></p>
                    <p class="old"><span class="old-price">建议零售价：</span><span class="old_money">${pro.oldprice}</span><span
                            class="advise">库存紧张</span></p><p class="freight">运费规则：<a href="javascript:/">查看规则</a></p>
                            <p class="warn">从<span class="area">上海</span>发货，除周日及法定节假日外，当天15：30前完成支付，当日发货</p>
                            <dl class="style">
                                <dt>选择版本：</dt>
                                <dd>${pro.name}</dd>
                            </dl>
                            <div class="gift">
                                <p class="gift_">【赠品】</p>
                                <ol>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                </ol>
                                <p class="number">
                                    <span class="num">数量：</span>
                                    <span class="buy">1</span>
                                    <span class="numup"></span>
                                    <span class="numdown"></span>
                                    <span class="buynum">件</span>
                                </p>
                                <p class="btn"><a id="buy" href="shopcar.html?pid=${pro.id}">立即购买</a><a id="shopcar" pid='${pro.id}' pname='${pro.name}' price='${pro.newprice}' src='${pro.src}'>加入购物车</a></p>
                            </div>
                            <div class="share">
                                <a href="javascript:/"><span class="share_1">关注</span></a>
                                <a href="javascript:/"></a><span class="wb">微博</span></a>
                                <a href="javascript:/"></a><span class="wx">微信</span></a>
                            </div>`

            } else {
                srr += ` <li class="sheet "></li>
                <li class="names">${pro.name}</li>`
                sar += `
                <div class="mast"></div>
                <img class= "smaill" src="${pro.src}">
                
            <div class="left_">
                <img id="bigimg" src="${pro.src}">
            </div>`
                str += `
                    
                    <dd><img src="${pro.src}"> </dd>
                   `
                scr += `<h2>${pro.name}</h2>
                <p class="prompting">赠品优酷年卡，在订单完成7天后，请自行联系客服领取</p>
                <div class="date">
                    <p class="new"><span class="new-price">会员价：</span>${pro.newprice}</p>
                    <p class="old"><span class="old-price">建议零售价：</span><span class="old-money">${pro.oldprice}</span><span
                            class="advise">库存紧张</span></p><p class="freight">运费规则：<a href="javascript:/">查看规则</a></p>
                            <p class="warn">从<span class="area">上海</span>发货，除周日及法定节假日外，当天15：30前完成支付，当日发货</p>
                            <dl class="style">
                                <dt>选择版本：</dt>
                                <dd>${pro.name}</dd>
                            </dl>
                            <div class="gift">
                                <p class="gift_">【赠品】</p>
                                <ol>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                    <li>闪迪SD卡32G *1</li>
                                </ol>
                                <p class="number">
                                    <span class="num">数量：</span>
                                    <span class="buy">1</span>
                                    <span class="numup"></span>
                                    <span class="numdown"></span>
                                    <span class="buynum">件</span>
                                </p>
                                <p class="btn"><a id="buy" href="shopcar.html?pid=${pro.id}">立即购买</a><a id="shopcar" pid='${pro.id}' pname='${pro.name}' price='${pro.newprice}' src='${pro.src}'>加入购物车</a></p>
                            </div>
                            <div class="share">
                                <a href="javascript:/"><span class="share_1">关注</span></a>
                                <a href="javascript:/"></a><span class="wb">微博</span></a>
                                <a href="javascript:/"></a><span class="wx">微信</span></a>
                            </div>`

            }


        }
    }
    $(".left").html(sar);
    $(".right").html(scr);
    $(".name").html(srr);
    $(".left_1-1").html(str);
})
//放大镜

$(".left").mouseenter(function () {

    $(".mast").css("display", "block");
    $(".left_").css("display", "block");
})
$(".left").mouseleave(function () {
    $(".mast").css("display", "none");
    $(".left_").css("display", "none");
})
$(".left").mousemove(function (e) {
    var e = e || event;
    var X = e.pageX - $(".left").offset().left - $(".mast").width() / 2;
    var Y = e.pageY - $(".left").offset().top - $(".mast").height() / 2;

    var maxX = $(".left").width() - $(".mast").width();
    var maxY = $(".left").height() - $(".mast").height();

    X = Math.min(Math.max(0, X), maxX)
    Y = Math.min(Math.max(0, Y), maxY)
    $(".mast").css({
        "left": X,
        "top": Y
    })

    var bigX = X * $(".left_").width() / $(".mast").width();
    var bigY = Y * $(".left_").height() / $(".mast").height();
    console.log($(".left_").height() / $(".left").height())
    $("#bigimg").css({
        "left": -bigX,
        "top": -bigY
    })

})





//点击时添加商品
var index = 1;
$(".right").on("click", ".numup", function () {
    index += 1;
    $(".right .number .buy").html(index);
})
$(".right").on("click", ".numdown", function () {
    index += -1;
    $(".right .number .buy").html(index);
    if (index < 1) {
        alert("商品数量不能小于1")
        index = 1;
        $(".right .number .buy").html(index);
    }

})
//点击关注
var look = true;
$(".right").on("click", ".share_1", function () {
    if (look) {
        $(".right .share .share_1").addClass("share_2")
        alert("关注成功")
        console.log(look)
    } else {
        $(".right .share .share_1").addClass("share_1").removeClass("share_2");
        alert("取消关注成功")
    }
    look = !look;
})
//点击添加购物车时，将数据添加到localStorage

$(".right").on("click", "#shopcar", function () {
    //定义一个数组 存放多个数据
    var arr = [];
    var projson = {}; //存放一个商品的所有数据
    var flag = true; //假设值为ture 可以像数组添加数据；
    var pname = $(this).attr("pname");
    var pid = $(this).attr("pid");
    var price = $(this).attr("price");
    var psrc = $(this).attr("src");
    var count = $(".number .buy").html()
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