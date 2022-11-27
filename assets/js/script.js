// HAMBURGER
$(function () {
    $("#js-btn").on("click", function () {
      $(".js-menu-btn").toggleClass("active");
      $("#js-nav").toggleClass("show");
      $('body').toggleClass('open');
    });
    $(".cross").on("click",function() {
        $("#js-nav").removeClass("show");
        $('body').removeClass('open');
    })
});

//*============= FOLLOWING =============*/
jQuery(function($) {
    var $win = $(window),
        $nav = $('.header'),
        navPos = $nav.offset().top,
        fixedClass = 'fixed';
    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > navPos + 80 ) {
        $nav.addClass(fixedClass);
      } else {
        $nav.removeClass(fixedClass);
      }
    });
});
  

// downMenu
$(function() {
    $(".click-1").on("click",function() {
        $(".click-1").toggleClass("rotate")
        $(".down-1").toggleClass("active");
    });
    $(".click-2").on("click",function() {
        $(".click-2").toggleClass("rotate")
        $(".down-2").toggleClass("active");
    });
    $(".click-3").on("click",function() {
        $(".click-3").toggleClass("rotate")
        $(".down-3").toggleClass("active");
    });
    $(".click-4").on("click",function() {
        $(".click-4").toggleClass("rotate")
        $(".down-4").toggleClass("active");
    });
    $(".click-5").on("click",function() {
        $(".click-5").toggleClass("rotate")
        $(".down-5").toggleClass("active");
    });
    $(".click-6").on("click",function() {
        $(".click-6").toggleClass("rotate")
        $(".down-6").toggleClass("active");
    });
});

// SCROLLREVEAL
ScrollReveal().reveal('.reveal', {
    duration: 1000, 
    origin: 'top', 
    distance: '50px',  
});


// a tag jump
let windowWidth = $(window).width();
let pcWidth = 904;

// moveTop
$(function() {
	$('a[href^="#"]').click(function(){
		if(windowWidth <= pcWidth) {
			$("#js-nav").removeClass("show");
	  		$('body').removeClass('open');
		}
    // 移動先を50px上にずらす
    var adjust = 110;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
		console.log(target);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});