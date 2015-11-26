'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('#/', {
    templateUrl: 'partials/experience.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/experience', {
    templateUrl: 'partials/experience.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/projects', {
    templateUrl: 'partials/projects.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/resume', {
    templateUrl: 'partials/resume.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/quotes', {
    templateUrl: 'partials/quotes.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/interests', {
    templateUrl: 'partials/interests.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/404', {
    templateUrl: 'partials/404.html',
    controller: 'PageCtrl'
  });
  $routeProvider.otherwise({
    redirectTo: '/experience',
    templateUrl: 'partials/experience.html',
    controller: 'PageCtrl'
  });

  // $locationProvider.html5Mode(true);
}]);
