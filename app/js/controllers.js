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

    $scope.isActiveTab = function(itemName) {
      return $scope.activeTab == itemName;
    };

    $scope.setInterestsTab = function(activeTab) {
      $scope.interestsTab = activeTab;
    };

    $scope.$on('$viewContentLoaded', function() {
      var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(41.5000, -102.0000),
          mapTypeId: google.maps.MapTypeId.TERRAIN
      }

      $scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      $scope.markers = [];
      var infoWindow = new google.maps.InfoWindow();

      var createMarker = function (info){
        var marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.lat, info.long),
          title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
          infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);
      }

      for (var i = 0; i < SiteModel.cities.length; i++){
        createMarker(SiteModel.cities[i]);
      }
    });

    $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    }

    $scope.isSelectedLetter = function(index) {
      var selectedIndices = [12,13,14,26,27,28,29,33,34,35,49,50,51,52,53];
      console.log(selectedIndices.indexOf(index) > -1);
      return selectedIndices.indexOf(index) > -1;
    }

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
