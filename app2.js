var app=angular.module('chatApp',['firebase']);

app.controller('ChatController', function($scope, $firebaseArray){
    var ref=firebase.database().ref().child("message");
    $scope.messages = $firebaseArray(ref);
    $scope.user = 2;
    $scope.name = "คนหล่อ";
    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now(),
            user: $scope.user,
            name: $scope.name,
            img: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/24232399_1507097476006004_7356528401393699794_n.jpg?oh=bf24f1bc846c5b31354157ff3b3cccbd&oe=5AC3C991"
        });
        $('#text').val('');
    }
    
})
