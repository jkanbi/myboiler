(function () {

	myBoilerApp.controller('documentsCtrl',['$scope','$firebaseObject','$routeParams','FIREBASE_URL', function($scope,$firebaseObject,$routeParams,FIREBASE_URL) {
		// The following worked to get params , http://www.thinkster.io/angularjs/w9lVd0qRp6/angularjs-routeparams
		var brandId = $routeParams.brandId;
		$scope.brandId = brandId;
		console.log(brandId);
		
		var ref =  new Firebase(FIREBASE_URL + "/brands/" + brandId + "/Documents");

		var obj = $firebaseObject(ref);

		$scope.documents = obj;

		obj.$loaded().then(function() {
			console.log("record has id", obj.$id);
		});
	}]);
})();
