//http://hugodias.github.io/angularjs/markdown/blog/creating-a-markdown-blog-using-angular-js/

'use strict';

(function () {

var blogApp = angular.module('blogApp',[]);

blogApp.factory('Posts', function($http) {
		return{
			getPosts: function(callback){
				$http.get('components/blog/posts.json').success(callback);
			}
    	}
  });

blogApp.controller('blogPostsCtrl',['$scope','Posts', function($scope,Posts)
	{
		var myDataRef = new Firebase('https://myboiler.firebaseio.com/blogdata/categories').on('child_added',show);
		
		Posts.getPosts(function(data){
			$scope.posts = data;
		})

		function show(snap) 
		{
			var item = snap.val();
			var category = snap.val();  //use name to get child name
			var itemDashed = item.toString().replace(/\s+/g, '-').toLowerCase();
			$('.showCategory').append("<li class='cat-item'><a href='http://www.myboiler.com/blog/"+ itemDashed +"'>"+ category +"</a></li>");
			//console.log(snap);
		}
	}]);

blogApp.controller('blogPostCtrl',['$scope','Posts','$routeParams', function($scope,Posts,$routeParams)
	{
		var myDataRef = new Firebase('https://myboiler.firebaseio.com/blogdata/categories').on('child_added',show);
		var postSlug = $routeParams.postSlug
		$scope.postSlug = postSlug;
		
		function show(snap) 
		{
			var item = snap.val();
			var category = snap.val();  //use name to get child name
			var itemDashed = item.toString().replace(/\s+/g, '-').toLowerCase();
			$('.showCategory').append("<li class='cat-item'><a href='http://www.myboiler.com/blog/"+ itemDashed +"'>"+ category +"</a></li>");
			//console.log(snap);
		}
	}]);

})();

