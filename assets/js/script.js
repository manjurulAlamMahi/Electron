$(function () {
  'use strict';
  
  // quantity - start
  let qnt_val = $('#qnt').val();
  $('.input_number_decrement').on('click',function(){
      document.getElementById('qnt').value --;
  });

  $('.input_number_increment').on('click',function(){
      document.getElementById('qnt').value ++;
  });

  $('.banner_slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  });

  $('.category_slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<i class="fas fa-arrow-right cate_next"></i>',
    prevArrow: '<i class="fas fa-arrow-left cate_prev"></i>',
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.rv_silder_carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.rv_silder_nav'
  });
  $('.rv_silder_nav').slick({
      dots: false,
      arrows: false,
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      verticalSwiping: true,
      asNavFor: '.rv_silder_carousel',
      responsive: [
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 2,
                  verticalSwiping: false,
              }
          },
      ]
  });

  $('.clients_slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.sponsers_row').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.news_slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });


});