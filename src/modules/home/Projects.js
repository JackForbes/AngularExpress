'use strict';

/**
 * Projects Template
 */
function Projects() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/projects.html')
  };
}

export default Projects;
