'use strict';

/**
 * Fix an element on scroll
 */
function Sticky($window, $timeout, $mdMedia) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      const contentMaxWidth = 1280;
      let topClass = 'stuck';
      let bottomClass = 'bottom';
      let paneHeight;
      let imageHeight;
      let content = document.querySelector('.listing-container');
      let screenWidth;
      let right;

      function onScroll() {
        if (this.scrollTop >= imageHeight && this.scrollTop < (imageHeight + content.offsetHeight - paneHeight)) {
          elem.css('right', `${right}px`);
          elem.addClass(topClass);
          elem.removeClass(bottomClass);
        } else if (this.scrollTop >= (imageHeight + content.offsetHeight - paneHeight)) {
          elem.css('right', '0px');
          elem.removeClass(topClass);
          elem.addClass(bottomClass);
        } else {
          elem.css('right', '0px');
          elem.removeClass(topClass);
          elem.removeClass(bottomClass);
        }
      }

      const bindScroll = () => {
        if (!$mdMedia('gt-sm')) return;

        screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        right = Math.max((screenWidth - contentMaxWidth) / 2, 0);
        paneHeight = elem[0].clientHeight;
        imageHeight = document.querySelector('.carousel').offsetHeight;
        angular.element(document.getElementsByClassName('main-content')[0]).bind('scroll', onScroll);
      };

      const cleanUp = () => {
        angular.element($window).off('resize', bindScroll);
        angular.element(document.getElementsByClassName('main-content')[0]).off('scroll', onScroll);
      };

      $timeout(() => {
        bindScroll();
        angular.element($window).on('resize', bindScroll);
        scope.$on('$destroy', cleanUp);
      });
    }
  };
}

Sticky.$inject = ['$window', '$timeout', '$mdMedia'];

export default Sticky;
