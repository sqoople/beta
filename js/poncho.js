 
$( document ).ready(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#topbtn").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});

//jQuery is required to run this code test video
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

};

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
};



//show div
$(document).scroll(function() {
  var arnoldJackson = $(this).scrollTop();
    var willyJackson = $(this).width(); 
  if (arnoldJackson > 530  && willyJackson > 768 ) {
    $('#buffysummers').fadeIn();
     $('#buffysummers').show();
  } else {
    $('#buffysummers').fadeOut();
          $('#buffysummers').hide();
  }
});

//show div
$(document).scroll(function() {
  var imad = $(this).scrollTop();
    var momo = $(this).width(); 
  if (imad > 520 && imad < 3000 && momo <768 ) {
    $('#geoffrey').fadeIn();
     $('#geoffrey').show();
  } else {
    $('#geoffrey').fadeOut();
          $('#geoffrey').hide();
  }
});

//popover word
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});