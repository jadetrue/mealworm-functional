import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNojwKGKE-hVUg-eB77JV3O8e-RV8vqUE",
  authDomain: "mealworm-code-along.firebaseapp.com",
  databaseURL: "https://mealworm-code-along.firebaseio.com",
  projectId: "mealworm-code-along",
  storageBucket: "mealworm-code-along.appspot.com",
  messagingSenderId: "545993756578",
  appId: "1:545993756578:web:703aa94e188ad44cae2cfb",
  measurementId: "G-62KJY4C7R7",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
