(function () {

	myBoilerApp.controller('documentsCtrl',['$scope','$firebase','$routeParams','FIREBASE_URL', function($scope,$firebase,$routeParams,FIREBASE_URL) {
		// The following worked to get params , http://www.thinkster.io/angularjs/w9lVd0qRp6/angularjs-routeparams
		var brandId = $routeParams.brandId;
		$scope.brandId = brandId;
		console.log(brandId);
		
		var ref =  new Firebase(FIREBASE_URL + "/brands/" + brandId + "/Documents");
		var sync = $firebase(ref);
		var syncobject = sync.$asObject();
		$scope.documents = syncobject;
		syncobject.$loaded().then(function() {
		 console.log("record has id", syncobject.$id);
			});

	}
	]);

})();
