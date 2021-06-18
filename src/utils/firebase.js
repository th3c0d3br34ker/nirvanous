import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'nirvanous-18062021.firebaseapp.com',
  projectId: 'nirvanous-18062021',
  storageBucket: 'nirvanous-18062021.appspot.com',
  messagingSenderId: '141079493679',
  appId: '1:141079493679:web:f777923a260d0abb1a5ada',
  measurementId: 'G-XJTXQJJF6Y',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();

export default firebaseAuth;
