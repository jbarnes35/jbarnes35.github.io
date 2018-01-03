var app=angular.module('chatApp',['firebase']);

app.controller('ChatController', function($scope, $firebaseArray){
    var ref=firebase.database().ref().child("message");
    $scope.messages = $firebaseArray(ref);
    $scope.user = Math.floor((Math.random() * 10) + 1);
    $scope.name = "user"+$scope.user;
    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now(),
            user: $scope.user,
            name: $scope.name,
            img: $scope.img
        })
    }
    
})
