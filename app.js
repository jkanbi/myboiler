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
	var title = ' - My Boiler';

	//http://stackoverflow.com/questions/24227239/unknown-provider-firebaseprovider-firebase
	var myBoilerApp = angular.module('myBoiler',['ngRoute', 'firebase','blogApp']);

	myBoilerApp.constant('FIREBASE_URL','https://myboiler.firebaseio.com/') 

	myBoilerApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) 
	{
		//commenting out this line (switching to hashbang mode) breaks the app
	    //-- unless # is added to the templates
	    
	    //$locationProvider.html5Mode(true);

	    $routeProvider.when('/', {
	    	title: 'My Boiler - Keeping People Warm',
			templateUrl: crootdir +'consumer_main_content.html',
			controller: 'mainContentCtrl'
		  })
		  .when('/consumer', {
		  	title: 'My Boiler - Keeping People Warm',
			templateUrl: crootdir +'consumer_main_content.html',
			controller: 'mainContentCtrl'
		  })
		  .when('/manuals', {
		  	title: 'Boiler Manuals' + title,
	        templateUrl: manualsDir +'manuals.html',
	        controller: 'manualsCtrl as ctrl'
	      })
	      .when('/emanuals', {
	        templateUrl: manualsDir +'manuals.html',
			controller : 'engineerCtrl'
	      })
		  .when('/manuals/brands/:brandId', {
	        templateUrl: rootdir+'documents.html',
	        controller:'documentsCtrl',
	      })
		  .when('/consumer-engineer-search', {
		  	title: 'Engineer Request' +title,
			templateUrl: consumerDir +'find-engineer/newengineerSearch.html',
			controller: 'enggSearchCtrl'
		  })
		  .when('/consumer-contact', {
		  	title: 'Contact Us' + title,
			templateUrl: contactDir+'contact.html',
			controller: 'consumerContactController'
		  })
		  .when('/how-it-works', {
			templateUrl: rootdir+'how_it_works.html'
		  })
		  .when('/consumer-tips', {
		  	title: 'Advice and Top Tips' + title,
			templateUrl: crootdir+'tooltips.html'
		  })
		  .when('/cblog', {
			controller : 'blogCtrl',
			templateUrl : crootdir+'blog.html'
		  })
		  .when('/blog', {
		  	title: 'Blog' + title,
			templateUrl : blogdir+'blog.html',
			controller : 'blogPostsCtrl'
		  })
		  .when('/blog/:postSlug', {
		  	title: 'Blog' + title,
			templateUrl : blogdir+'blogPost.html',
			controller : 'blogPostCtrl'
		  })
		  .when('/consumer-services', {
		  	title: 'Our Services' + title,
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
		  	title: 'Privacy Policy' + title,
			templateUrl : rootdir+'privacypolicy.html'
		  })
		  .when('/eprivacy', {
			templateUrl : rootdir+'privacypolicy.html',
			controller : 'engineerCtrl'
		  })
		  .when('/cterms', {
		  	title: 'Terms and Conditions' + title,
			templateUrl : rootdir+'termsnconditions.html'
		  })
		  .when('/eterms' , {
			templateUrl : rootdir + 'termsnconditions.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer',{
		  	title: 'Engineer Portal' + title,
			templateUrl : erootdir+'engineer_main_content.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer-tips', {
			templateUrl : erootdir+'tooltips.html',
			controller : 'engineerCtrl'
		  })
		  .when('/engineer-tools', {
		  	title: 'Engineer Tools' + title,
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
		  	title: 'Our Charges' + title,
		  	templateUrl: crootdir + 'charges.html',
		  	//controller : ''
		  })
		  .when('/about',{
		  	title: 'About Us' + title,
		  	templateUrl: rootdir + 'about.html',
		  	//controller : ''
		  })
			.when('/care-plans',{
				title: 'Care Plans' +title,
				templateUrl:crootdir + 'careplans.html'
			})
		  .when('/404',{
		  	title: 'Oops, Page not Found' + title,
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

      	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        	$rootScope.title = current.$$route.title;
    	});
    }
  ]);