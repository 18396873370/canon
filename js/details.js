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