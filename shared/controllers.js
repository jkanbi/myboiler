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

})();