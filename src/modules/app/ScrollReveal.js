'use strict';

/**
 * Dynamically Set Page Title
 */
function ScrollReveal($window) {
  return {
    link: function(scope, elem, attrs) {
      let className = 'is-visible';
      let ratio = attrs.scrollReveal ? attrs.scrollReveal / 100 : .8;

      const isElementInViewport = (el) => {
        let rect = el.getBoundingClientRect();
        return (
          rect.top > 0 &&
          rect.top <= window.innerHeight * ratio
        );
      };

      const onVisibilityChange = (el, callback) => {
        let old_visible;
        return () => {
          if (el.classList.contains(className)) return;

          let visible = isElementInViewport(el);
          if (visible && visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') callback();
          }
        };
      };

      let handler = onVisibilityChange(elem[0], () => {
        elem.addClass(className);
      });

      angular.element(document).ready(handler);
      angular.element(document.getElementsByClassName('main-content')).bind('load', handler);
      angular.element(document.getElementsByClassName('main-content')).bind('scroll', handler);
      angular.element($window).bind('resize', handler);
    }
  };
}

ScrollReveal.$inject = ['$window'];

export default ScrollReveal;
