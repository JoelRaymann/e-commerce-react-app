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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  // Check user
  if (!snapshot.exists) {
    // create the user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("[ERROR]: ", error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumlator, collection) => {
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // for google authorization
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
