/* Controllers */

//Wrapping your javascript in a closure is a good habit! From CodeSchool.
(function () {

// create controller name

//will display main content of index page
	myBoilerApp.controller('mainContentCtrl',function($scope,myPageCtx){
		$scope.title = 'Consumer Home - MyBoiler.com'
		$scope.pageCtx = myPageCtx;
	});

	myBoilerApp.controller('engineerCtrl',function($scope,myPageCtx){
		var erootdir = 'views/engineer/'
		myPageCtx.title = 'Engineer Home - MyBoiler.com';
		myPageCtx.headerUrl = erootdir + 'header.html';
  		myPageCtx.footerUrl = erootdir + 'footer.html';
	});

	myBoilerApp.controller('blogCtrl',['$scope', function($scope)
	{
		var myDataRef = new Firebase('https://myboiler.firebaseio.com/blogdata/categories').on('child_added',show);
		
		function show(snap) 
		{
			var item = snap.val();
			var category = snap.val();  //use name to get child name
			var itemDashed = item.toString().replace(/\s+/g, '-').toLowerCase();
			$('.showCategory').append("<li class='cat-item'><a href='http://www.myboiler.com/blog/"+ itemDashed +"'>"+ category +"</a></li>");
			//console.log(snap);
		}
	}]);

	myBoilerApp.controller('consumerContactController',function($scope, contactsService)
	{
		$scope.EMAIL_REGEXP = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
		
		$scope.master = {};

		$scope.captchaCode = function()
		{
			var min = 1000;
			var max = 9999;
			var num = Math.floor(Math.random() * (max - min + 1)) + min;
			//alert(num);
			$scope.generatedCaptcha = num;
		}
		
		$scope.noSelection = function()
		{		
			alert("Copy Disabled");
		}
		
		$scope.saveContact = function()
		{
			var status = contactsService.saveContactInfo($scope.contact);
			alert("contact submit");
			$scope.reset();

		}

		$scope.reset =  function ()
		{
			$scope.contact = angular.copy($scope.master);
			$scope.contactsubmit = false;
			$scope.consumercontact.$setPristine();
		}
	});

})();