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

var triggerEl = document.querySelector('#myList a[href="#all"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myList li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show()

var triggerTabList = [].slice.call(document.querySelectorAll('#myList a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

 // Select first tab