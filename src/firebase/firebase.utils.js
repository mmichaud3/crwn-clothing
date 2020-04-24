import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4y8m3aRib_wZvUImdRkCq4OUXCTzvZ50",
  authDomain: "crwn-db-e15a7.firebaseapp.com",
  databaseURL: "https://crwn-db-e15a7.firebaseio.com",
  projectId: "crwn-db-e15a7",
  storageBucket: "crwn-db-e15a7.appspot.com",
  messagingSenderId: "85216418464",
  appId: "1:85216418464:web:a267fd22cce71cba3447c5",
  measurementId: "G-S1G37ZX4TD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
