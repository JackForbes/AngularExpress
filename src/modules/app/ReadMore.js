'use strict';

/**
 * Dynamically Show/Hide a Read More link
 */
function ReadMore($timeout) {
  return {
    template: `<div>
      <div class="slide-open" ng-style="{'max-height': maxHeight}" ng-transclude>
      </div>
      <a ng-show="isExpandable" class="inline-block margin-top-sm" ng-click="toggle()" localize>
      Read {{ isExpanded ? 'less' : 'more' }}
      <md-icon class="icon--12 icon--primary rotate-transition" md-svg-icon="dropdown_blue" ng-class="{'rotate-180': isExpanded}"></md-icon>
      </a>
    </div>`,
    restrict: 'A',
    transclude: true,
    link: function(scope, elem, attrs) {
      scope.isExpanded = false;
      scope.isExpandable = false;
      scope.maxHeight = attrs.collapsedHeight;
      const renderStyles = () => {
        if (elem[0] && elem[0].clientHeight >= attrs.collapsedHeight && !scope.isExpanded) {
          scope.fullHeight = elem[0].clientHeight;
          scope.isExpandable = true;
        }
      };

      $timeout(() => {
        renderStyles();
      });

      scope.toggle = () => {
        scope.isExpanded = !scope.isExpanded;
        scope.maxHeight = scope.isExpanded ? scope.fullHeight : attrs.collapsedHeight;
      };
    }
  };
}

ReadMore.$inject = ['$timeout'];

export default ReadMore;
