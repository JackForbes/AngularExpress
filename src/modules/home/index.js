'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './config';
import HomeController from './HomeController';
import HomeService from './HomeService';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './Interests';
import Quotes from './Quotes';
import Resume from './Resume';
import Footer from './Footer';
import PDF from './PDF';

let homeModule = angular.module('jack.home', [uiRouter]);

homeModule
  .config(routes)
  .controller('HomeCtrl', HomeController)
  .service('HomeService', HomeService)
  .directive('experience', Experience)
  .directive('projects', Projects)
  .directive('interests', Interests)
  .directive('quotes', Quotes)
  .directive('resume', Resume)
  .directive('siteFooter', Footer)
  .directive('pdf', PDF);

export default homeModule;
