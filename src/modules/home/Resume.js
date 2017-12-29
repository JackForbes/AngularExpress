'use strict';

/**
 * Resume Template
 */
function Resume() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/resume.html')
  };
}

export default Resume;
