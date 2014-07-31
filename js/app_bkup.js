'use strict';
var myboilerobj = angular.module('myBoiler',[]);

myboilerobj.config(['$routeProvider',
function($routeProvider)
{
	$routeProvider.when('/manuals', {
	templateUrl : 'partials/manuals.html',
	controller : 'manualcontroller'
	});
]});

myboilerobj.controller('manualcontroller',function($scope))
{

});

/* App Module 

var myBoilerApp = angular.module('myBoiler', [
'ngRoute',
'myBoiler.filters',
'myBoiler.services',
'myBoiler.directives',
'myBoiler.controllers'
]);

myBoilerApp.config(['$routeProvider', function($routeProvider) 
{
	$routeProvider.when('/',{ templateUrl : '../index.html'});
	$routeProvider.when('/manuals', { templateUrl : 'manuals.html', controller : 'manualscntrl' });
}]);
*/