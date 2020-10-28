// set the config for our firebase project
import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/storage";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfYDlQiRbn2J8C9jg8ivLNpnFDJsOxFaA",
    authDomain: "andysmealworm.firebaseapp.com",
    databaseURL: "https://andysmealworm.firebaseio.com",
    projectId: "andysmealworm",
    storageBucket: "andysmealworm.appspot.com",
    messagingSenderId: "520587128665",
    appId: "1:520587128665:web:41d0592f65b802909a6648",
    measurementId: "G-PZBWYHSYZG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;