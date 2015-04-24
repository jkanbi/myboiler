	/* App Module */
	
	var rootdir = "views/";
	var contactDir = "components/contact/";
	var consumerDir = "components/consumer/";
	var engineerDir = "components/engineer/";
	var manualsDir = "components/manuals/"
	var userLoginDir = "components/userlogin/";
	var crootdir = "views/consumer/";
	var erootdir = "views/engineer/";
	var blogdir = "components/blog/";

	//http://stackoverflow.com/questions/24227239/unknown-provider-firebaseprovider-firebase
	var myBoilerApp = angular.module('myBoiler',['ngRoute', 'firebase','blogApp']);

	myBoilerApp.constant('FIREBASE_URL','https://myboiler.firebaseio.com/') 

	myBoilerApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) 
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
		  .when('/manuals', {
	        templateUrl: manualsDir +'manuals.html',
	        controller: 'manualsCtrl'
	      }).when('/emanuals', {
	        templateUrl: manualsDir +'manuals.html',
			controller : 'engineerCtrl'
	      })
		  .when('/manuals/brands/:brandId', {
	        templateUrl: rootdir+'documents.html',
	        controller:'documentsCtrl',
	      })
		  .when('/consumer-engineer-search', {
			templateUrl: consumerDir +'find-engineer/newengineerSearch.html',
			controller: 'enggSearchCtrl'
		  })
		  .when('/consumer-contact', {
			templateUrl: contactDir+'contact.html',
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
		  .when('/blog', {
			templateUrl : blogdir+'blog.html',
			controller : 'blogPostsCtrl'
		  })
		  .when('/blog/:postSlug', {
			templateUrl : blogdir+'blogPost.html',
			controller : 'blogPostCtrl'
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
			templateUrl: contactDir+'contact.html',
			controller : 'consumerContactController',
			controller : 'engineerCtrl'
		  })
		  .when('/register', {
			templateUrl: userLoginDir+'register.html',
			controller: 'AuthCtrl'
		  })
		  .when('/login', {
			templateUrl: userLoginDir+'login.html',
			controller: 'AuthCtrl'
		  })
		  .when('/account', {
			templateUrl: userLoginDir+'account.html',
			controller: 'accountCtrl'
		  })
		  .when('/nest',{
		  	templateUrl: crootdir + 'nest-tpl.html',
		  	//controller: 'nestThermostatCtrl'
		  })
		  .when('/nest-thermostat',{
		  	templateUrl: crootdir + 'nest-thermostat-tpl.html',
		  	//controller: 'nestThermostatCtrl'
		  })
		  .when('/nest-pro',{
		  	templateUrl: erootdir + 'nest-pro-tpl.html',
		  	controller : 'engineerCtrl'
		  	//controller: 'nestThermostatCtrl'
		  })
		  .when('/charges',{
		  	templateUrl: crootdir + 'charges.html',
		  	//controller : ''
		  })
		  .when('/team',{
		  	templateUrl: crootdir + 'team.html',
		  	//controller : ''
		  })
		  .when('/404',{
		  	templateUrl: rootdir + '404.html'
		  	//controller: 'nestThermostatCtrl'
		  })
		  .otherwise ({ redirectTo: '/404'});
		  
		  /*
		   if(window.history && window.history.pushState)
		  {
			$locationProvider.html5Mode(true);
		  } 
		  */
  }]);

	// The following code allows google analytics to track single page views
	// Stack Overflow Permalink: http://stackoverflow.com/questions/10713708/tracking-google-analytics-page-views-with-angular-js/25290857#25290857
	myBoilerApp.run(['$rootScope', '$location', '$window',
    function($rootScope, $location, $window) {
      $rootScope.$on('$routeChangeSuccess',
        function(event) {
          if (!$window.ga) {
            return;
          }
          $window.ga('send', 'pageview', {
            page: $location.path()
          });
        });
    }
  ]);