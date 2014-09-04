
	/* App Module */
	
var rootdir = "partials/";
var crootdir = "partials/consumer/";
var erootdir = "partials/engineer/";

//http://stackoverflow.com/questions/24227239/unknown-provider-firebaseprovider-firebase
var myBoilerApp = angular.module('myBoiler',['ngRoute', 'firebase']);

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
        templateUrl: rootdir+'manuals.html'
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
		templateUrl : erootdir+'blog.html'
	  })
	  .when('/consumer-services', {
		templateUrl : crootdir+'consumer_services.html'
	  })
	  .when('/ccopyright', {
		templateUrl : rootdir+'copyright.html'
	  })
	  .when('/ecopyright', {
		templateUrl : rootdir+'copyright.html'
	  })
	  .when('/cprivacy', {
		templateUrl : rootdir+'privacypolicy.html'
	  })
	  .when('/eprivacy', {
		templateUrl : rootdir+'privacypolicy.html'
	  })
	  .when('/cterms', {
		templateUrl : rootdir+'termsnconditions.html'
	  })
	  .when('/eterms' , {
		templateUrl : rootdir + 'termsnconditions.html'
	  })
	  .when('/engineer',{
		templateUrl : erootdir+'engineer_main_content.html'
	  })
	  .when('/engineer-tips', {
		templateUrl : erootdir+'tooltips.html'
	  })
	  .when('/engineer-tools', {
		templateUrl : erootdir+'engineertools.html'
	  })
	  .when('/engineer-contact', {
		templateUrl: crootdir+'consumercontact.html',
		controller: 'consumerContactController'
	  })
	  .otherwise ({ redirectTo: '/index.html' });
	  
	 /*  if(window.history && window.history.pushState)
	  {
		$locationProvider.html5Mode(true);
	  } */
  }]);
  






