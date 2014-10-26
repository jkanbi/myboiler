'use strict';

myBoilerApp.controller('NavCtrl', function ($scope, $location, Auth) {

    $scope.logout = function(){
    	Auth.logout();
    };

  });

myBoilerApp.controller('headCtrl',function($scope, $location)
	{
		
	});