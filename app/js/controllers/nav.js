'use strict';

myBoilerApp.controller('NavCtrl', function ($scope, $location, Auth) {

    $scope.logout = function(){
    	Auth.logout();
    };

  });

myBoilerApp.controller('headCtrl',function($scope, $location)
	{	
		$scope.displayMenus = function()
		{
			$scope.menu1="FIND AN ENGINEER";
			$scope.menu2="SERVICES";
			$scope.menu3="MANUALS";
			$scope.menu4="USEFUL TIPS";
			//$scope.menu5="BLOG";
			$scope.menu5 = "";
			$scope.menu6="MY ACCOUNT";
		}

		$scope.showCMenus = function()
		{
			$scope.displayMenus();
			$("#menu1").attr("href","#/consumer-engineer-search");  //Added to stop engineer tools link showing up instead bug.
			$("#menu2").attr("href","href","#/consumer-services");
			//$("#menu3").attr("href","https://myboiler.com/v2/manuals/index.php?ut=consumer&d=Boilers");
			$("#menu3").attr("href","#/cmanuals");
			$("#menu4").attr("href","#/consumer-tips");
			$("#menu5").hide();
			$("#menu5").attr("href","#/cblog");
			$("#menu6").attr("href","#/account");
			$("#cbtn").hide();
			$("#ebtn").show();
		}
			
		$scope.showMenus = function()	
		{
			$scope.menu1 = "TOOLS";
			$scope.menu2 = "MANUALS";
			$scope.menu3 = "USEFUL TIPS";
			//$scope.menu4 = "BLOG";
			$scope.menu4 = "";
			$scope.menu5 = "";
			$scope.menu6 = "MY ACCOUNT";
			
			$("#menu1").attr("href","#/engineer-tools");  //Added to stop consumer-engineer-form link showing up instead bug.
			//$("#menu2").attr("href","https://myboiler.com/v2/manuals/index.php?ut=engineer&d=Boilers");
			$("#menu3").attr("href","#/engineer-tips");
			$("#menu4").hide();
			$("#menu4").attr("href","#/eblog");
			$("#menu5").hide();
			$("#menu6").attr("href","#/account");
			$("#cbtn").show();
			$("#ebtn").hide();
		}
		
		
	});