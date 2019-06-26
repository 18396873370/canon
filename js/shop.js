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
             str += `<li>
             <img class="hot" src="../img/hot2.140f870.png">
            <img class="newhot" src="../img/is_new2.5a16c51.png">
             <img class="shop" src="../${pro.src}">
             <p class="font">${pro.name}</p>
             <p class="active_price">会员价:<span>${pro.newprice}</span></p>
         </li>`

         } else if (pro.newprice == 0) {
             str += `<li>
             <img class="hot" src="../img/hot2.140f870.png">
            <img class="newhot" src="../img/is_new2.5a16c51.png">
             <img class="shop" src="../${pro.src}">
             <p class="font">${pro.name}</p>
             <p class="old_price">建议零售价:<span>${pro.oldprice}</span></p> 
         </li>`
         }


     }
     $("#newsgood").html(str);

 })

 //促销显示数据库
 var deff = $.ajax({
     type: "get",
     url: "../json/salse.json?_id=" + new Date().getTime(),
     async: true
 });
 deff.done(function (json) {
     var str = `<img src="../img/promotion.45c78bd.png">`;
     var pro = null;
     for (var i in json.list) {
         pro = json.list[i];
         if (pro.oldprice == pro.newprice) {
             str += `<li>
                    <img class="new" src="../img/is_new2.5a16c51.png">
                    <a class="goods" href="#">
                        <p class="font">${pro.name}</p>
                        <p><img src="../${pro.src}"></p>
                        <p class="old_price" style="text-decoration-line:none">建议零售价<span>:${pro.oldprice}</span></p>
                        <p class="active_price">&nbsp;</p>
                    </a>
                </li>`

         } else {
             str += `<li>
                    <img class="new" src="../img/is_new2.5a16c51.png">
                    <a class="goods" href="#">
                        <p class="font">${pro.name}</p>
                        <p><img src="../${pro.src}"></p>
                        <p class="old_price">建议零售价<span>:${pro.oldprice}</span></p>
                        <p class="active_price">会员价<span class="newprice">:${pro.newprice}</span></p>
                    </a>
                </li>`
         }


     }
     $("#promot").html(str);

 })
 //单反相机
 var dbff = $.ajax({
     type: "get",
     url: "../json/DSLR.json?_id=" + new Date().getTime(),
     async: true
 });
 dbff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)

         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
                 <div class="mate">
                 <div class="seemore">立即查看</div>
                 </div>
                 <a href="#" class="DSLR_content">
                 <p class="_name">${pre.name}</p>
                 <p><img src="${pre.src}"></p>
                 <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
                 </a>
                 <p class="active_price">&nbsp;</span></p>
                 </li>`
             } else {
                 str += `<li class="moresee">
                 <div class="mate">
                 <div class="seemore">立即查看</div>
                 </div>
                 <a href="#" class="DSLR_content">
                 <p class="_name">${pre.name}</p>
                 <p><img src="${pre.src}"></p>
                 <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
                 </a>
                 <p class="active_price">会员价<span>${pre.newprice}</span></p>
                 </li>`
             }
         }
     }
     $(".DSLR ul").html(str);
     $(".DSLR .module").html(srr);
     $(".DSLR ul li").eq(0).css("margin-top", 0);
     $(".DSLR ul li").eq(1).css("margin-top", 0);
     $(".DSLR ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     $(".DSLR ul li").eq(5).css("margin-right", 0);
 })
 //镜头
 var dcff = $.ajax({
     type: "get",
     url: "../json/camera_lens.json?_id=" + new Date().getTime(),
     async: true
 });
 dcff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)

         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
                <div class="mate">
                <div class="seemore">立即查看</div>
                </div>
                <a href="#" class="DSLR_content">
                <p class="_name">${pre.name}</p>
                <p><img src="${pre.src}"></p>
                <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
                </a>
                <p class="active_price">&nbsp;</span></p>
                </li>`
             } else {
                 str += `<li class="moresee">
                <div class="mate">
                <div class="seemore">立即查看</div>
                </div>
                <a href="#" class="DSLR_content">
                <p class="_name">${pre.name}</p>
                <p><img src="${pre.src}"></p>
                <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
                </a>
                <p class="active_price">会员价<span>${pre.newprice}</span></p>
                </li>`
             }
         }
     }
     $(".camera_lens ul").html(str);
     $(".camera_lens .module").html(srr);
     $(".camera_lens ul li").eq(0).css("margin-top", 0);
     $(".camera_lens ul li").eq(1).css("margin-top", 0);
     $(".camera_lens ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     $(".camera_lens ul li").eq(5).css("margin-right", 0);
 })
 //打印机及一体机

 var dfff = $.ajax({
     type: "get",
     url: "../json/imac.json?_id=" + new Date().getTime(),
     async: true
 });
 dfff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)

         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
               <div class="mate">
               <div class="seemore">立即查看</div>
               </div>
               <a href="#" class="DSLR_content">
               <p class="_name">${pre.name}</p>
               <p><img src="${pre.src}"></p>
               <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
               </a>
               <p class="active_price">&nbsp;</span></p>
               </li>`
             } else {
                 str += `<li class="moresee">
               <div class="mate">
               <div class="seemore">立即查看</div>
               </div>
               <a href="#" class="DSLR_content">
               <p class="_name">${pre.name}</p>
               <p><img src="${pre.src}"></p>
               <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
               </a>
               <p class="active_price">会员价<span>${pre.newprice}</span></p>
               </li>`
             }
         }
     }
     $(".imac ul").html(str);
     $(".imac .module").html(srr);
     $(".imac ul li").eq(0).css("margin-top", 0);
     $(".imac ul li").eq(1).css("margin-top", 0);
     $(".imac ul li .old_price").css("text-decoration-line", "none");
     $(".imac ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     $(".imac ul li").eq(5).css("margin-right", 0);
 })
 //数码摄像机
 var ddff = $.ajax({
     type: "get",
     url: "../json/DVR.json?_id=" + new Date().getTime(),
     async: true
 });
 ddff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)
         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
               <div class="mate">
               <div class="seemore">立即查看</div>
               </div>
               <a href="#" class="DSLR_content">
               <p class="_name">${pre.name}</p>
               <p><img src="${pre.src}"></p>
               <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
               </a>
               <p class="active_price">&nbsp;</span></p>
               </li>`
             } else {
                 str += `<li class="moresee">
               <div class="mate">
               <div class="seemore">立即查看</div>
               </div>
               <a href="#" class="DSLR_content">
               <p class="_name">${pre.name}</p>
               <p><img src="${pre.src}"></p>
               <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
               </a>
               <p class="active_price">会员价<span>${pre.newprice}</span></p>
               </li>`
             }
         }
     }
     $(".DVR ul").html(str);
     $(".DVR .module").html(srr);
     $(".DVR ul li").eq(0).css("margin-top", 0);
     $(".DVR ul li").eq(1).css("margin-top", 0);
     $(".DVR ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     $(".DVR ul li .old_price").eq(5).css("text-decoration-line", "none");
     $(".DVR ul li").eq(5).css("margin-right", 0);
 })
 //小型照片打印机

 var dgff = $.ajax({
     type: "get",
     url: "../json/printer.json?_id=" + new Date().getTime(),
     async: true
 });
 dgff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)
         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
              <div class="mate">
              <div class="seemore">立即查看</div>
              </div>
              <a href="#" class="DSLR_content">
              <p class="_name">${pre.name}</p>
              <p><img src="${pre.src}"></p>
              <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
              </a>
              <p class="active_price">&nbsp;</span></p>
              </li>`
             } else {
                 str += `<li class="moresee">
              <div class="mate">
              <div class="seemore">立即查看</div>
              </div>
              <a href="#" class="DSLR_content">
              <p class="_name">${pre.name}</p>
              <p><img src="${pre.src}"></p>
              <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
              </a>
              <p class="active_price">会员价<span>${pre.newprice}</span></p>
              </li>`
             }
         }
     }
     $(".printer ul").html(str);
     $(".printer .module").html(srr);
     $(".printer ul li").eq(0).css("margin-top", 0);
     $(".printer ul li").eq(1).css("margin-top", 0);
     $(".printer ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     $(".printer ul li .old_price").eq(2).css("text-decoration-line", "none");
     $(".printer ul li .old_price").eq(3).css("text-decoration-line", "none");
     $(".printer ul li .old_price").eq(4).css("text-decoration-line", "none");
     $(".printer ul li").eq(5).css("margin-right", 0);
 })
 //小型数码相机

 var dhff = $.ajax({
     type: "get",
     url: "../json/camera.json?_id=" + new Date().getTime(),
     async: true
 });
 dhff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)
         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
              <div class="mate">
              <div class="seemore">立即查看</div>
              </div>
              <a href="#" class="DSLR_content">
              <p class="_name">${pre.name}</p>
              <p><img src="${pre.src}"></p>
              <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
              </a>
              <p class="active_price">&nbsp;</span></p>
              </li>`
             } else {
                 str += `<li class="moresee">
              <div class="mate">
              <div class="seemore">立即查看</div>
              </div>
              <a href="#" class="DSLR_content">
              <p class="_name">${pre.name}</p>
              <p><img src="${pre.src}"></p>
              <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
              </a>
              <p class="active_price">会员价<span>${pre.newprice}</span></p>
              </li>`
             }
         }
     }
     $(".camera ul").html(str);
     $(".camera .module").html(srr);
     $(".camera ul li").eq(0).css("margin-top", 0);
     $(".camera ul li").eq(1).css("margin-top", 0);
     $(".camera ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     // $(".camera ul li .old_price").eq(5).css("text-decoration-line", "none");
     $(".camera ul li").eq(5).css("margin-right", 0);
 })
 //专业设备

 var djff = $.ajax({
     type: "get",
     url: "../json/DVstorm.json?_id=" + new Date().getTime(),
     async: true
 });
 djff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)
         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
             <div class="mate">
             <div class="seemore">立即查看</div>
             </div>
             <a href="#" class="DSLR_content">
             <p class="_name">${pre.name}</p>
             <p><img src="${pre.src}"></p>
             <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
             </a>
             <p class="active_price">&nbsp;</span></p>
             </li>`
             } else {
                 str += `<li class="moresee">
             <div class="mate">
             <div class="seemore">立即查看</div>
             </div>
             <a href="#" class="DSLR_content">
             <p class="_name">${pre.name}</p>
             <p><img src="${pre.src}"></p>
             <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
             </a>
             <p class="active_price">会员价<span>${pre.newprice}</span></p>
             </li>`
             }
         }
     }
     $(".DVstorm ul").html(str);
     $(".DVstorm .module").html(srr);
     $(".DVstorm ul li").eq(0).css("margin-top", 0);
     $(".DVstorm ul li").eq(1).css("margin-top", 0);
     $(".DVstorm ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     // $(".DVstorm ul li .old_price").eq(5).css("text-decoration-line", "none");
     $(".DVstorm ul li").eq(5).css("margin-right", 0);
 });
 //打印机耗材

 var dkff = $.ajax({
     type: "get",
     url: "../json/material.json?_id=" + new Date().getTime(),
     async: true
 });
 dkff.done(function (json) {
     var str = "";
     var srr = "";
     var pro = null;
     for (var i in json) {
         console.log(i)
         srr = `<img src="${i}"><span class="lookmore">查看更多</span>`
         console.log(srr)
         pro = json[i].list;
         for (var j in pro) {
             var pre = pro[j];
             if (pre.oldprice == pre.newprice) {
                 str += `<li class="moresee">
            <div class="mate">
            <div class="seemore">立即查看</div>
            </div>
            <a href="#" class="DSLR_content">
            <p class="_name">${pre.name}</p>
            <p><img src="${pre.src}"></p>
            <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
            </a>
            <p class="active_price">&nbsp;</span></p>
            </li>`
             } else {
                 str += `<li class="moresee">
            <div class="mate">
            <div class="seemore">立即查看</div>
            </div>
            <a href="#" class="DSLR_content">
            <p class="_name">${pre.name}</p>
            <p><img src="${pre.src}"></p>
            <p class="old_price">建议零售价<span>${pre.oldprice}</span></p>
            </a>
            <p class="active_price">会员价<span>${pre.newprice}</span></p>
            </li>`
             }
         }
     }
     $(".material ul").html(str);
     $(".material .module").html(srr);
     $(".material ul li").eq(0).css("margin-top", 0);
     $(".material ul li").eq(1).css("margin-top", 0);
     $(".material ul li").eq(2).css({
         "margin-top": 0,
         "margin-right": 0
     });
     $(".material ul li img").eq(4).css({
         "height": 100,
         "width": 100,
         "margin-top": 30
     });
     $(".material ul li .old_price").eq(0).css("text-decoration-line", "none")
     $(".material ul li .old_price").eq(1).css("text-decoration-line", "none")
     $(".material ul li .old_price").eq(3).css("text-decoration-line", "none")
     $(".material ul li").eq(5).css("margin-right", 0);
 });
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
                 str += `<li class="swiper_slide">
                 <p class="text">${pre.name}</p>
                 <p class="old_price">建议零售价：<span>${pre.oldprice}</span></p>
                 <p class="active_price">&nbsp;</span></p>
                 <img src="${pre.src}">
                 <span class="look">立即查看</span>
             </li>`
             } else {
                 str += `<li class="swiper_slide">
                 <p class="text">${pre.name}</p>
                 <p class="old_price">建议零售价：<span>${pre.oldprice}</span></p>
                 <p class="active_price">会员价: <span>${pre.newprice}</span></p>
                 <img src="${pre.src}">
                 <span class="look">立即查看</span>
             </li>`
             }
         }
     }
     $(".center ul").html(str);

     //$(".material ul li .old_price").eq(0).css("text-decoration-line", "none")
     //$(".material ul li .old_price").eq(1).css("text-decoration-line", "none")
     //$(".material ul li .old_price").eq(3).css("text-decoration-line", "none")
     //$(".material ul li").eq(5).css("margin-right", 0);
 });