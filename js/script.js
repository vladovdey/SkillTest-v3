//Костыль код 1.0
(function($) {
  $(".select_mountain").click(function() { //select mountain event listener
    var mountainIndex = $(this).index(); //number of clicked button
  
    $(".select_mountain").each(function(){ //search button which selected before
      if($(this).hasClass("selected")){
        $(this).removeClass("selected"); // and remove selected class
      }
    });
  
    $(".schedule").each(function(){ //search schedule with same button index 
      if($(this).index()==mountainIndex){
        $(".mountain-schedule0").css('background-image', 'url("./img/mountain_selectbc'+mountainIndex+'.jpg")'); //replace background image 
        $(this).fadeIn(500); //show schedule
      }else{
        $(this).fadeOut(600); //hide schedule
      }
    });
  
    $(this).addClass("selected"); // add selected class to clicked mountain selector
    
    // if($(this).hasClass("selected")){
    //   $(this).removeClass("selected");
    //   $("sel")
    // }
      // $(this).parent().addClass("selected");
      // $("#mount2").parent().removeClass("selected");
      // $(".mountain-schedule").css('background-image', 'url("./img/mountain_selectbc.jpg")');
      // $("#schedule_mount1").fadeIn(500);
      // $("#schedule_mount2").fadeOut(600);
    });
    
    // $("#mount2").click(function() {
    //   $(this).parent().addClass("selected");
    //   $("#mount1").parent().removeClass("selected");
    //   $(".mountain-schedule").css('background-image', 'url("./img/mountain_selectbc2.jpg")');
    //   $("#schedule_mount1").fadeOut(500);
    //   $("#schedule_mount2").fadeIn(600);
    // });
  
  
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
          console.log("dsf");
  
          if(scrollTop > 0){
              $sticky.addClass('is-fixed');
          }else{
              $sticky.removeClass('is-fixed');
          }
      });
})(jQuery);

