import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCfr5TTPV81ewl38YTXBXBs8t62EOtx9Iw",
  authDomain: "crwn-db-5f06a.firebaseapp.com",
  databaseURL: "https://crwn-db-5f06a.firebaseio.com",
  projectId: "crwn-db-5f06a",
  storageBucket: "crwn-db-5f06a.appspot.com",
  messagingSenderId: "537468084113",
  appId: "1:537468084113:web:bd12212c6380b670e24430",
  measurementId: "G-0MJ3TCSEL5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
