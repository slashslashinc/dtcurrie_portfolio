/*
 public/js/app.js
 Devin T. Currie
 */

var portfolio = angular.module("portfolio", [
    'ui.router',
    'MainCtrl',
    'ResumeCtrl']);

angular.module('MainCtrl', [])
    .controller('MainController', function ($scope, $rootScope) {
        $scope.page = "Home";
        $scope.links = [
            {"value": "Examples", "id": "exams"},
            {"value": "Technology", "id": "techs"},
            {"value": "Specialities", "id": "specs"}];

        $rootScope.$on('$viewContentLoaded', function () {
            checkBackToTop();
        });
    })
    .directive('mainNav', function () {
        return {
            templateUrl: 'views/navbar.html'
        };
    });

angular.module('ResumeCtrl', [])
    .controller('ResumeController', function ($scope) {
        $scope.page = "Resume";
        $scope.links = [
            {"value": "References", "id": "refs"},
            {"value": "Skills & Expertise", "id": "skex"},
            {"value": "Education", "id": "edu"},
            {"value": "Experience", "id": "exp"},
            {"value": "Summary", "id": "sum"},
            {"value": "Download PDF", "id": "dl"}];
    });

portfolio.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: "MainController",
            onEnter: function () {
                animateOnLoad();
            },
            onExit: function(){
                resetToTop();
            }
        })
        .state('resume', {
            url: "/resume",
            templateUrl: "views/resume.html",
            controller: "ResumeController",
            onEnter: function () {
                animateOnLoad();
            },
            onExit: function(){
                resetToTop();
            }
        });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});