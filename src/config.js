function config ($sceDelegateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $mdDialogProvider, $mdIconProvider) {

  if ((ENV === 'production' || ENV === 'production') && typeof Raven != 'undefined' && typeof Raven !== null)
    Raven.config(`https://${SENTRY_API_KEY}`).install();

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://s3.amazonaws.com/dev-images.padpiper.com/**',
    'https://s3.amazonaws.com/images.padpiper.com/**',
    'https://s3.amazonaws.com/static-images.padpiper.com/**',
    '*://www.youtube.com/embed/**',
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
    .defaultIconSet(`${STATIC_IMAGES_URL}svg/bfg-all-icons-min.svg`, 24)
    .icon('padpiper', `${STATIC_IMAGES_URL}svg/padpiper-primary.svg`, 24)
    .icon('logo', `${STATIC_IMAGES_URL}svg/logo-black.svg`, 24)
    .icon('sun', `${STATIC_IMAGES_URL}svg/sun.svg`, 24);
}

config.$inject = ['$sceDelegateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', '$mdDialogProvider', '$mdIconProvider'];

export default config;
