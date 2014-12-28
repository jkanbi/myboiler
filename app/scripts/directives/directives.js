
/*  Directives  */
		myBoilerApp.directive('contentMarkdown', function ($http) {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      scope: { link:'@' },
      link: function (scope, element, attrs) {
        attrs.$observe('link',function(link){
            $http.get('components/content/files/' + link).success(function(response){
              var htmlText = converter.makeHtml(response);
              element.html(htmlText);
            });
        });
      }
    };
  });