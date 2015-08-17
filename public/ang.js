// var app = angular.module('redditClone', ['ngRoute']);
var app = angular.module('redditClone', ['angularMoment', 'ngAnimate']);

app.controller('postController', function($scope){
  $scope.setOrder = function(order) {
    $scope.order = order;
  }
  $scope.postList = [];
  $scope.addPost = function(){

    $scope.vm = this;
    $scope.vm.time = new Date();
    $scope.date = $scope.vm.time;
    $scope.postList.push({title: $scope.title, author: $scope.author, url: $scope.url, description: $scope.description, date: $scope.date});
    $scope.title = "";
    $scope.author = "";
    $scope.url = "";
    $scope.description = "";
  }

})


app.controller('commentController', function($scope){
  $scope.commentList = [];
  $scope.addComment = function(){
    $scope.commentList.push({commentAuthor: $scope.commentAuthor, commentInput: $scope.commentInput});
    $scope.commentAuthor = "";
    $scope.commentInput = "";
  }
})

app.controller('voteController', function($scope){
  $scope.post.votes = 0;
  $scope.upVote = function(){
    $scope.post.votes++;
  }
  $scope.downVote = function(){
    $scope.post.votes--;
  }
})
