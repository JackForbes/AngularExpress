'use strict';

/**
 * Services used throughout the site
 */
class AppService {

  constructor($state, $http, $q, $mdToast, $mdConstant, $window, $rootScope, $mdMedia) {
    this.$state                = $state;
    this.$http                 = $http;
    this.$q                    = $q;
    this.$mdToast              = $mdToast;
    this.$window               = $window;
    this.$rootScope            = $rootScope;
    this.$mdMedia              = $mdMedia;

    this.separatorKeys         = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, $mdConstant.KEY_CODE.SEMICOLON, $mdConstant.KEY_CODE.TAB];
    this.emailSeparatorKeys    = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, $mdConstant.KEY_CODE.SEMICOLON, $mdConstant.KEY_CODE.TAB, $mdConstant.KEY_CODE.SPACE];
  }

  /**
   * Transition to a specified state
   */
  transitionToState(state, stateParams, location = true) {
    const options = {
      location: location,
      inherit: true,
      relative: true,
      notify: false
    };

    this.$state.transitionTo(state, stateParams, options);
  }

  /**
  * Show a simple toast
  */
  showToast(text, className) {
    this.$mdToast.show(
      this.$mdToast.simple()
      .textContent(text)
      .position('bottom right')
      .toastClass(className)
      .hideDelay(5000)
    );
  }

  /**
  * Update the meta data
  */
  updateMeta(pageTitle, pageDescription = null, socialTitle = null, socialImage = null) {
    this.$rootScope.pageTitle = pageTitle;

    if (pageDescription)
      this.$rootScope.pageDescription = pageDescription.length > 150 ? `${pageDescription.substring(0, 147)}...` : pageDescription;

    if (socialTitle)
      this.$rootScope.socialTitle = socialTitle.length > 100 ? `${socialTitle.substring(0, 97)}...` : socialTitle;

    if (socialImage) {
      let fbImage = socialImage.replace(/width=([0-9]{1,4})/, 'width=1200');
      fbImage = fbImage.replace(/height=([0-9]{1,4})/, 'height=630');
      this.$rootScope.fbImage = fbImage;
      let twitterImage = socialImage.replace(/width=([0-9]{1,4})/, 'width=600');
      twitterImage = twitterImage.replace(/height=([0-9]{1,4})/, 'height=315');
      this.$rootScope.twitterImage = twitterImage;
    }
  }

  /**
  * Handle HTTP response successes
  */
  handleSuccess(response) {
    return (response.data);
  }

  /**
  * Handle HTTP response errors
  */
  handleError(response) {
    if (!angular.isObject( response.data ) || !response.data.message) {
      return (this.$q.reject(false));
    }

    return (this.$q.reject(response.data.message));
  }

  /**
  * Reusable HTTP GET
  */
  getRequest(urlPath, urlParam) {
    let url = urlParam ? `${API_URL}${urlPath}/${urlParam}` : `${API_URL}${urlPath}`;
    let request = this.$http({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      url: url
    });

    return (request.then((response) => this.handleSuccess(response), (response) => this.handleError(response)));
  }

  /**
  * Reusable HTTP POST
  */
  postRequest(urlPath, requestData = {}) {
    let data = angular.toJson(requestData);
    let request = this.$http({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      url: `${API_URL}${urlPath}`,
      data: data
    });

    return (request.then((response) => this.handleSuccess(response), (response) => this.handleError(response)));
  }

  /**
  * Reusable HTTP PUT
  */
  putRequest(urlPath, requestData, requestId) {
    let data = angular.toJson(requestData);
    let request = this.$http({
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      url: `${API_URL}${urlPath}/${requestId}`,
      data: data
    });

    return (request.then((response) => this.handleSuccess(response), (response) => this.handleError(response)));
  }

  /**
  * Reusable HTTP DELETE
  */
  deleteRequest(urlPath) {
    let request = this.$http({
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      url: `${API_URL}${urlPath}`
    });

    return (request.then((response) => this.handleSuccess(response), (response) => this.handleError(response)));
  }

  // *********************************
  // Utility Functions
  // *********************************

  /**
  * Return the array item matching the keyname/val
  */
  findWhere(array, keyName, val) {
    return array.find((item) => {
      return item[keyName] == val;
    });
  }

  /**
  * Return the array item matching the keyname/val
  */
  findIndexWhere(array, keyName, val) {
    return array.findIndex((item) => {
      return item[keyName] == val;
    });
  }

  /**
   * Check if array includes element
   */
  includes(substrings, string) {
    return substrings.some(v => string.indexOf(v) >= 0);
  }
}

/**
* Get a different key's value from an array of objects,
* matching a key value pair
*/
Array.prototype.where = function(name, value, newName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i][name] == value) {
      return this[i][newName];
    }
  }
  return value;
};

AppService.$inject = ['$state', '$http', '$q', '$mdToast', '$mdConstant', '$window', '$rootScope', '$mdMedia'];

export default AppService;
