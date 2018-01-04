'use strict';

/**
 * Display Service
 */
function DisplayService () {
  let _this = this;

  _this._data = {
    navItems: [
      {
        href: 'experience',
        text: 'Work Experience'
      },
      {
        href: 'projects',
        text: 'Projects'
      },
      {
        href: 'resume',
        text: 'Resume'
      },
      {
        href: 'quotes',
        text: 'Quotes'
      },
      {
        href: 'interests',
        text: 'Interests'
      }
    ],
    skills: [
      {
        label: 'Web Design',
        value: 100,
      },
      {
        label: 'UX',
        value: 100,
      },
      {
        label: 'Clean Code',
        value: 95,
      },
      {
        label: 'Material Design',
        value: 90,
      },
      {
        label: 'AngularJS',
        value: 90,
      },
      {
        label: 'JavaScript',
        value: 85,
      },
      {
        label: 'jQuery',
        value: 85,
      },
      {
        label: 'HTML5',
        value: 80,
      },
      {
        label: 'CSS3',
        value: 80,
      },
      {
        label: 'Symfony2',
        value: 70,
      },
      {
        label: 'PHP',
        value: 60,
      },
      {
        label: 'C#',
        value: 60,
      }
    ],
    jobs: [
      {
        company: 'Salesforce',
        logo: `${STATIC_IMAGES_URL}logos/salesforce.png`,
        hero: `${STATIC_IMAGES_URL}heros/salesforce.png`,
        location: 'San Francisco, CA',
        date: 'February, 2017 - Present',
        position: 'Frontend Developer',
        description: 'Salesforce acquired Sequence in February, 2016, so just like that I am now doing consultancy work here! I\'ve been leading Salesforce development teams to build systems for clients, each of which have so far used different tech stacks. I\'ve built a React/Redux and Node/Express portal for the University of Texas, and a Node/Kafka data ingestion system for RBC.',
        links: ['https://www.salesforce.com']
      },
      {
        company: 'Sequence',
        logo: `${STATIC_IMAGES_URL}logos/sequence.png`,
        hero: `${STATIC_IMAGES_URL}heros/sequence.jpg`,
        location: 'San Francisco, CA',
        date: 'June, 2016 - January, 2017',
        position: 'Frontend Developer',
        description: 'I started my full time career focusing on front-end engineering at Sequence. This position allowed me to take on a variety of responsibilities, while offering a lot of flexibility so that I\'ve been able to pursue my interests.',
        links: ['https://www.opusonewinery.com/']
      },
      {
        company: 'Nest',
        logo: `${STATIC_IMAGES_URL}logos/nest.png`,
        hero: `${STATIC_IMAGES_URL}heros/nest.jpg`,
        location: 'Palo Alto, CA',
        date: 'August - December, 2015',
        position: 'Frontend Engineer',
        description: 'My last co-op term for university was at Google, specifically Nest. Working for a company I am very passionate about was an incredible experience. I worked on the Developers portal (developers.nest.com) that helps developers work with the Nest API and submit products to the Works With Nest Store. I worked on the UI, using Ember.js (ES6), including Handlebars and Sass.',
        links: ['https://developers.nest.com']
      },
      {
        company: 'Zazzle',
        logo: `${STATIC_IMAGES_URL}logos/zazzle.png`,
        hero: `${STATIC_IMAGES_URL}heros/zazzle.jpg`,
        location: 'Redwood City, CA',
        date: 'January - May, 2015',
        position: 'UI Software Engineer',
        description: 'At Zazzle I was in charge of researching, designing, and building two internal applications. I built a database configuration tool that enabled engineers to view all database keys used on Zazzle.com, search for specific ones, and add/edit/delete specific key values. I also built a translation tool that allowed the translation team to view untranslated strings based on a set of filters, export them to Excel, import translated strings, and view translated strings based on a set of filters. Both applications used Angular with Material Design within the .NET framework.',
        links: ['https://www.zazzle.com']
      },
      {
        company: 'Electronic Arts',
        logo: `${STATIC_IMAGES_URL}logos/ea.png`,
        hero: `${STATIC_IMAGES_URL}heros/ea.jpg`,
        location: 'Burnaby, BC',
        date: 'May - September, 2014',
        position: 'Software Engineer',
        description: 'My term at EA Sports was amazing. I was a web developer on the Pulse team (internal digital agency), working on online Fifa Ultimate Team content. A majority of my development at EA was with AngularJS, and my immediate love of the language inspired me to make this website using Angular!',
        links: ['https://www.easports.com/fifa/ultimate-team/fut/database']
      },
      {
        company: 'BC Hydro',
        logo: `${STATIC_IMAGES_URL}logos/bchydro.png`,
        hero: `${STATIC_IMAGES_URL}heros/bchydro.jpg`,
        location: 'Vancouver, BC',
        date: 'September - December, 2013',
        position: 'Project Management',
        description: 'During my term at BC Hydro I worked at the offices in downtown Vancouver and Langley, BC, assisting in project management within Grid Operations. Jumping into the world of project management taught me a lot in a short amount of time, from dealing with the politics of management, to tight deadlines. Having experience in both software development and project management has given me a valuable outlook on running a functional and cohesive technology company.',
        links: ['https://www.bchydro.com']
      },
      {
        company: 'Gumstix Inc',
        logo: `${STATIC_IMAGES_URL}logos/gumstix.png`,
        hero: `${STATIC_IMAGES_URL}heros/gumstix.jpg`,
        location: 'Redwood City, CA',
        date: 'January - May, 2013',
        position: 'Growth Hacker',
        description: 'At Gumstix I assisted in building a web application to drive growth. Diving into the tech capitol of the world was a phenomenal experience, both inside and outside of work. During this term I truly fell in love with programming and knew that I wanted to pursue web development. I helped create an application to organize company products, create social network posts/press releases, and view site analytics. Aside from learning about the hardware side of things, I was introduced to many new languages, IDEs, and operating systems.',
        links: ['https://www.gumstix.com/']
      },
      {
        company: 'UW Enterprise Co-op',
        logo: `${STATIC_IMAGES_URL}logos/conrad.png`,
        hero: `${STATIC_IMAGES_URL}heros/conrad.jpg`,
        location: 'Waterloo, ON',
        date: 'May - September, 2012',
        position: 'Founder',
        description: 'During my first year at university, a classmate and I conceptualized a music recommendation system that we called "NextBestSong". We were accepted into the Enterprise Co-op program at the University of Waterloo for our first co-op term. Although we were the youngest of the 15 groups accepted, we taught ourselves the necessary languages to develop the application. With a former Microsoft employee as a mentor, we worked on the music recommendation app day and night.'
      }
    ],
    projects: [
      {
        title: 'PadPiper',
        iconSrc: `${STATIC_IMAGES_URL}projects/padpiper.png`,
        href: 'https://www.padpiper.com',
        description: 'We are empowering students to find their passion through real-world experience. The biggest painpoint with many students is finding and subletting housing.'
      },
      {
        title: 'DuDE',
        iconSrc: `${STATIC_IMAGES_URL}projects/DuDE.png`,
        href: 'https://github.com/zlwaterfield/DuDE',
        description: 'Drag undo Drop Execute. This is an app I built for the Ontario Engineering Competition. The goal is to teach kids the basics of coding.'
      },
      // {
      //   title: 'Hangman',
      //   iconSrc: `${STATIC_IMAGES_URL}projects/Hangman.png`,
      //   href: 'https://JackForbes.github.io/Coursera',
      //   description: 'This is a coding challenge I did for Coursera. The page allows users to play Hangman using endpoints that hit Coursera\'s servers.'
      // },
      // {
      //   title: 'Nest Developers',
      //   iconSrc: `${STATIC_IMAGES_URL}projects/Nest.png`,
      //   href: 'https://developer.nest.com',
      //   description: 'This is the main site that I am currently working on at Nest. I am mainly helping with the UI and Ember portions, especially making sure the site is very responsive.'
      // },
      {
        title: 'YouTube Rotten Tomatoes',
        iconSrc: `${STATIC_IMAGES_URL}projects/ytrt.png`,
        href: 'https://chrome.google.com/webstore/detail/youtube-rotten-tomatoes/pnhnpfanenbhdkkmigmcmelkgbjkoaoo',
        description: 'This is a Chrome extension I built that allows users to view Rotten Tomatoes scores directly on YouTube trailers!.'
      },
      {
        title: 'Material Design Todo Lists',
        iconSrc: `${STATIC_IMAGES_URL}projects/Todo.png`,
        href: 'https://jackforbes.github.io/ABL/',
        description: 'This is a todo lists app that I built for a coding challenge. It uses angular-material, a library that combines Material Design with AngularJS.'
      },
      // {
      //   title: 'Audyo - Software Course Project',
      //   iconSrc: `${STATIC_IMAGES_URL}projects/Audyo.png`,
      //   href: 'https://audyo.me',
      //   description: "This is a project I did for my Software Engineering course project in Fall, 2014. It is an idiosyncratic music app that is built with Mean.js."
      // },
      {
        title: 'Reddit Client',
        iconSrc: `${STATIC_IMAGES_URL}projects/Reddit.png`,
        href: 'https://JackForbes.github.io/Pebble',
        description: 'This is a coding challenge I did for Pebble, to create a reddit client using AngularJS. The client allows users to open the Top and New posts for any desired subreddit.'
      },
      // {
      //   title: 'EA FIFA Players Database',
      //   iconSrc: `${STATIC_IMAGES_URL}projects/FUT.png`,
      //   href: 'https://www.easports.com/fifa/ultimate-team/fut/database',
      //   description: 'This is the app I was fortunate enough to be a part of while working at EA. I mainly assisted with the functionality, developing with AngularJS. The app lets user search and filter for any and all players in FIFA. Users can then click on a player bio to view statistics and characteristics regarding that player.'
      // },
      {
        title: 'Hack The North Project',
        iconSrc: `${STATIC_IMAGES_URL}projects/Greeze.png`,
        href: 'https://chrome.google.com/webstore/detail/myo-internet-browsing/jppipfjlphmfmcdckheaflljahlddone',
        description: 'I built a Chrome extension that allows hands free navigation of popular sites. Combined with the Myo script, users can navigate the supported sites with basic hand gestures. So you can easily eat while browsing!'
      },
      {
        title: 'Information Systems Design Course Project',
        iconSrc: `${STATIC_IMAGES_URL}projects/UW_Athletic_Scheduler.png`,
        href: 'https://msci-showcase.uwaterloo.ca/~j2forbes/',
        description: 'I built this in my third year at the University of Waterloo. This is an athletic facility scheduling app that assists students and faculty in determining when to use the athletic facilities on campus. Users can view free times for different sports, along with usage statistics for workout rooms.'
      },
      {
        title: 'Database Systems Course Project',
        iconSrc: `${STATIC_IMAGES_URL}projects/NHL_Logo.png`,
        href: 'https://JackForbes.github.io/DBProject.html',
        description: 'This is a class project for one of my database courses in my second year at the University of Waterloo. This is a "fantasy NHL" app that lets users manipulate a database containing 2012 Stanley Cup NHL players. Users can view stats, as well as insert, modify, and delete players.'
      }
    ],
    interests: [
      {
        index: 0,
        name: 'soccer',
        imgSrc: `${STATIC_IMAGES_URL}interests/Soccer.jpg`,
        description: `I have lived and breathed soccer since I was six years old, and still enjoy playing at University. Soccer is my favourite sport, by far, as it is very athletic and can be played during all times of the year (otherwise skiing would take the lead). Soccer
        has been a very big part of my life, as I have been on many different teams and quite a few camps. I played on the Bainbridge FC team from the age of 12 to the age of 17, where we played in many tournaments across Washington State. During this
        time I also attended soccer camps during the summers, one of which I went to multiple times, called Vogelsinger Soccer Camp.
        Fortunately the Select team did not interfere with the high school team, so I was able to play Junior Varsity and Varsity soccer in high school, while still playing Select. In 2011, we had the best Varsity soccer season Bainbridge High
        School had ever had, as we became Metro Champions, made it to Quarter-finals, Semi-finals, and State Finals, as well as Academic State Champions for the highest overall player GPAs. We placed second in State and were overwhelmed with excitement.
        Once at university, I made the University of Waterloo's Varsity Soccer team in the fall of 2012 and had a great time travelling around Ontario for games.`,
        gallery: [
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/street.jpg`,
            desc: 'Street Soccer USA Park in San Francisco'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/Soccer-Blue-Team.jpg`,
            desc: 'High School Select Soccer'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/Soccer-Trophy.jpg`,
            desc: 'High School Select Soccer Trophy'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/Soccer-Vogelsinger.jpg`,
            desc: 'Vogelsinger Soccer Camp'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/Soccer-Varsity.jpg`,
            desc: 'High School Varsity Soccer'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/Soccer-Select.jpg`,
            desc: 'High School Select Soccer'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/soccer/Soccer-Waterloo.jpg`,
            desc: 'University of Waterloo Varsity Soccer'
          }
        ],
      },
      {
        index: 1,
        name: 'coding',
        imgSrc: `${STATIC_IMAGES_URL}interests/AngularJS.png`,
        description: `Pictured above is the development team I was fortunate enough to be a part of while working at Electronic Arts. It was during this term that I fell in love with Angular and decided to build this site using the magic of Angular! I have fallen in love with
        coding, in general, since coming to university. To me it sometimes feels like virtual lego that involves puzzle-solving. All I know is that I am happy when I code, so I continue to do so.
        <br><br> As for the type of coding I prefer, I must say I definitely enjoy front end development the most. I enjoy the design aspect combined with the functionality. Having said that, I have done a fair bit of backend development as well, and
        recognize the importance of having experience in both areas.
        <br><br> My go-to language would have to be JavaScript since that is the only one really available for frontend development. Throw Angular on there as a framework, maybe add jQuery if you are alright with parting from vanilla JavaScript, and then
        we're talking. My go-to IDE/text editor at the moment is Sublime Text 3 since there are packages to add mad customizability, but Atom could take the lead in due time. Overall though, I always enjoy playing with new languages, frameworks, libraries,
        text-editors, etc.`,
        gallery: [
          {
            src: `${STATIC_IMAGES_URL}interests/coding/lima.jpeg`,
            desc: 'Coding in Lima, Peru'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/coding/ea.jpg`,
            desc: 'Pulse team at EA Sports'
          }
        ]
      },
      {
        index: 2,
        name: 'skiing',
        imgSrc: `${STATIC_IMAGES_URL}interests/Skiing.jpg`,
        description: `I have had the privilege of skiing since I was two years old and have enjoyed everything from racing to back-country to freestyle. While living in Waterloo, Ontario, from the age of three until the age of nine, I skiied every weekend of every winter at
        Osler Bluff Ski Club in Collingwood, Ontario. My sister and I took lessons and raced at other ski clubs throughout Ontario. After moving to the United States, we skiied for recreation, enjoying the mountains that Washington and British Columbia
        have to offer. In the years I have lived in the Northwest, I have had the good fortune to ski at many locations including: Whistler, Big White, Banff, Sun Peaks, Mount Baker, Steven's Pass, Crystal Mountain, Snoqualmie Pass, Alpental, Silver Star,
        and more!`,
        gallery: [
          {
            src: `${STATIC_IMAGES_URL}interests/skiing/Family-Skiing.jpg`,
            desc: 'Family Whistler Skiing'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/skiing/Whistler-Skiing.jpg`,
            desc: 'Flute Summit at Whistler'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/skiing/Heavenly-Skiing.jpg`,
            desc: 'Skiing at Heavenly, California'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/skiing/Waterloo-Skiing.jpg`,
            desc: 'Skiing at Waterloo, Ontario'
          }
        ],
      },
      {
        index: 3,
        name: 'tennis',
        imgSrc: `${STATIC_IMAGES_URL}interests/Tennis.jpg`,
        description: `I have enjoyed playing tennis since I was six years old in Waterloo, Ontario. I was very fortunate to live in a neighbourhood that had tennis courts, so during each summer from the age of six to the age of ten, I walked to courts for lessons. Upon moving
        to Bainbridge Island, Washington, I was very fortunate, again, to have a tennis/athletic club near my house, called Bainbridge Athletic Club (BAC). I became a tennis member at BAC in 2006 and joined the Junior Tennis Academy from 2007 to 2009.
        I also joined the United States Tennis Association (USTA) Junior team in 2007 and played competitively in Junior tournaments for the next two years. Unfortunately the high school tennis season coincided with the soccer season so I played high
        school soccer instead of tennis. I still enjoy getting out on the court whenever I meet a fellow tennis player.`,
        gallery: [
          {
            src: `${STATIC_IMAGES_URL}interests/tennis/BAC.jpg`,
            desc: 'Where I grew up playing tennis'
          },
          {
            src: `${STATIC_IMAGES_URL}interests/tennis/BAC-Logo.jpg`,
            desc: 'Bainbridge Athletic Club'
          }
        ],
      },
      {
        index: 4,
        name: 'renewable',
        imgSrc: `${STATIC_IMAGES_URL}interests/Renewable_Energy.jpg`,
        description: `I have had a great interest in renewable energy throughout high school and into university, and have worked on many projects regarding different areas of renewable energy. Here are four of the presentations I have made and one of the essays regarding
        renewable energy, varying from helping poverty-stricken areas by supplying them with solar panels to making zero gas emission vehicles. Three of the presentations were made in high school and another was made for MSCI 100 at the University of
        Waterloo.`,
        gallery: [
          {
            src: `${STATIC_IMAGES_URL}interests/renewable/bchydro.jpg`,
            desc: 'BC Hydro Dam'
          }
        ]
      }
    ],
    cities: [
      {
        company: 'Enterprise Co-op',
        desc: 'Founder NextBestSolutions',
        lat: 43.47229,
        long: -80.54486,
        iconSrc: `${STATIC_IMAGES_URL}logos/conrad.png`
      },
      {
        company: 'BC Hydro',
        desc: 'Project Management',
        lat: 49.28203,
        long: -123.11257,
        iconSrc: `${STATIC_IMAGES_URL}logos/bchydro.png`
      },
      {
        company: 'Electronic Arts',
        desc: 'Software Engineer',
        lat: 49.24773,
        long: -123.00974,
        iconSrc: `${STATIC_IMAGES_URL}logos/ea.png`
      },
      {
        company: 'Gumstix Inc',
        desc: 'Growth Hacker',
        lat: 37.50636,
        long: -122.21108,
        iconSrc: `${STATIC_IMAGES_URL}logos/gumstix.png`
      },
      {
        company: 'Zazzle',
        desc: 'UI Software Engineer',
        lat: 37.510643,
        long: -122.2015,
        iconSrc: `${STATIC_IMAGES_URL}logos/zazzle.png`
      },
      {
        company: 'Nest',
        desc: 'Frontend Engineer',
        lat: 37.404155,
        long: -122.148124,
        iconSrc: `${STATIC_IMAGES_URL}logos/nest.png`
      }
    ],
    quotes: [
      {
        text: 'When you complain, you make yourself a victim. Leave the situation, change the situation, or accept it. All else is madness.',
        author: 'Eckhart Tolle'
      },
      {
        text: 'If you trust in yourself, and believe in your dreams, and follow your star... you\'ll still get beaten by people who spent their time working hard, and learning things, and weren\'t so lazy.',
        author: 'Terry Pratchett'
      },
      {
        text: '[Man] sacrifices his health in order to make money. Then he sacrifices money to recuperate his health. And then he is so anxious about the future that he does not enjoy the present; the result being that he does not live in the present or the future; he lives as if he is never going to die, and then dies having never really lived.',
        author: 'Dalai Lama'
      },
      {
        text: 'You can easily judge a man by how he treats those who can do nothing for him',
        author: 'James D. Miles'
      },
      {
        text: 'The good thing about science is that it\'s true whether or not you believe in it.',
        author: 'Neil deGrasse Tyson'
      },
      {
        text: 'If you want to build a ship, don\'t drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.',
        author: 'Antoine de Saint-Exupery'
      },
      {
        text: 'Even if you\'re on the right track, you\'ll get run over if you just sit there.',
        author: 'Will Rogers'
      },
      {
        text: 'The problem with the world is that the intelligent people are full of doubts while the stupid ones are full of confidence.',
        author: 'Charles Bukowski'
      },
      {
        text: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
        author: 'Albert Einstein'
      },
      {
        text: 'If you want to go quickly, go alone. If you want to go far, go together.',
        author: 'Michael Chertok'
      },
      {
        text: 'You develop an instant global consciousness, a people orientation, an intense dissatisfaction with the state of the world, and a compulsion to do something about it. From out there on the moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, ‘Look at that, you son of a bitch.',
        author: 'Edgar Mitchell'
      },
      {
        text: 'I am the master of my fate: I am the captain of my soul',
        author: 'William Ernest Henley'
      },
      {
        text: 'It would be almost unbelievable, if history did not record the tragic fact, that men have gone to war and cut each other\'s throats because they could not agree as to what was to become of them after their throats were cut.',
        author: 'Walter P. Stacy'
      },
      {
        text: 'Today is the first day of the rest of your life',
        author: 'Charles Dederich'
      },
      {
        text: 'Intelligence is the ability to adapt to change',
        author: 'Stephen Hawking'
      },
      {
        text: 'Shoot for the moon and if you miss you will land among the stars.',
        author: 'Les Brown'
      },
      {
        text: 'Some cause happiness wherever they go, others whenever they go.',
        author: 'Oscar Wilde'
      },
      {
        text: 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times, I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over again in my life. And that is why I succeed.',
        author: 'Michael Jordan'
      },
      {
        text: 'A man who wants to lead the orchestra must turn his back on the crowd.',
        author: 'Max Lucado'
      },
      {
        text: 'There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.',
        author: 'Aristotle'
      },
      {
        text: 'It is important to view knowledge as sort of a semantic tree -- make sure you understand the fundamental principles, ie the trunk and big branches, before you get into the leaves/details or there is nothing for them to hang on to.',
        author: 'Elon Musk'
      }
    ],
    gridLetters: 'eyomsrnkvsll404nnmhxvkomvqpageijtnotnfigzdeyoejcmfoundbnjfxlppom',
    gridLettersHighlightedIndices: [12,13,14,26,27,28,29,33,34,35,49,50,51,52,53],
    images: {
      crosbyPath: `${STATIC_IMAGES_URL}crosby.png`
    }
  };

  return _this._data;
}

export default DisplayService;
