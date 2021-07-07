import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC1gzURDSC6hAOgjChNfuYAslJkUdyVaXs",
  authDomain: "eagle-outfitters.firebaseapp.com",
  projectId: "eagle-outfitters",
  storageBucket: "eagle-outfitters.appspot.com",
  messagingSenderId: "350916008969",
  appId: "1:350916008969:web:59d33eb35904c43df5ecd8",
  measurementId: "G-X8627W5W5Q"
};

export const createUserProfileDocument = 
  async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc("users/") = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;