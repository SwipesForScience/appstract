export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: true,

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

  widgetType: 'PubMedAbstract',
  widgetProperties: {
  
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


  // Homepage configuration

  // your app's title and tagline
  home: {
    title: 'appstract',
    tagline: 'Help scientists annotate abstracts',
    // background image on Homepage
    backgroundUrl: 'https://cdn.rawgit.com/SwipesForScience/appstract/master/images/SwipesForScience.svg',
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
        /*{
          text: 'we want to train a machine to recognize the whales and dolphins. \n For that we need your help.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gnome-computer.svg/600px-Gnome-computer.svg.png',
        },*/
      ],
      examples: [
        /*{
          // fill these with examples with respect to the widget you're using
          text: 'swipe right when you hear/see a whale \n you can tap the image to hear it.',
          pointer: 'OO_HYVM1__YDH_2017_10_06T06_48_00',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },*/
      ],
    },
  },
};
