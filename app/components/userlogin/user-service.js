'use strict';

myBoilerApp.factory('User',function($firebase,$rootScope, FIREBASE_URL, Auth ){
	function setCurrentUser (username) {    // This function i added to check live example to find out where it goes.tutorial not clear
		$rootScope.currentUser = User.findByUsername(username);
	};

	var fbRef = new Firebase(FIREBASE_URL);
	var sync = $firebase(fbRef);
	var usrRef =  new Firebase(FIREBASE_URL + 'users');

	var users = $firebase(usrRef);

	var User = {
		create:function (authData){
			var user = $firebase(ref.child(authData.uid)).$asObject();
			var isNewUser = ((fbref.child("users").child(authData.uid)) == null)?false:true;
			
			fbRef.onAuth(function(authData){
				if (authData && isNewUser){
					return user.$loaded(function(){
						user.$set(authData);
						//user.authData.uid.md5_hash.$set(authData.md5_hash);
						user.$priority = authData.uid;
						user.$save();
					});
				}
			});

		},
		findByUsername:function(username){
			if(username){
				return $firebase(usrRef.child(username)).$asObject();
			}
		},
		getCurrent: function () {     //Worked out from live code
 			return $rootScope.currentUser;
		},
		signedIn: function () {			//Worked out from live code
  			return $rootScope.currentUser !== undefined;
		},
	};


/*
	return $rootScope.$on('$firebaseSimpleLogin:login', function (e, authData) {
				var query = $firebase(ref.startAt(authData.uid).endAt(authData.uid)).$asArray();   //worked out from live example tutorial not clear. Accessing the current user throughout the app
  				query.$loaded(function () {
  					console.log(query[0]);
    				setCurrentUser(query[0].username);
  				});
			}),
			$rootScope.$on('$firebaseSimpleLogin:logout', function() {								//worked out from live example tutorial not clear. Accessing the current user throught the app
  				delete $rootScope.currentUser;
			}),
			User;
*/
});