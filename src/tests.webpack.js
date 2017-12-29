// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';

import * as main from './index'; // eslint-disable-line

window.API_URL = 'api/url/test/';
window.STATIC_IMAGES_URL = 'images/url/test/';
var testsContext = require.context('.', true, /.spec$/);
testsContext.keys().forEach(testsContext);
