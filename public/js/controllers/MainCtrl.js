/*
 public/js/controllers/MainCtrl.js
 Devin T. Currie
 */

angular.module('MainCtrl', []).controller('MainController', function ($scope) {
    $scope.page = "Home";
    $scope.tagline = 'focused on developing sleek and intuitive user interfaces for web applications';
    $scope.navlinks = [
        {"value": "Examples", "id": "exams"},
        {"value": "Technology", "id": "techs"},
        {"value": "Specialities", "id": "specs"}];
});