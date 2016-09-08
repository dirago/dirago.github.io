$(window).on('scroll', function() {
    var header = $('header'),
        langMob = $('#lang-mob'),
        navMob = $('#nav-mob'),
        header_height = header.outerHeight() / 2,
        cur_pos = $(this).scrollTop();
    if (cur_pos >= header_height) {
        langMob.addClass('lang-mob--sm');
        navMob.addClass('nav-mob--sm');
        header.addClass('header-sm');
    } else {
        header.removeClass('header-sm');
        langMob.removeClass('lang-mob--sm');
        navMob.removeClass('nav-mob--sm');
    }
});
