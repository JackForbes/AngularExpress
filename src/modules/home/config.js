function config ($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc'
    })
    .state('experience', {
      url: '/experience',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc',
      data: {
        tabIndex: 0,
        pageTitle: 'Jack Forbes Experience'
      }
    })
    .state('projects', {
      url: '/projects',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc',
      data: {
        tabIndex: 1,
        pageTitle: 'Jack Forbes Projects'
      }
    })
    .state('resume', {
      url: '/resume',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc',
      data: {
        tabIndex: 2,
        pageTitle: 'Jack Forbes Resume'
      }
    })
    .state('view-resume', {
      url: '/external/Jack_Forbes_Resume.pdf'
    })
    .state('quotes', {
      url: '/quotes',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc',
      data: {
        tabIndex: 3,
        pageTitle: 'Jack Forbes Favourite Quotes'
      }
    })
    .state('interests', {
      url: '/interests',
      template: require('../../public/views/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'hc',
      data: {
        tabIndex: 4,
        pageTitle: 'Jack Forbes Interests'
      }
    });
}

config.$inject = ['$stateProvider'];

export default config;
