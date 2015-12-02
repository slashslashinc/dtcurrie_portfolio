/*
 public/js/raw/script.js
 Devin T. Currie
 */

//  thumbnail light box click event
$(document).on("click", '.thumbnail', function (event) {
    event.preventDefault();
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#thumbnailModal').modal({show: true});
});

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

// scroll to top of window and reset animations
function resetToTop() {
    $(window).scrollTop(0);
    $('.scrolling').each(function () {
        $(this).removeClass('animated').css('opacity', 0);
    });
}

// animate scrolling fade-ins
function checkScrolling(windowBottom) {
    $('.scrolling').each(function () {
        if (!$(this).hasClass('animated')) {
            var elementTop = $(this).offset().top + 100; // 20px below top of element

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
    if (jumbo) {
        if (!$(navbar).hasClass('animated')) {
            if (windowTop > (jumbo.offset().top + jumbo.height()) && navbar.css("opacity") == 0) {
                // clone the element and add the animated class to trigger its animation
                navbar.replaceWith($(navbar).clone(true).addClass('animated'));
            }
        } else {
            if (windowTop < (jumbo.offset().top + jumbo.height()) && navbar.css("opacity") == 1) {
                // replace animated and fade-in classes with fade-out
                // then clone the element and the animated class to trigger its new animation
                navbar.removeClass('animated fade-in').addClass('fade-out')
                    .replaceWith($(navbar).clone(true).addClass('animated'));
                // replace animated and fade-out classes with fade-in to prep it for a scrolling animation
                setTimeout(function () {
                    $('.navbar').removeClass('animated fade-out').addClass('fade-in');
                }, 1000);
            }
        }
    } else {
        // clone the element and add the animated class to trigger its animation
        navbar.replaceWith($(navbar).clone(true).addClass('animated'));
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