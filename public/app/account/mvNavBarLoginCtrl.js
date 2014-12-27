angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth){
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                mvNotifier.notify('You have successfully signed in!');
            }else{
                mvNotifier.notify('Username/Password combination incorrect');
            }
        });
        // $http.post('/login', {username:username, password:password}).then(function(response){
        //     if(response.data.success){
        //         mvIdentity.currentUser = response.data.user;
        //         mvNotifier.notify('You have successfully signed in!');
        //     } else {
        //         mvNotifier.notify('Username/Password combination incorrect');
        //     }
        // })
    }
});
