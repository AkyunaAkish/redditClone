var app = angular.module('redditClone', ['ngRoute']);

app.controller('numberController', function($scope){
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1
  }
  $scope.reverseIt = function(){
    $scope.reverser = $scope.reverser.split("").reverse().join("");
  }
})
