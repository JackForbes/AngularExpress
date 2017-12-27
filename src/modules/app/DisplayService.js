'use strict';

/**
 * Display Service
 */
function DisplayService () {
  let _this = this;

  _this._data = {
    defaultCities: [
      { title: 'Houston', subtitle: 'Texas, USA', city: 'Houston', state: 'TX', imgSrc: STATIC_IMAGES_URL + 'cities/houston.png' },
      { title: 'Vancouver', subtitle: 'British Columbia, Canada', city: 'Vancouver', state: 'BC', imgSrc: STATIC_IMAGES_URL + 'cities/vancouver.png' },
      { title: 'San Francisco', subtitle: 'California, USA', city: 'San Francisco', state: 'CA', imgSrc: STATIC_IMAGES_URL + 'cities/san-francisco.png' },
      { title: 'Palo Alto', subtitle: 'California, USA', city: 'Palo Alto', state: 'CA', imgSrc: STATIC_IMAGES_URL + 'cities/palo-alto.png' },
      { title: 'Toronto', subtitle: 'Ontario, Canada', city: 'Toronto', state: 'ON', imgSrc: STATIC_IMAGES_URL + 'cities/toronto.png' }
    ],
    supportedSchools: [
      { name: 'University of Waterloo', img: STATIC_IMAGES_URL + 'schools/uwaterloo.png', domain: 'uwaterloo.ca' },
      { name: 'Stanford University', img: STATIC_IMAGES_URL + 'schools/stanford.png', domain: 'stanford.edu' },
      { name: 'University of Cincinnati', img: STATIC_IMAGES_URL + 'schools/cincinnati.png', domain: 'mail.uc.edu' },
      { name: 'University of Pennsylvania', img: STATIC_IMAGES_URL + 'schools/penn.png', domain: 'upenn.edu' },
      { name: 'University of Toronto', img: STATIC_IMAGES_URL + 'schools/utoronto.png', domain: 'mail.utoronto.ca' },
      { name: 'Wilfrid Laurier University', img: STATIC_IMAGES_URL + 'schools/laurier.png', domain: 'wlu.ca' },
      { name: 'University of British Columbia', img: STATIC_IMAGES_URL + 'schools/ubc.png', domain: 'ubc.ca' },
      { name: 'Northeastern University', img: STATIC_IMAGES_URL + 'schools/northeastern.png', domain: 'husky.neu.edu' },
      { name: 'Brown University', img: STATIC_IMAGES_URL + 'schools/brown.png', domain: 'brown.edu' },
    ],
    mobileNavItems: {
      guest: [
        { title: 'Browse Rentals', sref: 'listings' },
        { title: 'Connect', sref: 'peers', authenticate: true },
        { title: 'List a Space', sref: 'listing-new', authenticate: true }
      ],
      student: [
        { title: 'Browse Rentals', sref: 'listings' },
        { title: 'Connect', sref: 'peers' }
      ],
      landlord: [
        { title: 'Browse Rentals', sref: 'listings' },
        { title: 'List a Space', sref: 'listing-new' }
      ],
      admin: [
        { title: 'Browse Rentals', sref: 'listings' },
        { title: 'Connect', sref: 'peers' },
        { title: 'List a Space', sref: 'listing-new' }
      ]
    },
    orderByItems: [
      { id: 'price', title: 'Price (low-high)', sortOrder: 'asc' },
      { id: 'price', title: 'Price (high-low)', sortOrder: 'desc' },
      { id: 'rating', title: 'Rating', sortOrder: 'desc' },
      { id: 'bed', title: 'Beds (low-high)', sortOrder: 'asc' },
      { id: 'bed', title: 'Beds (high-low)', sortOrder: 'desc' }
    ],
    travelModeInfo: {
      walk: { title: 'Walking', travelMode: 'WALKING', icon: 'maps_directions_walk' },
      bike: { title: 'Biking', travelMode: 'BICYCLING', icon: 'maps_directions_bike' },
      transit: { title: 'Public Transit', travelMode: 'TRANSIT', icon: 'maps_directions_transit' },
      car: { title: 'Driving', travelMode: 'DRIVING', icon: 'maps_directions_car' }
    },
    amenities: [
      { id: 'furniture', title: 'Furnished', icon: 'couch' },
      { id: 'wifi', title: 'Wi-Fi', icon: 'wifi' },
      { id: 'washer', title: 'In-unit laundry', icon: 'washing_machine' },
      { id: 'kitchen', title: 'Kitchen', icon: 'kitchen' },
      { id: 'utilities', title: 'Utilities included', icon: 'lightbulb' },
      { id: 'tv', title: 'TV', icon: 'hardware_tv' },
      { id: 'cookware', title: 'Cookware', icon: 'maps_restaurant_menu' },
      { id: 'tableware', title: 'Tableware', icon: 'restaurant' },
      { id: 'cable', title: 'Cable', icon: 'cable' },
      { id: 'heating', title: 'Heating', icon: 'social_whatshot' },
      { id: 'air_conditioning', title: 'Air conditioning', icon: 'ac' },
      { id: 'free_parking', title: 'Free parking', icon: 'maps_local_parking' },
      { id: 'elevator', title: 'Elevator', icon: 'elevator' },
      { id: 'pool', title: 'Pool', icon: 'pool' },
      { id: 'gym', title: 'Gym', icon: 'gym' },
      { id: 'pets', title: 'Pets allowed', icon: 'pets' },
      { id: 'smoking', title: 'Smoking allowed', icon: 'smoking' },
      { id: 'cleaning_fee', title: 'Extra cleaning fee', icon: 'broom' },
      { id: 'meals', title: 'Daily meals provided', icon: 'food' }
    ],
    rules: [
      { id: 'shoes', title: 'Please do not wear shoes in the space' },
      { id: 'candles', title: 'Do not light candles or use incense.' },
      { id: 'smoking', title: 'No smoking inside.' },
      { id: 'parties', title: 'Parties must end before ', start: '' },
      { id: 'quiet', title: 'Please respect quiet hours from ', start: '', end: '' }
    ],
    propertyTypes: {
      apartment: 'Apartment building',
      townhouse: 'Townhouse',
      house: 'House',
      guest: 'Guest house',
      floor: 'Flat / Entire floor',
      loft: 'Loft',
      other: 'Other'
    },
    bedTypes: {
      single: 'Single',
      singlexl: 'Single XL',
      double: 'Double',
      queen: 'Queen',
      king: 'King',
      bunk: 'Bunk Bed',
      air: 'Air Mattress',
      water: 'Water Bed'
    },
    durations: [1,2,3,4,5,6,7,8,9,10,11,12],
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    months: [
      { display: 'September', val: 8 },
      { display: 'October', val: 9 },
      { display: 'November', val: 10 },
      { display: 'December', val: 11 },
      { display: 'January', val: 0 },
      { display: 'February', val: 1 },
      { display: 'March', val: 2 },
      { display: 'April', val: 3 },
      { display: 'May', val: 4 },
      { display: 'June', val: 5 },
      { display: 'July', val: 6 },
      { display: 'August', val: 7 }
    ],
    docTypes: {
      transcript: 'Transcript',
      offer: 'Offer Letter',
      lease: 'Lease'
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/in/',
      twitter: 'https://www.twitter.com/',
      github: 'https://www.github.com/',
      dribbble: 'https://www.dribbble.com/'
    },
    images: {
      logoPath: `${STATIC_IMAGES_URL}logos/padpiper-primary.png`,
      logoSmPath: `${STATIC_IMAGES_URL}logos/padpiper-primary-sm.png`,
      crosbyPath: `${STATIC_IMAGES_URL}general/crosby.png`,
      headshotDefaultStudent: `${STATIC_IMAGES_URL}animals/headshot-default-student.jpg`,
      headshotDefaultLandlord: `${STATIC_IMAGES_URL}animals/headshot-default-landlord.jpg`,
      headshotBeaverSm: `${STATIC_IMAGES_URL}animals/beaver-sm.png`,
      headshotBeaverMd: `${STATIC_IMAGES_URL}animals/beaver-md.png`,
      headshotBearSm: `${STATIC_IMAGES_URL}animals/bear-sm.png`,
      headshotMooseMd: `${STATIC_IMAGES_URL}animals/moose-md.png`,
      headshotMooseLg: `${STATIC_IMAGES_URL}animals/moose-lg.png`,
      headshotPenguinSm: `${STATIC_IMAGES_URL}animals/penguin-sm.png`,
      headshotPenguinMd: `${STATIC_IMAGES_URL}animals/penguin-md.png`,
      headshotPenguinLg: `${STATIC_IMAGES_URL}animals/penguin-lg.png`,
      headshotBeaver: `${STATIC_IMAGES_URL}animals/beaver.png`,
      headshotMoose: `${STATIC_IMAGES_URL}animals/moose.png`,
      envelope: `${STATIC_IMAGES_URL}general/envelope.png`,
      penguin: `${STATIC_IMAGES_URL}animals/penguin.png`,
      iconShield: `${STATIC_IMAGES_URL}general/shield.png`,
      iconBank: `${STATIC_IMAGES_URL}general/bank.png`,
      iconMessages: `${STATIC_IMAGES_URL}general/messages.png`,
      bubbleMoney: `${STATIC_IMAGES_URL}general/money.png`,
      bubbleNetwork: `${STATIC_IMAGES_URL}general/network.png`,
      bubbleSwag: `${STATIC_IMAGES_URL}general/swag.png`,
      mooseHome: `${STATIC_IMAGES_URL}general/moose-home.png`,
      graphicCloud1: `${STATIC_IMAGES_URL}graphics/cloud1.png`,
      graphicCloud2: `${STATIC_IMAGES_URL}graphics/cloud2.png`,
      graphicCloud3: `${STATIC_IMAGES_URL}graphics/cloud3.png`,
      graphicCloud4: `${STATIC_IMAGES_URL}graphics/cloud4.png`,
      graphicCloud5: `${STATIC_IMAGES_URL}graphics/cloud5.png`,
      camera: `${STATIC_IMAGES_URL}graphics/camera.png`,
      pencilPaper: `${STATIC_IMAGES_URL}graphics/pencil-paper.png`,
      dollar: `${STATIC_IMAGES_URL}graphics/dollar.png`,
      commute: `${STATIC_IMAGES_URL}general/commute.png`,
      properties: `${STATIC_IMAGES_URL}properties/`,
      bed: `${STATIC_IMAGES_URL}properties/beds.png`,
      bedroom: `${STATIC_IMAGES_URL}properties/bedrooms.png`,
      bathroom: `${STATIC_IMAGES_URL}properties/bathrooms.png`
    },
    reviewCategories: [
      { name: 'Accuracy', id: 'accuracy', rating: 0, hoverRating: 0, description: 'How closely did it resemble the PadPiper listing?' },
      { name: 'Cleanliness', id: 'cleanliness', rating: 0, hoverRating: 0, description: 'How clean was it?' },
      { name: 'Location', id: 'location', rating: 0, hoverRating: 0, description: 'How convenient was the location?' },
      { name: 'Value', id: 'value', rating: 0, hoverRating: 0, description: 'Was it worth the price?' },
      { name: 'Support', id: 'support', rating: 0, hoverRating: 0, description: 'How supportive was the landlord?' },
      { name: 'Quality', id: 'quality', rating: 0, hoverRating: 0, description: 'What was the condition of the housing?' }
    ],
    declineReasons: [
      'Listing has been filled',
      'I\'m no longer looking for a tenant',
      'This isn\'t the student I\'m looking for'
    ],
    cancelReasons: [
      'I\'ve booked a different listing',
      'I can\'t afford to book this listing',
      'I\'m no longer searching for housing in this area'
    ],
    faq: [
      { question: 'When do students begin looking for housing for their internship?', answer: 'Students often look for housing within 8 weeks of beginning work. This Fall most students will be looking for housing in July.' },
      { question: 'What students can use PadPiper?', answer: 'We now support almost 10,000 secondary schools around the world! These include schools with a dedicated co-op program and those without. Check to see if your school is supported at the bottom of www.padpiper.com.' },
      { question: 'What transactions does PadPiper include?', answer: 'PadPiper allows students to pay the rental deposit (deposit) for a space in order to reserve it until move-in. This is the only transaction that PadPiper currently supports, since we do not support monthly rent payments, security deposit reimbursements, etc.' },
      { question: 'What fees do students pay for rental deposit transactions?', answer: 'PadPiper adds a 0.8% fee to the deposit that students pay. If using a credit card, this fee is 1.9%.' },
      { question: 'What fees do landlords pay for rental deposit transactions?', answer: 'PadPiper removes a 2.4% fee from the deposit that landlords receive.' },
      { question: 'How long do landlords have to respond to a booking request?', answer: 'Landlords have 10 days to accept or decline a booking request before it expires. If more time is needed, the student can send another booking request after expiration.' },
      { question: 'How long do students have to respond to a booking payment request?', answer: 'Students have 10 days to pay the rental deposit after the landlord accepts the booking request. After 10 days the booking request will expire.' },
      { question: 'At what point is a listing “rented”?', answer: 'A listing is considered “rented” once the number of tenants staying at the space reaches the maximum number of tenants that can lease the space. The tenants that are staying at a space can be added by accepting student booking requests or by adding tenants for the respective duration. This can be done by clicking "Add tenant" on the listing within a landlord profile.' },
      { question: 'When does a student sign a lease?', answer: 'Landlords can request a lease from a student at any point they would like. This could be before accepting a student as a tenant on PadPiper, or after. PadPiper does not handle leases and does not host the tenancies.' },
      { question: 'What does it mean to be Verified?', answer: 'A landlord is verified once it’s been confirmed that a student has lived there.' },
      { question: 'As a landlord, how can I get my listing Verified?', answer: 'You can get your listing verified either by accepting a student booking request through PadPiper or by adding a tenant who has previously lived there. Add previous tenants by clicking the "Add Tenant" button located below the title of your listings on your profile.' },
      { question: 'For how long can I lease my space?', answer: 'PadPiper supports 1 to 12 month rentals.' },
    ],
    gridLetters: 'eyomsrnkvsll404nnmhxvkomvqpageijtnotnfigzdeyoejcmfoundbnjfplxeh?',
    gridLettersHighlightedIndices: [12,13,14,26,27,28,29,33,34,35,49,50,51,52,53],
    alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    mapStyles: [
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [ { color: '#B2EAF2' } ]
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [ { color: '#757575' } ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [ { color: '#DCEDC8' } ]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [ { color: '#FAFAFA' } ]
      },
      {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
          { hue: '#FFFFFF' },
          { saturation: -100 },
          { lightness: 100 },
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { hue: '#FFFFFF' },
          { saturation: -100 },
          { lightness: 100 },
          { visibility: 'on' }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { hue: '#BDBDBD' },
          { saturation: -100 },
          { lightness: 26 },
          { visibility: 'on' }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { color: '#ECEFF1' },
          { visibility: 'simplified' }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          { color: '#ECEFF1' },
          { visibility: 'simplified' }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [ { color: '#FFECB3' } ]
      },
      {
        featureType: 'poi.school',
        elementType: 'all',
        stylers: [
          { hue: '#DAF4FD' },
          { saturation: -60 },
          { lightness: 23 },
          { visibility: 'on' }
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ]
  };

  return _this._data;
}

export default DisplayService;
