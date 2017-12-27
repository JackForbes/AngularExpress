function config ($stateProvider) {

  $stateProvider
    .state('404', {
      url: '/404',
      template: require('../../public/views/404.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc'
    });

}

config.$inject = ['$stateProvider'];

export default config;
