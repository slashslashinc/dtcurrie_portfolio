/*
 public/js/controllers/MainCtrl.js
 Devin T. Currie
 */

angular.module('MainCtrl', [])
    .controller('MainController', function ($scope) {
        $scope.page = "Home";
        $scope.tagline = 'focused on developing sleek and intuitive user interfaces for web applications';
        $scope.links = [
            {"value": "Examples", "id": "exams"},
            {"value": "Technology", "id": "techs"},
            {"value": "Specialities", "id": "specs"}];
    })
    .directive('mainNav', function () {
        return {
            templateUrl: 'navbar.html'
        };
    });