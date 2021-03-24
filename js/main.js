 $(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
  });
 });

 $(function () {
  'use strict'

  $("[data-trigger]").on("click", function () {
      var trigger_id = $(this).attr('data-trigger');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
      }
  });

  $(".btn-close").click(function (e) {
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  });


 });


 jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.cd-top');
  
  //hide or show the "back to top" link
  $(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) {
  $back_to_top.addClass('cd-fade-out');
  }
  });
  
  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
    scrollTop: 0 ,
       }, 
        scroll_top_duration
       );
    });
 });

//  function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
//  }
