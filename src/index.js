import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import ngMoment from 'angular-moment';
import angularYoutube from 'angular-youtube-embed';
import 'angular-update-meta';

import routing from './config';
import run from './run';
import app from './modules/app';
import home from './modules/home';

import 'angular-material/angular-material.min.css';
import './style/scss/style.scss';

const MODULE_NAME = 'jack';

angular.module(MODULE_NAME, [
  uiRouter,
  ngMaterial,
  ngMessages,
  ngSanitize,
  ngMoment,
  angularYoutube,
  'updateMeta',
  app.name,
  home.name
])
.config(routing)
.run(run);

export default MODULE_NAME;
