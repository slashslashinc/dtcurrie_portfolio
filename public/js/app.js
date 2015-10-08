/*
 public/js/app.js
 Devin T. Currie
 */

var portfolio = angular.module("portfolio", [
    'ui.router',
    'MainCtrl',
    'ResumeCtrl']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: "MainController"
        })
        .state('resume', {
            url: "/resume",
            templateUrl: "views/resume.html",
            controller: "ResumeController"
        });
});