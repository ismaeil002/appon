$(function(){

    $(".back2top i").click(function(){
      $("html,body").animate({
        scrollTop:0
      },1200)
    })

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop()
      if (scrolling>20){
        $(".back2top i").fadeIn(500)
      }else{
        $(".back2top i").fadeOut(500)
      }


      if(scrolling>50){
        $(".navbar").addClass("nav_bg")
      }else{
        $(".navbar").removeClass("nav_bg")
      }
      
    })




    $('.banner_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true,
      arrows:false,
      dots:true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:1500
    });


    var mixer = mixitup('.feature_item',{
      animation: {
        // effectsIn: 'fade translateY(-100%)',
        // effectsOut: 'fade translateY(-100%)',
        // duration: 100
        effects: 'fade translateZ(-100px)'
    }
    });


    $('.scrnst_main').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      dots:true,
      autoplaySpeed: 2000,
    });


    new VenoBox({
      selector: '.my-video-links',
  });


  $('.counter').counterUp({
    delay: 10,
    time: 3000
});



$('.user_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.user_extra'
});
$('.user_extra').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.user_main',
  dots: true,
  centerMode: true,
  centerPadding:"0px",
  arrows:false
});




})


$(function(){

  $('.feedtop_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feedtop_nav'
  });
  $('.feedtop_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feedtop_slider',
    arrows:false,
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

})