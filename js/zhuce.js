var flag = false;
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var lockflag = true;
var W = null;
$(".unlock_1").mousedown(function (e) {

    var e = e || event;
    W = e.pageX - $(this).offset().left + $(".unlock1").offset().left - $(this).width();
    if (lockflag) {


        $(document).mousemove(function (e) {
            var e = e || event;
            var L = e.pageX - W;
            var maxL = $(".unlock1").width() - $(".unlock_1").width();
            L = Math.min(Math.max(0, L), maxL)
            $(".unlock_1").css("left", L);
            //滑动模块检测
            if (parseInt($(".unlock_1").css("left")) == maxL) {
                flag = true;
                $(".unlock_1").children("img").attr("src", "../img/对号.png");
                $(".unlock_1").css("background-color", "#78d02e");
                $(".unlock-min1").html("认证成功");
                lockflag = false;
            } else {
                flag = false;
            };
            console.log(flag)
        })
    }

    $(document).mouseup(function () {
        $(this).unbind("mousemove");
    });
    return false;
})

var reg = /^1[35789]\d{9}$/;
var rag = /^.{8,16}$/;
var uname = null;
var upwd = null;
//手机号失去焦点时验证
$("#uname").blur(function () {
    uname = $("#uname").val();
    if (reg.test(uname)) {
        flag1 = true;
    } else {
        $("#uname").val("").focus();
        flag1 = false;
    }
    console.log(flag)
})

//获取验证码；
$("#text1").click(function () {
    $(this).html(rand(1000, 9999));
})
$("#text").blur(function () {
    if ($(this).val() == $("#text1").html()) {
        flag2 = true;
    } else {
        flag2 = false;
        alert("验证码输入错误")
    }
    console.log(flag)
})
//密码第一次验证
$("#upwd").blur(function () {
    upwd = $(this).val();
    if (rag.test(upwd)) {
        flag3 = true;
    } else {
        alert("密码位数不对")
        flag3 = false;
    }
    console.log(flag)
})
//密码第二次验证
$("#upwd1").blur(function () {
    var upwd1 = $("#upwd").val();
    if ($("#upwd1").val() == upwd1) {
        flag4 = true;
    } else {
        alert("密码格式不对")
        flag4 = false;
    }
    console.log(flag)
})
//复选框
$("#check").click(function () {
    if ($("#check").prop("checked")) {
        flag5 = true;
    } else {
        flag5 = false;
    }
    console.log(flag)
})

// 存入到cookie;


$(".register").on("click", ".btn", function () {
    if (flag = flag1 = flag2 = flag3 = flag4 = flag5 == true) {
        alert("注册成功")
        var _json = {
            "name": uname,
            "pwd": upwd
        }
        $(".once").css("display", "none");
        $(".empower").css("display", "block");
        console.log(upwd)
        $.cookie("userinfo", JSON.stringify(_json));
        lockflag = true;
    }
});
//关闭按钮
$(".empower").on("click", "img", function () {
    $(".empower").css("display", "none");
    $(".once").css("display", "block");
});
//同意按钮
$(".empower").on("click", ".button", function () {
    $(".register").css("display", "none");

});