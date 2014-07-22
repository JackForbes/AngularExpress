'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  service('SiteModel', [function() {
    return {
      navItems: [
        {
          name: 'experience',
          href: '#Experience',
          text: 'Work Experience'
        },
        {
          name: 'webDev',
          href: '#Web-Dev',
          text: 'Web Development'
        },
        {
          name: 'resume',
          href: '#Resume',
          text: 'Resume'
        },
        {
          name: 'angular',
          href: '#Angular',
          text: 'Angular'
        },
        {
          name: 'interests',
          href: '#Interests',
          text: 'Interests'
        }
      ],
      interests: [
        {
          name: 'soccer',
          imgSrc: 'Soccer.jpg',
        },
        {
          name: 'coding',
          imgSrc: 'AngularJS.png',
        },
        {
          name: 'skiing',
          imgSrc: 'Skiing.jpg',
        },
        {
          name: 'tennis',
          imgSrc: 'Tennis.jpg',
        },
        {
          name: 'renewable',
          imgSrc: 'Renewable_Energy.jpg',
        }
      ]
    };
  }])
  .service('skrollrService', ['$q', '$rootScope',
    function($q, $rootScope){
      // // Init Skrollr
      // var s = skrollr.init({
      //   forceHeight: false
      // });


      var defer = $q.defer();

      function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(function() {
          var s = skrollr.init({
            forceHeight: false
          });
          defer.resolve(s);
        });
      }

      // Create a script tag with skrollr as the source
      // and call our onScriptLoad callback when it
      // has been loaded

      var scriptTag = $(document)[0].createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = 'external/skrollr.min.js';

      scriptTag.onreadystatechange = function () {
        if (this.readyState === 'complete') onScriptLoad();
      };

      scriptTag.onload = onScriptLoad;

      var s = $(document)[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);

      return {
        skrollr: function() { return defer.promise; }
      };
  }]);
