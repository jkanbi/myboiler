
'use strict';

myBoilerApp.factory('Auth',
  function ($firebaseAuth, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
    $rootScope.authObj = $firebaseAuth(ref);
    var Auth = {
      register: function (user) {
        return ref.createUser({"email" : user.email, "password": user.password}, function(error) {
          if (error === null) {
            console.log("User created successfully");
          } else {
            console.log("Error creating user:", error);
          };
        });

      },
      signedIn: function () {
        return ref.getAuth();
      },
      login: function (user) {
        return ref.authWithPassword({"email": user.email,"password" : user.password},function(){});
      },
      flogin:function () {
        return ref.authWithOAuthPopup("facebook",{scope:'email,user_likes'});
      },
      glogin:function () {
        return ref.authWithOAuthPopup("google",{scope:'https://www.googleapis.com/auth/plus.login'});
      },
      logout: function () {
        ref.unauth();
      }
    };

    $rootScope.signedIn = function () {
      return Auth.signedIn();
    };

    return Auth;
  });

