import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5Z_fT6m3HILqWFUV8pnl-uQd2uYFDx1M",
  authDomain: "cwrn-clothing.firebaseapp.com",
  databaseURL: "https://cwrn-clothing.firebaseio.com",
  projectId: "cwrn-clothing",
  storageBucket: "cwrn-clothing.appspot.com",
  messagingSenderId: "570495451571",
  appId: "1:570495451571:web:6fb371c528270ef9268bc6",
  measurementId: "G-EXK06MSSP6",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log("Error! Creating User", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const auth = firebase.auth();
export const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
