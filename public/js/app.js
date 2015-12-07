/*
 public/js/app.js
 Devin T. Currie
 */

var portfolio = angular.module("portfolio", [
    'ui.router',
    'MainCtrl']);

angular.module('MainCtrl', [])
    .controller('HomeController', function ($scope, $rootScope) {
        $rootScope.page = "Home";
        $rootScope.links = [
            {"value": "Specialities", "id": "specs"},
            {"value": "Technology", "id": "techs"},
            {"value": "Examples", "id": "exams"}
        ];
    })
    .controller('ResumeController', function ($scope, $rootScope) {
        $rootScope.page = "Resume";
        $rootScope.links = [
            {"value": "Download PDF", "id": "dl"},
            {"value": "Summary", "id": "sum"},
            {"value": "Experience", "id": "exp"},
            {"value": "Education", "id": "edu"},
            {"value": "Skills & Expertise", "id": "skex"},
            {"value": "References", "id": "refs"}
        ];
    })
    .controller('NavController', function ($scope, $rootScope) {
        $rootScope.$watchCollection('links', function (newLinks) {
            $scope.links = newLinks;
        }, true);

        $rootScope.$watchCollection('page', function (newPage) {
            $scope.page = newPage;
        }, true);
    })
    .directive('mainNav', function () {
        return {
            replace: true,
            template: '<li><a data-target="{{link.id}}" onclick=scrollToSection($(this).data("target"));>{{link.value}}</a></li>',
            link: function (scope, element, attrs) {
                scope.$watch('links', function (newValue, oldValue) {
                    if (newValue) {
                        scope.links = newValue;
                    }
                }, true);
            }
        };
    });

portfolio.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: "HomeController",
            onEnter: function () {
                checkBackToTop();
                checkNavbar();
            },
            onExit: function () {
                resetToTop();
            }
        })
        .state('resume', {
            url: "/resume",
            templateUrl: "views/resume.html",
            controller: "ResumeController",
            onEnter: function () {
                checkBackToTop();
                checkNavbar();
            },
            onExit: function () {
                resetToTop();
            }
        });
    //// use the HTML5 History API [disabled for github pages]
    //$locationProvider.html5Mode(true);
});