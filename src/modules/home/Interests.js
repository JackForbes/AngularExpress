'use strict';

/**
 * Interests Template
 */
function Interests() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/interests.html')
  };
}

export default Interests;
