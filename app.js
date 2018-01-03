var app=angular.module('chatApp',['firebase']);

app.controller('ChatController', function($scope, $firebaseArray){
    var ref=firebase.database().ref().child("message");
    $scope.messages = $firebaseArray(ref);
    $scope.user = Math.floor((Math.random() * 10) + 1);
    $scope.name = "เจ๊กิ๊ฟ";
    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now(),
            user: 1,
            name: $scope.name,
            img: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/23472207_10210403483788249_1379800557562815649_n.jpg?oh=8d1102ae25b3d8e138304492ec3ea0bd&oe=5AB208A5"
        })
    }
    
})
