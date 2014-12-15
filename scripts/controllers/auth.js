'use strict';

myBoilerApp.controller('AuthCtrl',
  function ($scope, $location, $firebaseAuth, FIREBASE_URL, User) {
    var ref = new Firebase(FIREBASE_URL);
    
    $scope.authObj = $firebaseAuth(ref);
    var authData = $scope.authObj.$getAuth();
    
    if (authData) {
      $location.path('/');
    }

    /*$scope.authObj.$onAuth(function () {
      console.log("started");
      $location.path('/');
      console.log("finished");
    });
    */

    $scope.login = function () {
      $scope.authObj.$authWithPassword({
        email:$scope.user.email,
        password:$scope.user.password
      }).then(function (authData) {
          $location.path('/');
        }).catch (function (error) {
          $scope.error = error.toString();
        });
    };

    $scope.register = function () {
      $scope.authObj.$createUser($scope.user.email, $scope.user.password).then(function() {
        console.log("User created successfully!");

        return $scope.authObj.$authWithPassword({
          email: $scope.user.email,
          password: $scope.user.password
        });
      }).then(function(authData) {
        User.create(authData,$scope.user.username,$scope.user.email);
        console.log("Logged in as:", authData.uid);
        $location.path('/');
      }).catch(function(error) {
        console.error("Error: ", error);
      });
    };

    $scope.facebooklogin = function () {
      $scope.authObj.$authWithOAuthPopup("facebook",{scope:'email,user_likes'}).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        $location.path('/');
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    };

    $scope.googlelogin = function () {
      $scope.authObj.$authWithOAuthPopup("google",{scope:'https://www.googleapis.com/auth/plus.login'}).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        $location.path('/');
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    };

  });