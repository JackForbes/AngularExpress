'use strict';

/**
 * Home Controller for the app
 */
class HomeController {

  constructor ($state, $scope, $stateParams, $mdDialog, $document, $timeout, HomeService, AppService, DisplayService) {
    this.$state           = $state;
    this.$scope           = $scope;
    this.$mdDialog        = $mdDialog;
    this.$document        = $document;
    this.$timeout         = $timeout;
    this.HomeService      = HomeService;
    this.AppService       = AppService;
    this.DisplayService   = DisplayService;

    this.init();
  }

  /**
  * Initialize the home controller
  */
  init() {
    this.selectedTabIndex     = 0;
    this.interestIndex        = 2;
    this.photoIndex           = 0;
    this.carouselTranslate    = 0;
    this.carouselContentWidth = 0;
    this.photoIndex           = 0;
    this.imageBuffer          = 5;
    this.imageGutter          = 8;

    this.bindImageLoad();

    this.$document.bind('keyup', (e) => {
      this.keyPress(e.keyCode);
    });

    if (this.$state.current.data && this.$state.current.data.tabIndex != 'undefined')
      this.selectedTabIndex = this.$state.current.data.tabIndex;
  }

  /**
  * Initialize the map
  */
  initMap() {
    this.$timeout(() => {
      var mapCanvas = document.getElementById('map-canvas');
      if (!mapCanvas || this.markers) {
        return;
      }
      var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(43.0000, -102.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };

      this.map = new google.maps.Map(mapCanvas, mapOptions);
      this.markers = [];
      var infoWindow = new google.maps.InfoWindow();

      var createMarker =  (info) => {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(info.lat, info.long),
          map: this.map,
          icon: info.iconSrc,
          title: info.company
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', ()=> {
          infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
          infoWindow.open(this.map, marker);
        });

        this.markers.push(marker);
      };

      for (var i = 0; i < this.DisplayService.cities.length; i++) {
        createMarker(this.DisplayService.cities[i]);
      }
    }, 0);
  }

  /**
  * Open map info window
  */
  openInfoWindow(e, selectedMarker) {
    e.preventDefault();
    google.maps.event.trigger(selectedMarker, 'click');
  }

  /**
  * Check if letter is selected
  */
  isSelectedLetter(index) {
    var selectedIndices = [12,13,14,26,27,28,29,33,34,35,49,50,51,52,53];
    return selectedIndices.indexOf(index) > -1;
  }

  /**
  * Cycle photos on arrow keypress
  */
  keyPress(which) {
    if (!which || !this.DisplayService.interests[this.interestIndex].gallery.length) return;

    if (which === 37 && this.photoIndex !== 0) {
      this.changePhoto('prev');
      this.$scope.$apply();
    } else if (which === 39 && this.photoIndex !== this.DisplayService.interests[this.interestIndex].gallery.length - 1) {
      this.changePhoto('next');
      this.$scope.$apply();
    }
  }

  /**
  * Photo Carousel Controls
  */
  changePhoto(direction) {
    if ((direction === 'prev' && this.photoIndex === 0) || (direction === 'next' && this.isMaxTranslate)) return;

    if (direction === 'next')
      this.photoIndex++;

    this.checkCarouselWidth();

    if (direction === 'next') {
      if (!document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:nth-child(${this.photoIndex + 1})`)) return;

      const nextOffsetLeft = document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:nth-child(${this.photoIndex + 1})`).offsetLeft;
      this.isMaxTranslate = nextOffsetLeft > this.maxTranslate;
      this.carouselTranslate = this.maxTranslate ? Math.min(nextOffsetLeft, this.maxTranslate) : nextOffsetLeft;
    } else {
      if (!document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:nth-child(${this.photoIndex})`)) return;

      const prevOffsetLeft = document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:nth-child(${this.photoIndex})`).offsetLeft;
      this.isMaxTranslate = false;
      this.carouselTranslate = prevOffsetLeft;
    }

    document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel`).style.transform = `translate3d(-${this.carouselTranslate}px, 0, 0)`;

    if (direction === 'prev')
      this.photoIndex--;
  }

  /**
  * Bind the image load event to check the carousel width
  */
  bindImageLoad() {
    this.$timeout(() => {
      const firstImage = angular.element(document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:first-child`));
      if (!firstImage) return;
      firstImage.bind('load', () => {
        this.checkCarouselWidth();
        this.$scope.$apply();
      });
    });
  }

  /**
  * Check the carousel width to hide controls if need be
  */
  checkCarouselWidth() {
    if (!this.carouselContentWidth && this.DisplayService.interests[this.interestIndex].gallery.length - this.photoIndex < this.imageBuffer) {
      this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const lastImage = document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:last-child`);
      if (lastImage) {
        this.carouselContentWidth = lastImage.offsetLeft + lastImage.width;
        this.maxTranslate = (this.carouselContentWidth - this.screenWidth) - this.imageGutter;
      }
    }

    if (!document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:nth-child(${this.photoIndex + 1})`)) return;

    const nextOffsetLeft = document.querySelector(`.interest:nth-child(${this.interestIndex + 1}) .carousel img:nth-child(${this.photoIndex + 1})`).offsetLeft;
    this.isMaxTranslate = nextOffsetLeft > this.maxTranslate;
  }

  /**
  * Check if photo is active based on index
  */
  isActivePhoto(index) {
    return this.photoIndex === index;
  }

  /**
  * Choose previous photo
  */
  showPrevPhoto(total) {
    this.photoIndex = this.photoIndex == 0 ? total - 1 : this.photoIndex - 1;
  }

  /**
  * Choose next photo
  */
  showNextPhoto(total) {
    this.photoIndex = this.photoIndex == (total - 1) ? 0 : this.photoIndex + 1;
  }

  /**
  * Set the photo index
  */
  showPhoto(index) {
    this.photoIndex = index;
  }

  /**
  * Interest Gallery Controls
  */
  prevInterest(numInterests) {
    this.interestIndex = this.interestIndex === 0 ? numInterests - 1 : this.interestIndex - 1;
  }

  /**
  * Interest Gallery Controls
  */
  nextInterest(numInterests) {
    this.interestIndex = this.interestIndex === numInterests - 1 ? 0 : this.interestIndex + 1;
  }

  /**
  * Update url when tab changes
  */
  updateUrl(state) {
    this.AppService.transitionToState(state);
  }

  /**
  * Konami Handler
  */
  konami() {
    this.showCrosby = true;
    // document.body.classList.toggle('sunset');
  }

}

HomeController.$inject = ['$state', '$scope', '$stateParams', '$mdDialog', '$document', '$timeout', 'HomeService', 'AppService', 'DisplayService'];

export default HomeController;
