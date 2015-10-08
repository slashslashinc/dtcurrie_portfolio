/*
 public/js/script.js
 Devin T. Currie
 */

function scrollToSection(id) {
    $('html,body').animate({scrollTop: $("#" + id).offset().top - 50}, 'fast');
}

function scrollToTop() {
    $('html,body').animate({scrollTop: 0}, 'fast');
}