'use strict';

/**
 * Home Controller for the app
 */
class HomeController {

  constructor ($state, $stateParams, $mdDialog, HomeService, AppService, DisplayService, $timeout) {
    this.$state           = $state;
    this.$mdDialog        = $mdDialog;
    this.HomeService      = HomeService;
    this.AppService       = AppService;
    this.$timeout         = $timeout;

    this.mooseSide        = `${STATIC_IMAGES_URL}animals/moose-side.png`;

    this.display          = DisplayService;
    this.selectedTabIndex = $stateParams.selectedTabIndex;
    this.cityIndex        = 2;


    this.init();
  }


  // *********************************
  // Internal methods
  // *********************************

  /**
  * Init the home controller
  */
  init() {
  }

  /**
  * Update url when Misc tab changes
  */
  updateUrl(state) {
    this.AppService.transitionToState(state);
  }

  /**
  * Konami Handler
  */
  konami() {
    document.body.classList.toggle('sunset');
  }

}

HomeController.$inject = ['$state', '$stateParams', '$mdDialog', 'HomeService', 'AppService', 'DisplayService', '$timeout'];

export default HomeController;
