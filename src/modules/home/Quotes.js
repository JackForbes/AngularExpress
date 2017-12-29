'use strict';

/**
 * Quotes Template
 */
function Quotes() {
  return {
    restrict: 'E',
    replace: 'true',
    template: require('../../public/views/quotes.html')
  };
}

export default Quotes;
