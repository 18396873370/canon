var W = null;
var tflag1 = false;
var tflag2 = false;
var tflag3 = false;
var tflag4 = false;
var tflag5 = false;
var rag = /^.{8,16}$/;
var uname1 = null;
var upwd1 = null;
var lockflag = true;
//验证手机号是否存在
var reg = /^1[35789]\d{9}$/;
var userjosn = JSON.parse($.cookie("userinfo"));
$("#uname1").blur(function () {

    uname1 = $("#uname1").val();
    if (reg.test(uname1)) {
        if (uname1 == userjosn.name) {
            tflag1 = true;
        } else {
            alert("用户名不存在")
        }
    } else {
        $("#uname1").val("").focus();
        tflag1 = false;
    }
    console.log(flag)
})
//验证码验证
$(".unlock_2").mousedown(function (e) {
    var e = e || event;
    W = e.pageX - $(this).offset().left + $(".unlock2").offset().left - $(this).width();
    if (lockflag) {
        $(document).mousemove(function (e) {
            var e = e || event;
            var L = e.pageX - W;
            var maxL = $(".unlock2").width() - $(".unlock_2").width();
            L = Math.min(Math.max(0, L), maxL)
            $(".unlock_2").css("left", L);
            if (parseInt($(".unlock_2").css("left")) == maxL) {
                tflag2 = true;
                $(".unlock_2").children("img").attr("src", "../img/对号.png");
                $(".unlock_2").css("background-color", "#78d02e");
                $(".unlock-min2").html("认证成功");
                lockflag = false;
            } else {
                tflag2 = false;
            };
        })
    }
    $(document).mouseup(function () {
        $(this).unbind("mousemove");
    });
    return false;
})
//验证码验证
$("#text3").click(function () {
    $(this).html(rand(1000, 9999));
})
$("#text2").blur(function () {
    if ($(this).val() == $("#text3").html()) {
        tflag3 = true;
    } else {
        tflag3 = false;
        alert("验证码输入错误")
    }
})
//新密码确认
$("#newpwd").blur(function () {
    upwd1 = $(this).val();
    if (rag.test(upwd1)) {
        tflag4 = true;
    } else {
        alert("密码位数不对")
        tflag4 = false;
    }
    console.log(flag)
})
//密码第二次验证
$("#oldpwd").blur(function () {
    var upwd2 = $("#newpwd").val();
    if ($("#oldpwd").val() == upwd2) {
        tflag5 = true;
    } else {
        alert("两次密码不一致")
        tflag5 = false;
    }

})
//修改密码

// 存入到cookie;
$(".register1").on("click", "button", function () {
    if (tflag1 = tflag2 = tflag3 = tflag4 = tflag5 == true) {
        alert("修改成功")
        var _json = {
            "name": uname1,
            "pwd": upwd1
        }
        console.log(upwd)
        $.cookie("userinfo", JSON.stringify(_json));
        lockflag = true;
        $(".register1").css("display", "none");
    }
});