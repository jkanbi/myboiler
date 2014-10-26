	/* App Module */
	
//Wrapping your javascript in a closure is a good habit! From CodeSchool.   *Not working for some reason.
//(function () {


	var rootdir = "partials/";
	var crootdir = "partials/consumer/";
	var erootdir = "partials/engineer/";

	//http://stackoverflow.com/questions/24227239/unknown-provider-firebaseprovider-firebase
	var myBoilerApp = angular.module('myBoiler',['ngRoute', 'firebase']);

	myBoilerApp.constant('FIREBASE_URL','https://myboiler.firebaseio.com/') 

	myBoilerApp.config(['$routeProvider', function($routeProvider) 
	{
		//commenting out this line (switching to hashbang mode) breaks the app
	    //-- unless # is added to the templates
	    
	    //$locationProvider.html5Mode(true);

	    $routeProvider.when('/', {
			templateUrl: crootdir +'consumer_main_content.html',
			controller: 'mainContentCtrl'
		  })
		  .when('/consumer', {
			templateUrl: crootdir +'consumer_main_content.html',
			controller: 'mainContentCtrl'
		  })
		  .when('/cmanuals', {
	        templateUrl: crootdir +'manuals.html',
	        controller: 'manualsCtrl'
	      }).when('/emanuals', {
	        templateUrl: rootdir+'manuals.html',
			controller : 'engineerCtrl'
	      })
		  .when('/cmanuals/brands/:brandId', {
	        templateUrl: crootdir+'documents.html',
	        controller:'documentsCtrl',
	      })
		  .when('/consumer-engineer-search', {
			templateUrl: crootdir+'newengineerSearch.html',
			controller: 'enggSearchCtrl'
		  })
		  .when('/consumer-contact', {
			templateUrl: crootdir+'consumercontact.html',
			controller: 'consumerContactController'
		  })
		  .when('/how-it-works', {
			templateUrl: rootdir+'how_it_works.html'
		  })
		  .when('/consumer-tips', {
			templateUrl: crootdir+'tooltips.html'
		  })
		  .when('/cblog', {
			controller : 'blogCtrl',
			templateUrl : crootdir+'blog.html'
		  })
		  .when('/eblog', {
			templateUrl : erootdir+'blog.html',
			controller : 'engineerCtrl'
		  })
		  .when('/consumer-services', {
			templateUrl : crootdir+'consumer_services.html'
		  })
		  .when('/ccopyright', {
			templateUrl : rootdir+'copyright.html'
		  })
		  .when('/ecopyright', {
			templateUrl : rootdir+'copyright.html',
			controller : 'engineerCtrl'
		  })
		  .when('/cprivacy', {
			templateUrl : rootdir+'privacypolicy.html'
		  })
		  .when('/eprivacy', {
			templateUrl : rootdir+'privacypolicy.html',
			controller : 'engineerCtrl'
		  })
		  .when('/cterms', {
			templateUrl : rootdir+'termsnconditions.html'
		  })
		  .when('/eterms' , {
			templateUrl : rootdir + 'termsnconditions.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer',{
			templateUrl : erootdir+'engineer_main_content.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer-tips', {
			templateUrl : erootdir+'tooltips.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer-tools', {
			templateUrl : erootdir+'engineertools.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer-contact', {
			templateUrl: crootdir+'consumercontact.html',
			controller : 'consumerContactController',
			controller : 'engineerCtrl'
		  })
		  .when('/register', {
			templateUrl: rootdir+'register.html',
			controller: 'AuthCtrl'
		  })
		  .when('/login', {
			templateUrl: rootdir+'login.html',
			controller: 'AuthCtrl'
		  })
		  .when('/account', {
			templateUrl: rootdir+'account.html',
			controller: 'accountCtrl'
		  })
		  .when('/nest-thermostat',{
		  	templateUrl: rootdir + 'nest_thermostat_TPL.html',
		  	//controller: 'nestThermostatCtrl'
		  })
		  .otherwise ({ redirectTo: '/index.html' });
		  
		 /*  if(window.history && window.history.pushState)
		  {
			$locationProvider.html5Mode(true);
		  } */
  }]);
  
//})();





