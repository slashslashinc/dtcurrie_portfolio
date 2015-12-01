/*
 public/js/script.js
 Devin T. Currie
 */
// scrolling animations
$(window).scroll(function () {
    var windowTop = $(window).scrollTop(),
        windowBottom = $(window).scrollTop() + $(window).height();  // bottom of window
    checkNavbar(windowTop);
    checkScrolling(windowBottom);
});

// animate scroll to target element by id
function scrollToSection(id) {
    $('html,body').animate({scrollTop: $("#" + id).offset().top - 60}, 'fast');
}

// animate scroll to top of window
function scrollToTop() {
    $('html,body').animate({scrollTop: 0}, 'fast');
}

// animate scrolling fade-ins
function checkScrolling(windowBottom) {
    $('.scrolling').each(function () {
        if (!$(this).hasClass('animated')) {
            var elementTop = $(this).offset().top + 20; // top of element plus 20px

            // if the element is above the bottom of the window and isn't currently visible, show it
            if (windowBottom > elementTop && $(this).css("opacity") == 0) {
                // clone the element and add the animated class to trigger its animation
                $(this).replaceWith($(this).clone(true).addClass('animated'));
            }
        }
    });
}

// animate navbar fade-in
function checkNavbar(windowTop) {
    var jumbo = $('.jumbotron-portrait'),
        navbar = $('.navbar');
    if (jumbo && !$(navbar).hasClass('animated')) {
        if (windowTop > (jumbo.offset().top + jumbo.height()) && navbar.css("opacity") == 0) {
            // clone the element and add the animated class to trigger its animation
            navbar.replaceWith($(navbar).clone(true).addClass('animated'));
        }
    } else {
        if (windowTop < (jumbo.offset().top + jumbo.height()) && navbar.css("opacity") == 1) {
            // clone the element and add the animated class to trigger its animation
            navbar.removeClass('animated fade-in').addClass('fade-out')
                .replaceWith($(navbar).clone(true).addClass('animated'));
            setTimeout(function () {
                $('.navbar').removeClass('animated fade-out').addClass('fade-in');
            }, 1000);

        }
    }
}

// if the window does no require vertical scrolling, hide the back-to-top button
function checkBackToTop() {
    var button = $('#backToTop');
    if (document.body.scrollHeight > window.innerHeight) {
        button.css({"visibility": "visible"});
    } else {
        button.css({"visibility": "hidden"});
    }
}

// animate nav and footer on page load
function animateOnLoad() {
    var hiddenElements = $('nav, footer');
    if (!hiddenElements.hasClass('animated')) {
        setTimeout(function () {
            $.each(hiddenElements, function () {
                $(this).replaceWith($(this).clone(true).addClass('animated'));
            });
        }, 500);
    }
}