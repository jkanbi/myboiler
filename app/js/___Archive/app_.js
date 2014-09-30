/* App Module */

var myBoilerApp = angular.module('myBoiler',['ngRoute']);

myBoilerApp.config(['$routeProvider', function($routeProvider) 
{
    $routeProvider.when('/headerController', {
		
	})
	.when('/', {
		templateUrl: 'partials/consumer_main_content.html',
		controller: 'mainContentCtrl'
	  })
	  .when('/manuals', {
        templateUrl: 'partials/manuals.html',
        controller: 'manualsCtrl'
      })
	  .when('/consumer-engineer-search', {
		templateUrl: 'partials/consumer/newengineerSearch.html',
		controller: 'enggSearchCtrl'
	  })
	  .when('/how-it-works', {
		templateUrl: 'partials/how_it_works.html'
	  })
	  .when('/consumer-tips', {
		templateUrl: 'partials/tooltips.html'
	  })
	  .when('/blog', {
		controller : 'blogCtrl',
		templateUrl : 'partials/consumer/blog.html'
	  })
	  .when('/consumer-services', {
		templateUrl : 'partials/consumer_services.html'
	  })
	  .when('/copyright', {
		templateUrl : 'partials/copyright.html'
	  })
	  .when('/privacy', {
		templateUrl : 'partials/privacypolicy.html'
	  })
	  .when('/terms', {
		templateUrl : 'partials/termsnconditions.html'
	  })
	  .otherwise ({ redirectTo : '/' });
  }]);
  
  myBoilerApp.controller('headerController', function($scope, $location)
  {
	$scope.reloadpg = function()
	{
		var url = $location.path();
		if(url=="/" || url=="/consumer")
		{
			$location.path('/index.html');
		}
		else if(url=="/engineer")
		{
			$location.path('/index.html/engineer');
		}
	}
  });
  
  myBoilerApp.controller('mainContentCtrl',function($scope) 
  {
  });






