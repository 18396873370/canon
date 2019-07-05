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



//放大镜
$("#smaill").mouseenter(function () {
    $(".mast").css("display", "block");
    $(".left_").css("display", "block");
})
$("#smaill").mouseleave(function () {
    $(".mast").css("display", "none");
    $(".left_").css("display", "none");
})
$("#smaill").mousemove(function (e) {
    var e = e || event;
    var X = e.pageX - $("#smaill").offset().left - $(".mast").width() / 2;
    var Y = e.pageY - $("#smaill").offset().top - $(".mast").height() / 2;

    var maxX = $("#smaill").width() - $(".mast").width();
    var maxY = $("#smaill").height() - $(".mast").height();

    X = Math.min(Math.max(0, X), maxX)
    Y = Math.min(Math.max(0, Y), maxY)
    $(".mast").css({
        "left": X,
        "top": Y
    })

    var bigX = X * $(".left_").width() / $(".mast").width();
    var bigY = Y * $(".left_").height() / $(".mast").height();
    console.log($(".left_").height() / $("#smaill").height())
    $("#bigimg").css({
        "left": -bigX,
        "top": -bigY
    })

})