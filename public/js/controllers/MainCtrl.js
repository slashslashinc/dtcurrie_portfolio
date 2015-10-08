/*
 public/js/controllers/MainCtrl.js
 Devin T. Currie
 */

angular.module('MainCtrl', [])
    .controller('MainController', function ($scope, $rootScope) {
        $scope.page = "Home";
        $scope.tagline = 'focused on developing sleek and intuitive user interfaces for web applications';
        $scope.links = [
            {"value": "Examples", "id": "exams"},
            {"value": "Technology", "id": "techs"},
            {"value": "Specialities", "id": "specs"}];
        $rootScope.$on('$viewContentLoaded', function () {
            document.body.scrollHeight > window.innerHeight
                ? document.getElementById('back-to-top').style.visibility = "visible"
                : document.getElementById('back-to-top').style.visibility = "hidden";
        })
    })
    .directive('mainNav', function () {
        return {
            templateUrl: 'views/navbar.html'
        };
    });