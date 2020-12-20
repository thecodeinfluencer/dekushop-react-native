import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDz2N7Dkd1HVqNti5OWTyE6ISQ9rrv7N0I",
  authDomain: "dekushopertino.firebaseapp.com",
  databaseURL: "https://dekushopertino.firebaseio.com",
  projectId: "dekushopertino",
  storageBucket: "dekushopertino.appspot.com",
  messagingSenderId: "819449728873",
  appId: "1:819449728873:web:78f006f548766b4031f7f8",
  measurementId: "G-07KHMMRBNW"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
