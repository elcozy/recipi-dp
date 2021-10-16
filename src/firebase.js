import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyD4gOxOHE2LuNxf1IrBqceypMocZSQ8Ck8",
  authDomain: "recipe-app-dps.firebaseapp.com",
  projectId: "recipe-app-dps",
  storageBucket: "recipe-app-dps.appspot.com",
  messagingSenderId: "784310145808",
  appId: "1:784310145808:web:524ccc5c1ed7362791cb95",
  measurementId: "G-GG2NFYGH51",
};
firebase.initializeApp(config);

export default firebase;
