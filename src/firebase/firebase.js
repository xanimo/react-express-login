import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBeiKFMOkz2JLsqqPoZP-nnCFoEuQrW0Ho",
    authDomain: "dakdoablue.firebaseapp.com",
    databaseURL: "https://dakdoablue.firebaseio.com",
    projectId: "dakdoablue",
    storageBucket: "dakdoablue.appspot.com",
    messagingSenderId: "472600738269"
};

// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};