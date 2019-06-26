var str = $.cookie("userinfo");
if (str) {
    var userjson = JSON.parse(str);
    $("#yhimg").html(userjson.name);
    $(".login").css("margin-left", 137);
    var img = `<img src='../img/用户.png'>`
    var imgs = `<img src="../img/1111111.png">`
    $(".yhimg").html(img);
    $(".jt").html(imgs);
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
    $(".login").css("margin-left", 170);
    $(".yhimg").html("");
    $(".jt").html("");
}