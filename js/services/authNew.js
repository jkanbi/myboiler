
'use strict';

myBoilerApp.factory('Auth',
  function (FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);

    var Auth = {
      register: function (user) {
        return ref.createUser({
          email: user.email, 
          password: user.password
        }, function(err) {
            if (err) {
              switch (err.code) {
                case 'EMAIL_TAKEN':
                  // The new user account cannot be created because the email is already in use.
                case 'INVALID_EMAIL':
                  // The specified email is not a valid email.
                case default:
              }
            } else {
              // User account created successfully!
            }
        });
      },
      signedIn: function () {
        //Synchronous Authentication Check
        return ref.getAuth();
      },
      login: function (user) {
        return ref.authWithPassword({
          "email": user.email
          "password" : user.password
        },function(err,authData){
            if (error) {
              console.log('Login Failed!', error);
            } else {
            console.log('Authenticated successfully with payload:', authData);
            }
        });
      },
      flogin:function () {
        //OLD return ref.$login('facebook',{scope:'email,user_likes'});
        // prefer pop-ups, so we don't navigate away from the page
          ref.authWithOAuthPopup("facebook", function(err, authData) {
            if (err) {
              if (err.code === "TRANSPORT_UNAVAILABLE") {
                // fall-back to browser redirects, and pick up the session
                // automatically when we come back to the origin page
                ref.authWithOAuthRedirect("facebook", function(err, authData) { ... });
              }
            } else if (authData) {
              // user authenticated with Firebase
            }
          });
      },
      glogin:function () {
        //OLD return ref.$login('google',{scope:'https://www.googleapis.com/auth/plus.login'});
          // prefer pop-ups, so we don't navigate away from the page
          ref.authWithOAuthPopup("google", function(err, authData) {
            if (err) {
              if (err.code === "TRANSPORT_UNAVAILABLE") {
                // fall-back to browser redirects, and pick up the session
                // automatically when we come back to the origin page
                ref.authWithOAuthRedirect("google", function(err, authData) { ... });
              }
            } else if (authData) {
              // user authenticated with Firebase
            }
          });
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

