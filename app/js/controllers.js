'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PageCtrl', ['$scope', 'SiteModel', function($scope, SiteModel) {
    $scope.initialize = function() {
      $scope.SiteModel = SiteModel;
      $scope.setTab('experience');
      $scope.setInterestsTab('soccer');
    };

    $scope.setTab = function(activeTab) {
      $scope.activeTab = activeTab;
    };

    $scope.setInterestsTab = function(activeTab) {
      $scope.interestsTab = activeTab;
    };

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
