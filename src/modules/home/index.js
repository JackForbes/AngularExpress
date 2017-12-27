'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './config';
import HomeController from './HomeController';
import HomeService from './HomeService';
import Footer from './Footer';

let homeModule = angular.module('jack.home', [uiRouter]);

homeModule
  .config(routes)
  .controller('HomeCtrl', HomeController)
  .service('HomeService', HomeService)
  .directive('siteFooter', Footer);

export default homeModule;
