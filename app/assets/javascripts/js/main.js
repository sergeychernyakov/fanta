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
    if( $('.fs-xs-mobile-menu ul > li.menu-item-has-children').length ){
      $('.fs-xs-mobile-menu ul > li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
     });
    }
}
if(windowWidth <=991){
    if( $('.logged-xs-mobile-menu ul > li.menu-item-has-children').length ){
      $('.logged-xs-mobile-menu ul > li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
     });
    }
}

// Start of Jahir Uddin
if( $('.form-cntnt-cntlr-module .form-wrp-module').length ){
  $('.form-cntnt-cntlr-module .cnt-form-btn').on('click', function(){
    $('.form-cntnt-cntlr-module .input-field input[required],.form-cntnt-cntlr-module .input-field select[required],.form-cntnt-cntlr-module .input-field textarea').parents('.input-field').addClass('required-has-error');
    $('.form-cntnt-cntlr-module .input-field input[required],.form-cntnt-cntlr-module .input-field select[required],.form-cntnt-cntlr-module .input-field textarea').addClass('required-error');
  });
}


if( $('.required-error').length ){
  $('.required-error').on('click', function(){
    $(this).parents('.input-field').removeClass('required-has-error');
  });
}

if($('#file2').length){
  $('#file2').change( function(e){
    var fileValue2 = e.target.files[0].name;
    $(this).next().addClass("placeholder-none");
    var image = document.getElementById('upload-image');
    
    var extension = fileValue2.substr(fileValue2.lastIndexOf("."));
    var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    var isAllowed = allowedExtensionsRegx.test(extension);
    if(isAllowed){
      image.src = URL.createObjectURL(event.target.files[0]);
      
    }else{
      $('.file-upload-here.file2').html("<span>" +  fileValue2 + "</span> ");
      return false;
    }

    
  });
}
/*if($('.loding').length){
  var startTime = (new Date()).getTime();
  $(window).on("load", function() {
    var endTime = (new Date()).getTime();
    var millisecondsLoading = endTime - startTime;
    if (millisecondsLoading > 50) {
      $('.loding').addClass('WinHaftlodded');
    }
    if (millisecondsLoading == millisecondsLoading) {
      setTimeout(function(){
       $('.loding').addClass('Winlodded');
     }, 2500);
      
    }
  });
}*/

$('.contct-form-acordion-title').on('click', function(){
     
  $(this).toggleClass('active');
  $(this).parents('.contct-form-acordion-grd-item-col').siblings().find('.contct-form-acordion-title').removeClass('active'); 
  $(this).parents('.contct-form-acordion-grd-item-col').find('.contct-form-accordion-desc').slideToggle(300);
  $(this).parents('.contct-form-acordion-grd-item-col').siblings().find('.contct-form-accordion-desc').slideUp(300);
    
});
	
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


$('.toggle-btn').on('click', function(){
  $(this).toggleClass('menu-expend');
  $('.toggle-bar ul').slideToggle(500);
});

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
      ]
    });
}

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
if (windowWidth > 991){
  if($('.lgd-hdr-srch').length){
    $('.lgd-hdr-srch input').on("keyup", function(e){
      var InputVal = $('.lgd-hdr-srch input').val();
      if (InputVal != '') {
        $('.lgd-hdr-srch').addClass('lgd-hdr-srch-rsglt-view');
      }else{
        $('.lgd-hdr-srch').removeClass('lgd-hdr-srch-rsglt-view');
      }
    });
  }
}

if($('#file2').length){
  $('#file2').change( function(e){ 
    var image = document.getElementById('file-upload-here');
    var image = URL.createObjectURL(event.target.files[0]);
    $(image).attr('src', image);
  });
}


if (windowWidth <= 991) {
    $('.ftr-menu-col h6').on('click', function(){
      $(this).toggleClass('active');
      $(this).parent().siblings().find('h6').removeClass('active');
      $(this).parent().find('.ftr-menu').slideToggle(300);
      $(this).parent().siblings().find('.ftr-menu').slideUp(300);
    });
}

var options = {
  animationEnabled: true,
  exportEnabled: false,
  backgroundColor: "#fbfbfb",
  data: [
  {
    type: "line", //change it to line, area, column, pie, etc
    lineColor:"#A2222F",
     startAngle:  10,
     color: "#A2222F",
     startAngle: 10,
     axisYIndex: 1,
    dataPoints: [
        { label: "0/0",  y: 0  },
        { label: "2/4", y: 0.5  },
        { label: "2/6", y: 1.5  },
        { label: "2/8",  y: 2.5  },
        { label: "2/10",  y: 1.5  },
        { label: "2/12",  y: 3.5  }
    ]
  }
  ]
};
if( $('#chartContainer').length ){
  $("#chartContainer").CanvasJSChart(options);
}


if( $('.fs-accordion-wrap').length ){
  $('.fs-accordion-title').on('click', function(){
    $(this).toggleClass('active');
    $('.fs-accordion').toggleClass('active');
    $(this).parents('.fs-accordion-wrap ul li').siblings().find('.fs-accordion, .fs-accordion-title').removeClass('active');    
    $(this).parents('.fs-accordion-wrap ul li').find('.fs-accordion-des').slideToggle(300);
    $(this).parents('.fs-accordion-wrap ul li').siblings().find('.fs-accordion-des').slideUp(300);
  });
  $('.has-chart .fs-accordion-title').on('click', function(){
    $("#chartContainer").CanvasJSChart(options);
  });
}


$('.fs-clickable-btns-inr a').on('click', function(e){ 
  e.preventDefault();
  $(this).parents('.btn-click').toggleClass('active');
  $(this).parents('.clickable-btn').siblings().find('.btn-click').removeClass('active'); 
  /*$(this).parents('.clickable-btn').find('.btn-click-des').slideToggle(300);
  $(this).parents('.clickable-btn').siblings().find('.btn-click-des').slideUp(300); */ 
});





$('.select-2-cntlr').select2();

if( $('.xs-cat-switch-btn-cntlr').length ){
    $('.xs-cat-switch-btn-cntlr').on('click', function(e){
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $(this).parents('.fl-cat-menu').find('.fl-cat-menu li').removeClass('active');
      $(this).next().slideToggle(300);
    });
  }
  
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
if(windowWidth > 575){

  function attrvaluupdate_(){
    var windowWidth = $(window).width();
    var containerwidth = $(".container").width();
    var paddingLeft = ((windowWidth-containerwidth)/2);
    $('.top-creator-slider-grds').css({
      "padding-left":paddingLeft,
    });
  }
  attrvaluupdate_();
  $(window).resize(function(){
    attrvaluupdate_();
  });
}

if( $('.TopCreatorSlider').length ){
    $('.TopCreatorSlider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
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

$(document).on('click', function(){
  var target = $(event.target);
  if(!target.closest('.btn-click').length && $('.btn-click').is(":visible")){
    $('.btn-click').removeClass('active');
  }
});
$('.tool-tip').mouseenter(function(){
    $(this).addClass('tol-tip-cntlr');
  });
  $('.tool-tip').mouseleave(function(){
    $(this).removeClass('tol-tip-cntlr');
  });
  $('.tool-tip-des').mouseenter(function(){
    $(this).parent('.fs-pro-grds ul li').find('.tool-tip').addClass('tol-tip-cntlr');
  });
  $('.tool-tip-des').mouseleave(function(){
    $(this).parent('.fs-pro-grds ul li').find('.tool-tip').removeClass('tol-tip-cntlr');
  });

  if($('.wish-list-cntlr span a').length){
    $('.wish-list-cntlr span a').on('click', function(e){
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $(this).parents().siblings().find('.wish-list-cntlr span').removeClass('active');
    });
  }
  $(document).on('click', function(){
  var target = $(event.target);
  if(!target.closest('.wish-list-cntlr span').length && $('.wish-list-cntlr span').is(":visible")){
    $('.wish-list-cntlr span').removeClass('active');
  }
});

if($('.fs-btn-cntlr').length){
  $('.fs-btn-cntlr a').on('click', function(e){
    e.preventDefault();
    $('.home-popup').addClass('homePopUp-overlay-remove');
  });
}

})(jQuery);