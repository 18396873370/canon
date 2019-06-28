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
    var pro = null;
    for (var i in json) {
        pro = json[i]
        //console.log(json[i].id);
        if (pro.id == pid) {
            if (pro.newprice == pro.oldprice) {
                srr += ` <li class="sheet "></li>
                <li class="names">${pro.name}</li>`
                sar += `<div id="smaill">
                <div class="mast"></div>
                <img src="${pro.src}">
                </div>
            <dl>
                <dd><img src="${pro.src}"> </dd>
            </dl>
            <div class="left_">
                <img id="bigimg" src="${pro.src}">
            </div>`
                scr += `<h2>${pro.name}</h2>
                <p class="prompting">赠品优酷年卡，在订单完成7天后，请自行联系客服领取</p>
                <div class="date">
                    <p class="new"></p>
                    <p class="old"><span class="old-price">建议零售价：</span><span class="old_money">${pro.oldprice}</span><span
                            class="advise">库存紧张</span></p><p class="freight">运费规则：<a href="javascript:/">查看规则</a></p>
                            <p class="warn">从<span class="area">上海</span>发货，除周日及法定节假日外，当天15：30前完成支付，当日发货</p>
                            <dl class="style">
                                <dt>选择版本：</dt>
                                <dd>4411545-6526</dd>
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
                sar += `<div id="smaill">
                <div class="mast"></div>
                <img src="${pro.src}">
                </div>
            <dl>
                <dd><img src="${pro.src}"> </dd>
            </dl>
            <div class="left_">
                <img id="bigimg" src="${pro.src}">
            </div>`
                scr += `<h2>${pro.name}</h2>
                <p class="prompting">赠品优酷年卡，在订单完成7天后，请自行联系客服领取</p>
                <div class="date">
                    <p class="new"><span class="new-price">会员价：</span>${pro.newprice}</p>
                    <p class="old"><span class="old-price">建议零售价：</span><span class="old-money">${pro.oldprice}</span><span
                            class="advise">库存紧张</span></p><p class="freight">运费规则：<a href="javascript:/">查看规则</a></p>
                            <p class="warn">从<span class="area">上海</span>发货，除周日及法定节假日外，当天15：30前完成支付，当日发货</p>
                            <dl class="style">
                                <dt>选择版本：</dt>
                                <dd>4411545-6526</dd>
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