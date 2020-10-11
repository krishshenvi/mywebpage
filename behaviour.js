
$(document).ready(function(){


      $(window).scroll( function(){
        $('.fadein').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_element ){
         $(this).animate({'opacity':'1'},1000);
         }
              });
          });
    $(".carousel-slide").carousel({
        interval: 2000,
        cycle: true,
        pause: false
      })
    $(".nav-item").hover(function(){
      $(this).css("background-color", "lightcoral");
      }, function(){
      $(this).css("background-color", "");
    });

    
    
  });
