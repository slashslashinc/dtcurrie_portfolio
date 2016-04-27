/*
 public/js/raw/script.js
 Devin T. Currie
 */

// get scope
var scope;
$(function () {
    scope = angular.element("html").scope();
});

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
    checkNavbar();
    checkScrollingFadeIns();
    checkBackToTop();
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
function checkScrollingFadeIns() {
    $('.scrolling').each(function () {
        if (!$(this).hasClass('fade-in')) {
            var elementTop = $(this).offset().top + 100,                   // 20px below top of element
                windowBottom = $(window).scrollTop() + $(window).height(); // bottom of window

            // if the element is above the bottom of the window and isn't currently visible, show it
            if (windowBottom > elementTop && $(this).css("opacity") === "0") {
                // clone the element and add the animated class to trigger its animation
                $(this).addClass('fade-in');
            }
        }
    });
}

// animate navbar fade-in
function checkNavbar() {
    var navbar = $("#mainNav"); // get main nav bar
    if (scope.page == "Home") { // check if we are on the home page
        var windowTop = $(window).scrollTop(),          // distance from top of window to top of page (0 = top)
            checkAgainst = $(".jumbotron-hero-image");    // element to check against
        if (checkAgainst !== undefined) {
            // if the checkAgainst element exists (viewable)
            if (windowTop > (checkAgainst.offset().top + checkAgainst.height()) && !navbar.hasClass('fade-in')) {
                // if the top of the window is below the bottom of checkAgainst and the nav bar isn't fading in
                if (navbar.hasClass('hidden-animated')) {
                    // if it hasn't been initially animated from page load animations
                    navbar.removeClass('hidden-animated');
                }
                // remove fade-out class if nav bar has faded out before and fade-in nav bar
                navbar.removeClass('fade-out').addClass('fade-in');
            } else if (windowTop < (checkAgainst.offset().top + checkAgainst.height()) && !navbar.hasClass('fade-out') && !navbar.hasClass('hidden-animated')) {
                // if the top of the window is above the bottom of checkAgainst and the nav bar isn't fading out
                // remove fade-in class if nav bar has faded in before and fade-out nav bar
                navbar.removeClass('fade-in').addClass('fade-out');
            }
        }
    } else if (scope.page == "Resume") {    // check if we are on the resume page
        // remove classes if the nav bar  hasn't been initially animated from page load animations or has been faded out
        // before and fade it in
        navbar.removeClass("hidden-animated fade-out").addClass('fade-in');
    }
}

function showNavbar() {
    $("#mainNav").removeClass("hidden-animated fade-out").addClass('fade-in');
}

function showFooter() {
    $("footer").removeClass("hidden-animated fade-out").addClass('fade-in');
}

// if the window does no require vertical scrolling, hide the back-to-top button
function checkBackToTop() {
    if (document.body.scrollHeight > window.innerHeight && $(window).scrollTop() > 0) {
        $.each($('.back-to-top'), function (i, e) {
            if (!$(e).hasClass('fade-in')) {
                $(e).removeClass('fade-out').addClass('fade-in');
            }
        });
    } else {
        $.each($('.back-to-top'), function (i, e) {
            if (!$(e).hasClass('fade-out')) {
                $(e).removeClass('fade-in').addClass('fade-out');
            }
        });
    }
}