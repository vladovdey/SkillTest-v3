$("#mount1").click(function() {
    $(this).parent().addClass("selected");
    $("#mount2").parent().removeClass("selected");
    $(".mountain-schedule").css('background-image', 'url("./img/mountain_selectbc.jpg")');
    $("#schedule_mount1").fadeIn(500);
    $("#schedule_mount2").fadeOut(600);
  });
  
  $("#mount2").click(function() {
    $(this).parent().addClass("selected");
    $("#mount1").parent().removeClass("selected");
    $(".mountain-schedule").css('background-image', 'url("./img/mountain_selectbc2.jpg")');
    $("#schedule_mount1").fadeOut(500);
    $("#schedule_mount2").fadeIn(600);
  });


  $(".menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
  });
  
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
    
    $(window).scroll(function(e){
        e.preventDefault();
        
        var scrollTop = $(window).scrollTop();
        
        if(scrollTop > stickyOffsetTop){
            $sticky.addClass('is-fixed');
        }else{
            $sticky.removeClass('is-fixed');
        }
    });