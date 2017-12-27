'use strict';

/**
 * Konami Fun
 */
function Konami($document) {
  return {
    restrict: 'A',
    scope: {
      konami: '&'
    },
    link: function(scope) {
      let konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], konami_index = 0;

      let handler = function(e) {
        if (e.keyCode === konami_keys[konami_index++]) {
          if (konami_index === konami_keys.length) {
            $document.off('keydown', handler);
            scope.$apply(scope.konami);
          }
        } else {
          konami_index = 0;
        }
      };

      $document.on('keydown', handler);

      scope.$on('$destroy', function() {
        $document.off('keydown', handler);
      });
    }
  };
}

Konami.$inject = ['$document'];

export default Konami;
