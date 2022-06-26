$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.home').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >=40) {
            $('.navbar-scroll').addClass('affix');
            $('.navbar-scroll').addClass('bg-dark');
        } else {
            $('.navbar-scroll').removeClass('solid-nav');
            $('.navbar-scroll').removeClass('affix');
            $('.navbar-scroll').removeClass('bg-dark');
        }

    });
});