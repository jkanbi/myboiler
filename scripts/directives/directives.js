
/*  Directives  */

	var crootdir = "partials/consumer/";
	var erootdir = "partials/engineer/";

	//Add new pages to the following arrays.
	//If pages aren't added to the following arrays, then header and footer are not displayed.
	var clinks = new Array('','/','/index.html','/consumer','/consumer-services','/cmanuals','/cblog','/consumer-engineer-search','/consumer-contact','/cterms','/cprivacy','/consumer-tips','/nest-thermostat','/login','/register','/account');
	var elinks = new Array('/engineer','/engineer-tips','/emanuals','/eblog','/engineer-tools','/engineer-contact','/eterms','/eprivacy','/ecopyright','/login','/register');

	myBoilerApp.directive("ngHeader", function($location)
	{
		var url = $location.path();
		
		if(jQuery.inArray(url, clinks) != '-1')
		{
			return { 
				restrict:'E', 
				templateUrl: crootdir+'header.html' 
			};
		}
		else if(jQuery.inArray(url, elinks) != '-1')
		{ 
			return { 
				restrict:'E', 
				templateUrl: erootdir+'header.html' 
			}; 
		}
	});

	myBoilerApp.directive("ngFooter",function($location)
	{
		var url = $location.path();
		
		if(jQuery.inArray(url, clinks) != '-1')
		{
			return { 
				restrict:'E', 
				templateUrl: crootdir+'footer.html' 
			};
		}
		else if(jQuery.inArray(url, elinks) != '-1')
		{
			return { 
				restrict:'E', 
				templateUrl: erootdir+'footer.html' 
			}; 
		}
	});