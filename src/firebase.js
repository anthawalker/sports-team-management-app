import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAn_FnWmusHjw9xRqR-ka5VZRYVuckJT1c",
  authDomain: "sports-team-management.firebaseapp.com",
  databaseURL: "https://sports-team-management.firebaseio.com",
  projectId: "sports-team-management",
  storageBucket: "sports-team-management.appspot.com",
  messagingSenderId: "214620096641"
};

firebase.initializeApp(config);

const db = firebase.database();
const dbMatches = db.ref('matches');

export {
  db,
  dbMatches
}