'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './config';
import AppController from './AppController';
import AppService from './AppService';
import DisplayService from './DisplayService';
import ScrollReveal from './ScrollReveal';
import ReadMore from './ReadMore';
import Sticky from './Sticky';
import Konami from './Konami';

let appModule = angular.module('jack.app', [uiRouter]);

appModule
  .config(routes)
  .controller('AppCtrl', AppController)
  .service('AppService', AppService)
  .service('DisplayService', DisplayService)
  .directive('scrollReveal', ScrollReveal)
  .directive('readMore', ReadMore)
  .directive('sticky', Sticky)
  .directive('konami', Konami);

export default appModule;
