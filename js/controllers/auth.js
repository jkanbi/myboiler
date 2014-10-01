'use strict';

myBoilerApp.controller('AuthCtrl',
  function ($scope, $location, Auth, User) {
    if (Auth.signedIn()) {
      $location.path('/');
    }

    $scope.$on('$firebaseSimpleLogin:login', function () {
      $location.path('/');
    });

    $scope.login = function () {
      Auth.login($scope.user).then(function () {
        $location.path('/');
      }, function (error) {
        $scope.error = error.toString();
      });
    };

    $scope.register = function () {
      Auth.register($scope.user).then(function (authUser) {
        Auth.login($scope.user).then(function () {
          User.create(authUser,$scope.user.username,$scope.user.email);
          console.log(authUser);
          $location.path('/');
        });
      }, function (error) {
        $scope.error = error.toString();
        console.log(error.toString());
      });
    };
  });