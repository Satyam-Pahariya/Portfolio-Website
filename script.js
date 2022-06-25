$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.home').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >=40) {
            $('.navbar').addClass('affix');
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('solid-nav');
            $('.navbar').removeClass('affix');
            $('.navbar').removeClass('bg-dark');
        }

    });
});