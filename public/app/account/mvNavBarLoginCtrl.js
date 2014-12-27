angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http){
    $scope.signin = function(username, password){
        $http.post('/login', {username:username, passord:password}).then(function(response){
            if(response.data.success){
                console.log("logged in");
            } else {
                console.log("failed to log in");
            }
        })
    }
});
