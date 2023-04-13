!(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 100, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('#header').hasClass('mobile-nav-active')) {
          $('#header').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fal fa-bars far fal fa-times');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });



  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('#header').append($mobile_nav);
    $('#header').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fal fa-bars"></i></button>');
    $('#header').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('#header').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fal fa-bars far fal fa-times');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .dropdown > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fal fa-bars far fal fa-times');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }


  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });


  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('header-scrolled');
    } else {
      $('header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100, 'easeInOutExpo');
    return false;
  });

})(jQuery);




  var swiper = new Swiper(".restaurant", {
    grabCursor: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 992px
      576: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 7,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 9,
        spaceBetween: 10
      },
    }
  });

  var swiper = new Swiper(".offers", {
    grabCursor: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 992px
      740: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      },
    }
  });


  var swiper = new Swiper(".cover", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,

  });


  $(".remove").click(function () {
    $(this).parent().remove(); 
  })