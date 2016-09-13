$(document).ready(function() {
    var navMobIcon = $('.nav-mob--icon');
    var navMobLink = $('.nav-mob--link')
    var navMob = $('.nav-mob');
    var header = $('header');
    var main = $('main');
    var footer = $('footer');
    var slider = $('#slider');
    var body = $('body');
    var wrapper = $('#wrapper');
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var scroll;
        if ($(window).scrollTop() == 0) {
            scroll = ($target.offset().top)
        } else {
            scroll = ($target.offset().top)
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 500, 'swing', function() {
            //window.location.hash = target;
        });
    });
    navMobIcon.on('click', function() {
        header.hide();
        // wrapper.css({
        //     overflow: 'hidden'
        // });
        navMob.css('display','flex');
    });
    navMobLink.on('click', function() {
        console.log(this.hash);
        // wrapper.css({
        //     overflow: 'visible'
        // });
        navMob.hide();
        header.show();
    })
});


// script pour un effet smooth sur le scroll to anchor
