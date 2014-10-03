'use strict';

myBoilerApp.factory('User',function($firebase,$rootScope, FIREBASE_URL, Auth ){
	function setCurrentUser (username) {    // This function i added to check live example to find out where it goes.tutorial not clear
		$rootScope.currentUser = User.findByUsername(username);
	};

	var ref =  new Firebase(FIREBASE_URL + 'users');

	var users = $firebase(ref);

	var User = {
		create:function (authUser,username,email){
			var user = $firebase(ref.child(username)).$asObject();

			return user.$loaded(function(){
				user.username = username;
				user.email = email;
				user.md5_hash = authUser.md5_hash;
				user.$priority = authUser.uid;
				user.$save();
			});
		},
		findByUsername:function(username){
			if(username){
				return $firebase(ref.child(username)).$asObject();
			}
		},
		getCurrent: function () {     //Worked out from live code
 			return $rootScope.currentUser;
		},
		signedIn: function () {			//Worked out from live code
  			return $rootScope.currentUser !== undefined;
		},
	};



	return $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
				var query = $firebase(ref.startAt(authUser.uid).endAt(authUser.uid)).$asArray();   //worked out from live example tutorial not clear. Accessing the current user throughout the app
  				query.$loaded(function () {
  					console.log(query[0]);
    				setCurrentUser(query[0].username);
  				});
			}),
			$rootScope.$on('$firebaseSimpleLogin:logout', function() {								//worked out from live example tutorial not clear. Accessing the current user throught the app
  				delete $rootScope.currentUser;
			}),
			User;
});