'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('#/', {templateUrl: 'partials/experience.html', controller: 'PageCtrl'});
  $routeProvider.when('/Experience', {templateUrl: 'partials/experience.html', controller: 'PageCtrl'});
  $routeProvider.when('/Web-Dev', {templateUrl: 'partials/web-dev.html', controller: 'PageCtrl'});
  $routeProvider.when('/Resume', {templateUrl: 'partials/resume.html', controller: 'PageCtrl'});
  $routeProvider.when('/Favourites', {templateUrl: 'partials/favourites.html', controller: 'PageCtrl'});
  $routeProvider.when('/Interests', {templateUrl: 'partials/interests.html', controller: 'PageCtrl'});
  $routeProvider.when('/404', {templateUrl: 'partials/404.html', controller: 'PageCtrl'});
  $routeProvider.otherwise({redirectTo: '/404'});
}]);
