import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHAgzIAxpYET1Gt_506pJVwUCIRrrjqWw",
  authDomain: "buzzer-10d86.firebaseapp.com",
  databaseURL: "https://buzzer-10d86.firebaseio.com",
  projectId: "buzzer-10d86",
  storageBucket: "buzzer-10d86.appspot.com",
  messagingSenderId: "999035354623",
  appId: "1:999035354623:web:3ad105478bfc4dcd33bbca",
  measurementId: "G-LCGFJXPQ2Y"
};
firebase.initializeApp(firebaseConfig);


export default db = firebase.database();
