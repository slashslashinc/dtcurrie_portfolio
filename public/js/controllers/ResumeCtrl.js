/*
 public/js/controllers/ResumeCtrl.js
 Devin T. Currie
 */

angular.module('ResumeCtrl', [])
    .controller('ResumeController', function ($scope) {
        $scope.page = "Resume";
        $scope.tagline = 'Devin T. Currie';
        $scope.links = [
            {"value": "References", "id": "refs"},
            {"value": "Education", "id": "edu"},
            {"value": "Skills & Expertise", "id": "skex"},
            {"value": "Experience", "id": "exp"},
            {"value": "Summary", "id": "sum"},
            {"value": "Download PDF", "id": "dl"}];
    });