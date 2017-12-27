'use strict';

/**
 * Nav Template
 */
function Nav() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/components/nav.html')
  };
}

export default Nav;
