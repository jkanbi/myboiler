(function () {

	myBoilerApp.controller('manualsCtrl',['$scope','$firebase',function($scope,$firebase) {
			var ref =  new Firebase("https://myboiler.firebaseio.com/brands");
			var sync = $firebase(ref);
			var syncobject = sync.$asObject();
			$scope.brands = syncobject;
			syncobject.$loaded().then(function() {
    		 console.log("record has id", syncobject.$id);
  			});

			//ref.on('child_added', function(snapshot) {
        	//	var message = snapshot.val();
        	//	$scope.documents = message;
        		//displayChatMessage (message.name, message.text);
      		//});  
			//sync.$loaded().then(function() {
     		//	console.log("list has " + list.length + " items");
  			//});
			

			//$scope.documents = $firebase(ref).$asobject();
		}
	]);

})();