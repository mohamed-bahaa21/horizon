import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY6qtpw2i46AkPKvTeDy5iAVyaxJhoLoI",
  authDomain: "horizon-28ad8.firebaseapp.com",
  projectId: "horizon-28ad8",
  storageBucket: "horizon-28ad8.appspot.com",
  messagingSenderId: "533324209164",
  appId: "1:533324209164:web:39aadbbdd96501a872a229",
  measurementId: "G-GLCDCLKPEN"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }