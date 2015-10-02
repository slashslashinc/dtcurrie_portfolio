/*
 public/js/appRoutes.js
 Devin T. Currie
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {        // Get home page
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/tests', {   // get Test page
            templateUrl: 'views/test.html',
            controller: 'TestController'
        });
    $locationProvider.html5Mode(true);
}]);