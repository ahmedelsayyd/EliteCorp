/*global $, console, alert*/
$(function () {

  'use strict';


  $("body").niceScroll({
    cursorcolor :"#08526d",
    cursorwidth :"8",
    cursorminheight : "80"
  });



  //reset header slider
  var headerHeight = $(window).height() - ($('.upper-bar').innerHeight() + $('.my-navbar').innerHeight());
  $('.header, .carousel-item').height(headerHeight);
  $(window).resize(function () {
    $('.header').height(headerHeight);
  });
  /*$(window).resize(function () {
  var winH   = $(window).height(),
  upperH = $(".upper-bar").innerHeight(),
  navH   = $(".navbar").innerHeight();
  $(".slide, .carousel-item").height(winH - (upperH + navH));*/








  //  Start scroll frome navbar links to page sections
    $('.my-navbar ul li a').on('click', function (e) {
      e.preventDefault();
      if (! $(this).parent().hasClass('active')) {
        $(this).parent().addClass('active').siblings().removeClass('active');
      }
      $('html, body').animate({scrollTop : ($($(this).data('scroll')).offset().top) + 1}, 1300);
    });




    //start scroll to top icons
    var scrollToTop = $('.scroll-to-top');
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1800) {

        if (scrollToTop.is(':hidden')) {
          scrollToTop.fadeIn(500);
        }

      } else {
        scrollToTop.fadeOut(500);
      }
    });

    scrollToTop.on('click', function () {

      $('html, body').animate({scrollTop : '0'}, 1300);
    });






    //start featured_work (filter image)

    $('.featuers ul li').on('click', function () {

      if (!$(this).hasClass('active')) {
        $(this).addClass('active').siblings().removeClass('active');
      }

      if ($(this).data('filter') === '.all') {

        $('.featuers .work .col-sm-6').css('opacity','1')
      } else {
        $('.featuers .work .col-sm-6').css('opacity','.2')
        $($(this).data('filter')).css('opacity','1')
      }
    });

    // $('.featuers ul li').on('click', function () {
    //
    //   if (!$(this).hasClass('active')) {
    //     $(this).addClass('active').siblings().removeClass('active');
    //   }
    //
    //   if ($(this).data('filter') === '.all') {
    //
    //     $('.featuers .work .col-sm-6').fadeIn(1000);
    //   } else {
    //
    //     $('.featuers .work .col-sm-6').fadeOut(1000).filter($(this).data('filter')).fadeIn(1000);;
    //   }
    // });


});
