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
            if (windowBottom > elementTop && $(this).css("opacity") == 0) {
                // clone the element and add the animated class to trigger its animation
                $(this).addClass('fade-in');
            }
        }
    });
}

// animate navbar fade-in
function checkNavbar() {
    var navbar = $("#mainNav");
    console.log(scope.page);
    if (scope.page == "Home") {
        var windowTop = $(window).scrollTop(),
            checkAgainst = $(".jumbotron-portrait");
        console.log("We are in home");
        console.log(checkAgainst);
        if (checkAgainst != undefined && !navbar.hasClass('fade-in')) {
            console.log("checking fade-in");
            console.log(windowTop + " > " + (checkAgainst.offset().top + checkAgainst.height()) + "?");
            if (windowTop > (checkAgainst.offset().top + checkAgainst.height())) {
                if (navbar.hasClass('hidden-animated')) {
                    navbar.removeClass('hidden-animated');
                }
                navbar.removeClass('fade-out').addClass('fade-in');
            }
        } else if (checkAgainst != undefined && !navbar.hasClass('fade-out')) {
            console.log("checking fade-out");
            if (windowTop < (checkAgainst.offset().top + checkAgainst.height())) {
                navbar.removeClass('fade-in').addClass('fade-out');
            }
        }
    } else {
        navbar.removeClass("hidden-animated fade-out").addClass('fade-in');
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