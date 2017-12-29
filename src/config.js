function config ($sceDelegateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $mdDialogProvider, $mdIconProvider) {

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    '*://www.youtube.com/embed/**'
  ]);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/404');

  let cyanLight = $mdThemingProvider.extendPalette('cyan', {
    'contrastDefaultColor': 'light'
  });
  let backgroundWhite = $mdThemingProvider.extendPalette('grey', {
    '50': '#FFFFFF'
  });
  let defaultTheme = $mdThemingProvider.theme('default');
  $mdThemingProvider.definePalette('backgroundWhite', backgroundWhite);
  defaultTheme.backgroundPalette('backgroundWhite');
  defaultTheme.foregroundPalette['3'] = 'rgba(0,0,0,.54)';
  $mdThemingProvider.definePalette('cyanLight', cyanLight);
  defaultTheme.primaryPalette('cyanLight');
  defaultTheme.accentPalette('grey', {
    'default': '900',
    'hue-1': 'A700'
  });

  $mdThemingProvider.enableBrowserColor({
    theme: 'default',
    palette: 'primary',
    hue: '500'
  });

  $mdDialogProvider.addPreset('basic', {
    options: () => {
      return {
        bindToController: true,
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        escapeToClose: true,
        controllerAs: 'dialog',
        controller: ['$mdDialog', function($mdDialog) {
          this.hideDialog = () => {
            $mdDialog.hide();
          };
        }]
      };
    }
  });

  $mdIconProvider
    .defaultIconSet(`${STATIC_IMAGES_URL}svg/bfg-all-icons-min.svg`, 24);
}

config.$inject = ['$sceDelegateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', '$mdDialogProvider', '$mdIconProvider'];

export default config;
