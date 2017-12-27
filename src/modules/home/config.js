function config ($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc'
    })
    .state('home.contact', {
      url: 'contact',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc',
      data: {
        pageTitle: 'Contact Us — PadPiper'
      }
    });
}

config.$inject = ['$stateProvider'];

export default config;
