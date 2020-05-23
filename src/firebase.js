import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  projectId: "checkin-1b695",
  apiKey: "AIzaSyBLUjZJ6T2UlW-isK1TmUzeXRxe-7bUtiU",
  authDomain: "checkin-1b695.firebaseapp.com",
  databaseURL: "https://checkin-1b695.firebaseio.com",
  storageBucket: "checkin-1b695.appspot.com",
  messagingSenderId:"68780595546",
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
