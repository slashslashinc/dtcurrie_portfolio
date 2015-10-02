/*
 public/js/services/TestService.js
 Devin T. Currie
 */

angular.module('TestService', []).factory('Test', ['$http', function ($http) {
    return {
        get: function () {              // returns all Tests
            return $http.get('/api/tests');
        }/*,
        create: function (testData) {   // Creates a new Test
            return $http.post('/api/tests', testData)
        },
        delete: function (id) {         // Deletes a test by id
            return $http.delete('/api/tests/' + id);
        }*/
    }
}]);