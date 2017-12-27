'use strict';

/**
 * Lists DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 */
class HomeService {

  constructor($q, AppService) {
    this.$q = $q;
    this.AppService = AppService;
  }

  /**
  * Fix the nav after scrolling
  */
  navScroll() {
    const className = 'is-transparent';
    let nav = document.getElementsByClassName('site-nav')[0];
    let mainContent = document.getElementsByClassName('main-content')[0];

    const onVisibilityChange = (callback) => {
      return () => {
        if ((nav.classList.contains(className) && mainContent.scrollTop === 0) || (!nav.classList.contains(className) && mainContent.scrollTop !== 0)) return;

        if (mainContent.scrollTop === 0) {
          if (typeof callback == 'function') callback();
        } else {
          nav.classList.remove(className);
        }
      };
    };

    let handler = onVisibilityChange(() => {
      nav.classList.add(className);
    });

    angular.element(document).ready(handler);
    angular.element(document.getElementsByClassName('main-content')).bind('load', handler);
    angular.element(document.getElementsByClassName('main-content')).bind('scroll', handler);
    angular.element(window).bind('resize', handler);
  }

}

HomeService.$inject = ['$q', 'AppService'];

export default HomeService;
