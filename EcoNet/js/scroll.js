$(window).on('scroll', function() {
    var header = $('header'),
        langMob = $('.lang-mob'),
        navMob = $('.nav-mob--icon'),
        contactMob = $('.contact-mob')
        header_height = header.outerHeight() / 2,
        cur_pos = $(this).scrollTop();
    if (cur_pos >= header_height) {
        langMob.addClass('lang-mob--sm');
        navMob.addClass('nav-mob--icon--sm');
        header.addClass('header-sm');
        contactMob.addClass('contact-mob--sm');
    } else {
        header.removeClass('header-sm');
        langMob.removeClass('lang-mob--sm');
        navMob.removeClass('nav-mob--icon--sm');
        contactMob.removeClass('contact-mob--sm');
    }

    var body = $('body'),
        nav = $('nav'),
        nav_height = nav.outerHeight(),
        cur_pos = $(this).scrollTop();
    if (cur_pos >= nav_height) {
        body.find('.back-top').removeClass('is-not-visible');
    } else {
        body.find('.back-top').addClass('is-not-visible');
    }
});
