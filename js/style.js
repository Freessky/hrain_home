/* 搜索框 */
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        $(".close").show()
        $("#topMenuStyleLine").hide();
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        $(".close").hide();
        $("#topMenuStyleLine").show();
        // 清空input框
        container.find('.search-input').val('');
        // 当我们按下关闭时清除和隐藏结果容器
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}


/* 固定头部 */
$(function(){
    // 得到导航对象
    var nav = $("#main_topnav");
    // 得到窗口对象
    var win = $(window);
    // 得到document文档对象
    var sc = $(document);
    var main_top = $("#main_top");
    var main_bottom = $("#main_bottom");
    var search = $("#search-wrapper");
    var topnav = $("#topnav");
    var item = $(".nav-item");
    win.scroll(function(){
        if(sc.scrollTop() >= 170){
            nav.addClass('fixednav');
            main_top.css("display","none");
            main_bottom.addClass('logo_bottom');
            main_bottom.removeClass('main_bottom');
            search.css("top","24%");
            topnav.css("margin-top","5px");
            nav-item.css("height","24px");
        }else{
            nav.removeClass('fixednav');
            main_top.css("display","block");
            main_bottom.removeClass('logo_bottom');
            main_bottom.addClass('main_bottom');
            search.css("top","32%");
            topnav.css("margin-top","35px");
            nav-item.css("height","44px");
        }
    })
})


/* banner */
$(function(){
    //$(".img_gallery").hover(function(){
    //    $("#btn_prev,#btn_next").fadeIn()
    //},function(){
    //    $("#btn_prev,#btn_next").fadeOut()
    //});

    var timer = setInterval(function(){
        $("#btn_next").click();
    }, 5000);

    $(".img_gallery").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        },5000);
    });

    $dragBln = false;
    $(".slide_img").touchSlider({
        flexible : true,
        speed : 200,
        btn_prev : $("#btn_prev"),
        btn_next : $("#btn_next"),
        paging : $(".point a"),
        counter : function (e){
            $(".point a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
            $(".img_font span").hide().eq(e.current-1).show();//图片文字切换
        }
    });

    $(".slide_img").bind("mousedown", function() {
        //$("#btn_next").addClass("grabbing");
        $(".slide_img").addClass("grabbing");
        $dragBln = false;
    });

    $(".slide_img").bind("mouseup", function() {
        //$("#btn_next").removeClass("grabbing");
        //$("#btn_next").addClass("grab");
        $(".slide_img").removeClass("grabbing");
        $(".slide_img").addClass("grab");
    });

    $(".slide_img").bind("dragstart", function() {
        $dragBln = true;
    });

    $(".slide_img a").click(function(){
        if($dragBln) {
            return false;
        }
    });


    $(".slide_img").bind("touchstart",function(){
        clearInterval(timer);
    }).bind("touchend", function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        }, 5000);
    });

})


/* 手抓改变滚动条 */
$(function(){
    function condi(parm,contro){
        $(parm).hover(function(){
            $(contro).bind("mousedown", function() {
                $(contro).addClass("grabbing");
            });
            $(contro).bind("mouseup", function() {
                $(contro).removeClass("grabbing");
                $(contro).addClass("grab");
            });
            $(parm).css("border-right","1px solid #ddd");
        },function(){
            $(parm).css("border-right","none");
        });
        $(parm).niceScroll(contro,{cursorcolor:"#1570A7",cursoropacitymax:0.7,touchbehavior:true});
    }
    condi("#boxscroll2","#contentscroll2");
    condi("#boxscroll3","#contentscroll3");
    condi("#boxscroll4","#contentscroll4");
});

/* 弹框关闭 */
$(function(){
    $(".hoverIcon").click(function(){
        $(".mfp-bg").show();
        $(".mfp-wrap").show();
    })
});
$(function(){
    $(".mfp-wrap").click(function(){
        $(".mfp-bg").hide();
        $(".mfp-wrap").hide();
    })
});




/* tab选项卡 */
$(function(){
    $("#tab_con").hide();
    $(".sc_tabs_titles li:first").addClass("ui-tabs-active").show();
    $("#tab_con:first").show();

    $("ul.sc_tabs_titles li").click(function(){
        $("ul.sc_tabs_titles li").removeClass("ui-tabs-active");
        $(this).addClass("ui-tabs-active");
        $(".sc_tabs_content").hide();
        //找到所属属性值来识别活跃选项卡和内容
        var activeTab = $(this).find("a").attr("href");
        //使内容消失
        $(activeTab).fadeIn();
        return false;
    });
});


/* 上下收缩 */
$(function(){
    $('.sc_accordion_item').click(function(){
        var j = $(this).index();
        $(this).siblings(".sc_accordion_item").removeClass('sc_active').children('.sc_accordion_content').hide();
        $(this).addClass('sc_active').children('.sc_accordion_content').show();
        $('.sc_accordion_content').slideUp().eq(j).slideDown();
    });
});


/* 二级页的锚点选项卡 */


























