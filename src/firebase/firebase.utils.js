import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoEhNOh_vruskyyIOnysHHyw49okZQ1r0",
  authDomain: "e-commerce-4c531.firebaseapp.com",
  databaseURL: "https://e-commerce-4c531.firebaseio.com",
  projectId: "e-commerce-4c531",
  storageBucket: "e-commerce-4c531.appspot.com",
  messagingSenderId: "1053200888477",
  appId: "1:1053200888477:web:756423c40b4c45ea871a74",
  measurementId: "G-83PSGDCXNV",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // for google authorization
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
