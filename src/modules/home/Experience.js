'use strict';

/**
 * Experience Template
 */
function Experience() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/experience.html')
  };
}

export default Experience;
