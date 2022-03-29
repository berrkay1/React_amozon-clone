import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPRl1YNyfVfLEWVRAilpqBbIralS4Ty48",
    authDomain: "fir-5a914.firebaseapp.com",
    projectId: "fir-5a914",
    storageBucket: "fir-5a914.appspot.com",
    messagingSenderId: "407174432590",
    appId: "1:407174432590:web:28085aef0b1a666dd8401f",
    measurementId: "G-8VDSETSXVM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

