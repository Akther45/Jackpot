$(function () {
     
    //fixed-nav;
    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 600) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');
        }  

    
        //back-to-top;

        var backToTop = $('.back_to_top');

        if (scrolling > 400) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }

        backToTop.on('click',function () {
            $('html,body').animate({
                scrollTop: 0,
            }, 1000);
        });

});

        //typed js;
        // var typed = new Typed('#typed', {
        //     strings: ["777", "777"],
        //     typeSpeed: 300,
        //     smartBackspace: true,
        //     backSpeed: 300, 
        //     loop:true,
        //   });
          

        //  //accordion ;
        //  $('#question .question-part .accordion .accordion-item button').on('click', function(){
        //     $(this).parent().toggleClass('.accordion-body').siblings().removeClass('.accordion-body');

        //  });


//animation scroll js
var html_body = $('html, body');

$('.navbar .navbar-nav .nav-item .nav-item').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 2000);
            return false;
        }
    }
});

new WOW().init();

});