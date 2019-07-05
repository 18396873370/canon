$("#registe").click(function () {
    $(".register").css("display", "block");
})
$(".close").click(function () {
    $(".register").css("display", "none");
})
$("#registe1").click(function () {
    $(".register1").css("display", "block");
})
$(".close1").click(function () {
    $(".register1").css("display", "none");
})
var W = null;
var tflag = false;
var lockflag = false;
//
//用户登入
var user = JSON.parse($.cookie("userinfo"));
$("#yhphone").blur(function () {
    var yhphone = $(this).val();
    console.log(user.name)
    console.log(yhphone)
    console.log(user.pwd)
    if (yhphone == user.name) {
        lockflag = true;
        console.log(lockflag)
        $(".unlock_").mousedown(function (e) {
            var e = e || event;
            W = e.pageX - $(this).offset().left + $(".unlock").offset().left - $(this).width();
            if (lockflag == true) {
                $(document).mousemove(function (e) {
                    var e = e || event;
                    var L = e.pageX - W;
                    var maxL = $(".unlock").width() - $(".unlock_").width();
                    L = Math.min(Math.max(0, L), maxL)
                    $(".unlock_").css("left", L);
                    if (parseInt($(".unlock_").css("left")) == maxL) {
                        $(".unlock_").children("img").attr("src", "../img/对号.png");
                        $(".unlock_").css("background-color", "#78d02e");
                        $(".unlock-min").html("认证成功");
                        tflag = true;
                        lockflag = !lockflag;
                        console.log(lockflag + "1")
                    }
                    // console.log(lockflag)
                })
                // }
                $(document).mouseup(function () {
                    $(this).unbind("mousemove");

                });
                return false;
            }

        })

    } else {
        $(".msg").fadeIn(3000).fadeOut(2000)
        $("#yhphone").val("").focus();
    }






    //登入
    $(".list").on("click", "button", function () {
        if (tflag == true) {
            var yhpwd = $("#yhpwd").val();
            if (yhpwd == user.pwd) {
                alert("登入成功")

                location.href = "index.html";
            } else {
                alert("密码错误")
                $("#yhpwd").val("").focus();
                $(".unlock_").animate({
                    "left": 0
                }, 1000);
                $(".unlock_").children("img").attr("src", "../img/箭头.png");
                $(".unlock_").css("background-color", "#bf2318");
                $(".unlock-min").html("轻按住滑块，拖动到最右边");
                tflag = false;
                lockflag = true;
            }

        }
    })

});