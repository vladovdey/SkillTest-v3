//Костыль код 1.0
(function ($) {
//schedule changer
  $(".select_mountain").click(function () { //select mountain event listener
    var mountainIndex = $(this).index(); //number of clicked button

    $(".select_mountain").each(function () { //search button which selected before
      if ($(this).hasClass("selected")) {
        $(this).removeClass("selected"); // and remove selected class
      }
    });

    $(".schedule").each(function () { //search schedule with same button index 
      if ($(this).index() == mountainIndex) {
        $(".mountain-schedule0").css('background-image', 'url("./img/mountain_selectbc' + mountainIndex + '.jpg")'); //replace background image 
        $(this).fadeIn(500); //show schedule
      } else {
        $(this).fadeOut(600); //hide schedule
      }
    });
    $(this).addClass("selected"); // add selected class to clicked mountain selector
  });
//end of schedule changer

//scroll to category
  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
//end of scroll to category

//sticky menu
  var $sticky = $('.header');

  $(window).scroll(function (e) {
    e.preventDefault();

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
      $sticky.addClass('scrolled');
    } else {
      $sticky.removeClass('scrolled');
    }
  });
//end of sticky menu
  
//carousel plugin
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
//end of carousel plugin

//popup
  $(".popup_item").click(function () {  
    var src = $(this).children().attr("src"); //find image source
    
    //creating popup block(div>img) 
    var $popup = $("<div class='popup'></div>");
    var $img = $("<img src="+src+">");
    $popup.append($img);

    //add popup block to about-history section
    $('.about-history').append($popup);
    $popup.fadeIn('fast');// show popup

    //scrolling animation 
    $("html,body").animate({scrollTop: $($img).offset().top-100}, 1000);
    $("body").css('overflow', 'hidden');

    //hide popup
    $(".popup").click(function() {
      $popup.fadeOut('fast').remove();
      $("body").css('overflow', 'auto');
    });
  //end of popup
  });

})(jQuery);