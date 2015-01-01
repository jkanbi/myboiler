'use strict';

myBoilerApp.controller('AuthCtrl',
  function ($scope, $location, $firebaseAuth, FIREBASE_URL, User) {
    var ref = new Firebase(FIREBASE_URL);
    var user = User;

    $scope.authObj = $firebaseAuth(ref);
    var authData = $scope.authObj.$getAuth();
    
    $scope.authObj.$onAuth(function () {
    if (authData) {
      $location.path('/');
    }
    });
    
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
        //user.create(authData);
        //Add the user to firebase 'user' data
        // we would probably save a profile when we register new users on our site
        // we could also read the profile to see if it's null
        // here we will just simulate this with an isNewUser boolean
        var isNewUser = (ref.child("users").child(authData.uid) == null)?false:true;
        ref.onAuth(function(authData) {
          if (authData && isNewUser) {
            // save the user's profile into Firebase so we can list users,
            // use them in Security and Firebase Rules, and show profiles
            ref.child("users").child(authData.uid).set(authData);
          }
        });
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