'use strict';

/**
 * Main Controller for the application
 */
class AppController {

  constructor(AppService, HomeService) {
    this.AppService     = AppService;

    this.contactUs      = (ev) => { HomeService.contactUs(ev); };

    this.isIE();
  }


  // *********************************
  // Internal methods
  // *********************************

  /**
  * Scroll to the top of the main-content element
  */
  isIE() {
    let ua = window.navigator.userAgent;
    let isIE = /MSIE|Trident/.test(ua);
    if (isIE)
      document.body.classList.add('is-ie');
  }

  /**
   * Go to a specified page
   */
  goToPage(ev, sref) {
    this.state.go(sref, {}, { reload: true });
  }

  /**
   * Scroll to the top of the main-content element
   */
  scrollToTop() {
    document.getElementsByClassName('main-content')[0].scrollTop = 0;
  }


  // *********************************
  // Utility methods
  // *********************************

  /**
  * Create filter for a query string
  */
  createFilterFor(query) {
    let lowercaseQuery = angular.lowercase(query);
    return function filterFn(item) {
      return (item.value.indexOf(lowercaseQuery) === 0);
    };
  }

  /**
   * Check if array includes element
   */
  includes(substrings, string) {
    return this.AppService.includes(substrings, string);
  }

}

AppController.$inject = ['AppService', 'HomeService'];

export default AppController;
