/*  Directives  */
myBoilerApp.directive('markdown', function ($http) {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      scope: { link:'@' },
      link: function (scope, element, attrs) {
        attrs.$observe('link',function(link){
            $http.get('components/blog/files/' + link).success(function(response){
              var htmlText = converter.makeHtml(response);
              element.html(htmlText);
            });
        });
      }
    };
  });

myBoilerApp.directive('contentMarkdown', function ($http) {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      scope: { link:'@' },
      link: function (scope, element, attrs) {
        attrs.$observe('link',function(link){
            $http.get('https://myboiler.com/v3/components/content/files/' + link).success(function(response){
              var htmlText = converter.makeHtml(response);
              element.html(htmlText);
            });
        });
      }
    };
  });