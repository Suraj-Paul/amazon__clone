// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCjmNS32u27iy-QJqKw_8QMu3LY3BrEzTU",
    authDomain: "clone-68909.firebaseapp.com",
    databaseURL: "https://clone-68909.firebaseio.com",
    projectId: "clone-68909",
    storageBucket: "clone-68909.appspot.com",
    messagingSenderId: "157564644236",
    appId: "1:157564644236:web:b1fcbbf4a44340a924c4a9",
    measurementId: "G-N1CDVPEHRL"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
