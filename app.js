(function() {
  'use strict';
  //x = "hello";
  angular.module('MyFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Rohan";
    $scope.sayHello = function() {
      return "Hi";
    };
  });
})();
