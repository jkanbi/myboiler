(function () {

	myBoilerApp.controller('manualsCtrl',['$scope','$firebaseObject','FIREBASE_URL',function($scope,$firebaseObject,FIREBASE_URL) {
			var ref =  new Firebase(FIREBASE_URL + "/brands");
			var obj = $firebaseObject(ref);
			$scope.brands = obj;
			obj.$loaded().then(function() {
    		 console.log("record has id", obj.$id);
  			});
		}
	]);

})();