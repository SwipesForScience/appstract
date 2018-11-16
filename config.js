export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: false,

  // each time the app is run, it will check this manifest and update the firebase database
  // if new entries are there, they will be added, and entries that aren't in the manifest
  // but are in the firebase database will be *removed*
  manifestUrl: 'https://cdn.rawgit.com/SwipesForScience/appstract/master/dataManifest.json',
  // 'https://cdn.rawgit.com/SwipesForScience/appstract/master/bsHbnManifest.json',
  // 'https://cdn.rawgit.com/SwipesForScience/appstract/master/textWidgetManifest.json',

  // set the type of widget and its properties here.
  // widgetType: 'ImageSplat',
  // widgetProperties: {
  //   baseUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/base_{1}.png',
  //   maskUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/mask_{1}.png',
  //   contourUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/contour_{1}.png',
  //   delimiter: '__',
  // },

  widgetType: 'PubMedNLP',
  widgetProperties: {
    template: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={0}&tool=appstract&email=keshavan@berkeley.edu&retmode=xml',
    delimiter: null,
  },


  // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

  // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyB7JV3DjOFc_d9YRDFHLGAkxffRTwnPF8k',
    authDomain: 'appstract2dev.firebaseapp.com',
    databaseURL: 'https://appstract2dev.firebaseio.com',
    projectId: 'appstract2dev',
    storageBucket: '',
    messagingSenderId: '938555105928',
  },
  
  iconAttribute: {
    name: 'openmoji',
    url: 'http://openmoji.org',
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 101,
      max: 350,
      character: 'fish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true',
    },
    2: {
      level: 2,
      min: 351,
      max: 750,
      character: 'frog',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true',
    },
    3: {
      level: 3,
      min: 751,
      max: 1000,
      character: 'duck',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true',
    },
    4: {
      level: 4,
      min: 1001,
      max: 1500,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
    },
    5: {
      level: 5,
      min: 1501,
      max: 2000,
      character: 'cat',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true',
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: 'lion',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true',
    },
  },


  // Homepage configuration

  app: {
    navbarVariant: 'danger',
  },

  // your app's title and tagline
  home: {
    title: 'appstract',
    tagline: 'Help scientists annotate abstracts',
    // background image on Homepage
    backgroundUrl: 'https://cdn.rawgit.com/akeshavan/appstract/master/src/assets/landingIcon.svg',
  },

  // Play configuration
  play: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/appstract/master/images/undraw_blank_canvas.svg',

  },

  // Chats configuration
  chats: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/appstract/master/images/undraw_no_data.svg',
  },

  // Profile configuration
  profile: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/appstract/master/images/undraw_chatting.svg',
  },

  // your app's tutorial page
  // describe your problem and the way you want people to annotate
  tutorial: {
    // there is only 1 available custom animiation right now, and its 'Bubbles'
    // customBackgroundAnimation: 'Bubbles',
    // steps have 2 parts, the intro and examples. In the intro you provide
    // text and images. In the examples, you provide text, data pointers, and tutorial steps
    // that the widget will display
    steps: {
      intro: [
        /*  {
          text: '',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gnome-computer.svg/600px-Gnome-computer.svg.png',
        }, */
      ],
      examples: [
        /* {
          // fill these with examples with respect to the widget you're using
          text: 'swipe right when you hear/see a whale \n you can tap the image to hear it.',
          pointer: 'OO_HYVM1__YDH_2017_10_06T06_48_00',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        }, */
      ],
    },
  },
};
