/*
 public/js/controllers/TestCtrl.js
 Devin T. Currie
 */

angular.module('TestCtrl', [])
    .controller('TestController', function ($scope) {
        $scope.page = "Test";
        $scope.tagline = 'this is a test page!';
        $scope.links = [];
    });