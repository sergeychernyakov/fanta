(function($) {
var windowWidth = $(window).width();
var windowWidth_1920 = $('.page-body-cntlr').width();


$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});

if( $('.hamburger-icon').length ){
  $('.hamburger-icon').click(function(){
    $('body').toggleClass('allWork');
  });
}
if(windowWidth <=767){
    if( $('ul > li.menu-item-has-children').length ){
      $('ul > li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
     });
    }
}
	
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};
$(window).load(function() {
//matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };
  if($('.mHc6').length){
    $('.mHc6').matchHeight();
  };
});

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

/* slider custom prev and next control */
var responsiveSlider = $('.responsive-slider-cntlr').length;
if( windowWidth > 0 && responsiveSlider < 2 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else if( windowWidth > 639 && responsiveSlider < 3 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else if( windowWidth > 991 && responsiveSlider < 4 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else if( windowWidth > 1199 && responsiveSlider < 5 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else{

}





/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


/* innerpage buttons */
$(".dft-fl-btn" ).each(function( index ) {
  var color = $(this).data('color');
  var bg = $(this).data('bg');
  var border = $(this).data('border');
  $(this).css('color', color);
  $(this).css('background', bg);
  $(this).css('border-color', border);
  $(this).on('mouseenter', function(){
    if( bg != ''){
      $(this).css('background', 'transparent');
      $(this).css('color', bg);
    }
    if( bg == ''){
      $(this).css('background', border);
      $(this).css('color', '#fff');
    }
  });
  $(this).on('mouseleave', function(){
    if( bg != ''){
      $(this).css('background', bg);
      $(this).css('color', color);
    }
    if( bg == ''){
      $(this).css('background', 'transparent');
      $(this).css('color', border);
    }
  });
});



if(windowWidth > 1){
  if( $('.src-bx-hvr').length ){
    $('.hdr-search-icon').click(function(){
      $('.src-bx-hvr').slideDown();  
    });
    $('.srch-humbergar').click(function(){
      $('.src-bx-hvr').slideUp();
    });
  }
}

if (windowWidth <= 991) {
    $('.ftr-menu-col h6').on('click', function(){
      $(this).toggleClass('active');
      $(this).parent().siblings().find('h6').removeClass('active');
      $(this).parent().find('.ftr-menu').slideToggle(300);
      $(this).parent().siblings().find('.ftr-menu').slideUp(300);
    });
}



if( $('.fs-accordion-wrap').length ){
  $('.fs-accordion-title').on('click', function(){
    $(this).toggleClass('active');
    $('.fs-accordion').toggleClass('active');
    $(this).parents('.fs-accordion-wrap ul li').siblings().find('.fs-accordion, .fs-accordion-title').removeClass('active');    
    $(this).parents('.fs-accordion-wrap ul li').find('.fs-accordion-des').slideToggle(300);
    $(this).parents('.fs-accordion-wrap ul li').siblings().find('.fs-accordion-des').slideUp(300);
  });
}


$('.fs-clickable-btns-inr a').on('click', function(e){ 
  e.preventDefault();
    $(this).parents('.btn-click').toggleClass('active');
    $(this).parents('.clickable-btn').siblings().find('.btn-click').removeClass('active'); 
    $(this).parents('.clickable-btn').find('.btn-click-des').slideToggle(300);
    $(this).parents('.clickable-btn').siblings().find('.btn-click-des').slideUp(300);  
  });





$('.select-2-cntlr').select2();

if( $('.hmIntroFeaSlider').length ){
    $('.hmIntroFeaSlider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 700,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 479,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
}

if($('.HotDropsSlider').length) {
  var $slider = $('.HotDropsSlider');
  var $progressBar = $('.progressbar');  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
  });
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 400,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });  
};
var responsiveSlider = $('.hot-drops-slider-item').length;
if( windowWidth > 0 && responsiveSlider < 4 ){
    $('.progressbar').hide();
    $('.HotDropsSlider .slick-list').css('padding-right', 0);
}else if( windowWidth > 639 && responsiveSlider < 3 ){
    $('.progressbar').hide();
    $('.HotDropsSlider .slick-list').css('padding-right', 0);
}else if( windowWidth > 991 && responsiveSlider < 4 ){
    $('.progressbar').hide();
    $('.HotDropsSlider .slick-list').css('padding-right', 0);
}else if( windowWidth > 1199 && responsiveSlider < 5 ){
    $('.progressbar').hide();
    $('.HotDropsSlider .slick-list').css('padding-right', 0);
}else{

}



new WOW().init();

})(jQuery);