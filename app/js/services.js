'use strict';

/* Services */
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
          name: 'favourites',
          href: '#Favourites',
          text: 'Favourites'
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
      ],
      cities: [
        {
          city : 'Enterprise Co-op',
          desc : 'This is the best city in the world!',
          lat : 43.47229,
          long : -80.54486
        },
        {
          city : 'BC Hydro',
          desc : 'This city is da bomb!',
          lat : 49.28203,
          long : -123.11257
        },
        {
          city : 'Burnaby',
          desc : 'Best campus ever!',
          lat : 49.24773,
          long : -123.00974
        },
        {
          city : 'Gumstix Inc',
          desc : 'This city is live!',
          lat : 37.50636,
          long : -122.21108
        }
      ],
      quotes: [
        {
          text: "[Man] sacrifices his health in order to make money. Then he sacrifices money to recuperate his health. And then he is so anxious about the future that he does not enjoy the present; the result being that he does not live in the present or the future; he lives as if he is never going to die, and then dies having never really lived.",
          author: 'Dalai Lama'
        },
        {
          text: "You can easily judge a man by how he treats those who can do nothing for him",
          author: 'James D. Miles'
        },
        {
          text: "The good thing about science is that it's true whether or not you believe in it.",
          author: 'Neil deGrasse Tyson'
        },
        {
          text: "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
          author: 'Antoine de Saint-Exupery'
        },
        {
          text: "Even if you're on the right track, you'll get run over if you just sit there.",
          author: 'Will Rogers'
        },
        {
          text: "The problem with the world is that the intelligent people are full of doubts while the stupid ones are full of confidence.",
          author: 'Charles Bukowski'
        },
        {
          text: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
          author: 'Albert Einstein'
        },
        {
          text: "If you want to go quickly, go alone. If you want to go far, go together.",
          author: 'Michael Chertok'
        },
        {
          text: "You develop an instant global consciousness, a people orientation, an intense dissatisfaction with the state of the world, and a compulsion to do something about it. From out there on the moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, ‘Look at that, you son of a bitch.",
          author: 'Edgar Mitchell'
        },
        {
          text: "I am the master of my fate: I am the captain of my soul",
          author: 'William Ernest Henley'
        },
        {
          text: "It would be almost unbelievable, if history did not record the tragic fact, that men have gone to war and cut each other's throats because they could not agree as to what was to become of them after their throats were cut.",
          author: 'Walter P. Stacy'
        },
        {
          text: "Today is the first day of the rest of your life",
          author: 'Charles Dederich'
        },
        {
          text: "Intelligence is the ability to adapt to change",
          author: 'Stephen Hawking'
        },
        {
          text: "Shoot for the moon and if you miss you will land among the stars.",
          author: 'Les Brown'
        },
        {
          text: "Some cause happiness wherever they go, others whenever they go.",
          author: 'Oscar Wilde'
        },
        {
          text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over again in my life. And that is why I succeed.",
          author: 'Michael Jordan'
        },
        {
          text: "A man who wants to lead the orchestra must turn his back on the crowd.",
          author: 'Max Lucado'
        },
        {
          text: "There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
          author: 'Aristotle'
        }
      ],
      gridLetters: 'eyomsrnkvsll404nnmhxvkomvqpageijtnotnfigzdeyoejcmfoundbnjfxlppom'
    };
  }])
  .service('skrollrService', ['$q', '$rootScope',
    function($q, $rootScope){

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
