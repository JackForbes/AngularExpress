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
  $routeProvider.when('/Experience', {templateUrl: 'partials/experience.html', controller: 'PageCtrl'});
  $routeProvider.when('/Web-Dev', {templateUrl: 'partials/web-dev.html', controller: 'PageCtrl'});
  $routeProvider.when('/Resume', {templateUrl: 'partials/resume.html', controller: 'PageCtrl'});
  $routeProvider.when('/Angular', {templateUrl: 'partials/angular.html', controller: 'PageCtrl'});
  $routeProvider.when('/Interests', {templateUrl: 'partials/interests.html', controller: 'PageCtrl'});
  $routeProvider.otherwise({redirectTo: '/Experience'});
}]);
