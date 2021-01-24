$(document).ready(function(){
    $("#toggle").click(function(){
      $(".menu").slideToggle(3000);
    });
  });

$(document).ready(function () {
    $(".drop").click(function () {
        $(".header-menu__main").toggle(3000);
    })
});



jQuery(document).ready(function(){
  jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() != 0) {
         jQuery('#back_to_top').fadeIn();
      } else {
         jQuery('#back_to_top').fadeOut();
      }
  });

  jQuery('#back_to_top').click(function() {
      jQuery('body,html').animate({scrollTop: 0}, 1000);
  });
});