$(window).on('scroll', function() {
    var header = $('header'),
        langMob = $('#lang-mob'),
        navMob = $('#nav-mob'),
        header_height = header.outerHeight(),
        cur_pos = $(this).scrollTop();
    if (cur_pos >= header_height) {
        header.addClass('header-sm');
        langMob.addClass('lang-mob--sm');
        navMob.addClass('nav-mob--sm');
    } else {
        header.removeClass('header-sm');
        langMob.removeClass('lang-mob--sm');
        navMob.removeClass('nav-mob--sm');
    }
});
