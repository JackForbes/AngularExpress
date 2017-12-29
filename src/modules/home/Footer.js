'use strict';

/**
 * Footer Template
 */
function Footer() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/components/footer.html')
  };
}

export default Footer;
