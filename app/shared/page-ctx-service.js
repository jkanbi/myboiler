myBoilerApp.provider('myPageCtx', function() {
	var crootdir = 'views/consumer/'	

  var defaultCtx = {
    title: 'Default Title',
    headerUrl: crootdir + 'header.html',
    footerUrl: crootdir + 'footer.html'
  };

  var currentCtx = angular.copy(defaultCtx);

  return {
    $get: function($rootScope) { 

      // We probably want to revert back to the default whenever
      // the location is changed.

      $rootScope.$on('$locationChangeStart', function() {
        angular.extend(currentCtx, defaultCtx);
      }); 

      return currentCtx; 
    }
  };
});