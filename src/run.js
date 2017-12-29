function run($rootScope) {

  // Conditionally show Intercom on state change
  function stateChangeStart(event, toState) { // eslint-disable-line angular/on-watch
    // Set page title
    $rootScope.pageTitle = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Jack Forbes';
  }

  $rootScope.$on('$stateChangeStart', stateChangeStart); // eslint-disable-line angular/on-watch
}

run.$inject = ['$rootScope'];

export default run;
