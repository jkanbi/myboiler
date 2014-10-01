
/*  Directives  */

	var crootdir = "partials/consumer/";
	var erootdir = "partials/engineer/";

	var clinks = new Array('','/','/index.html','/consumer','/consumer-services','/cmanuals','/cblog','/consumer-engineer-search','/consumer-contact','/cterms','/cprivacy','/consumer-tips');
	var elinks = new Array('/engineer','/engineer-tips','/emanuals','/eblog','/engineer-tools','/engineer-contact','/eterms','/eprivacy','/ecopyright');

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