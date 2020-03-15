import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpidCnjLah8rPl0OEDQyHdnL8NvjKPI4A",
  authDomain: "crwn-db-4e292.firebaseapp.com",
  databaseURL: "https://crwn-db-4e292.firebaseio.com",
  projectId: "crwn-db-4e292",
  storageBucket: "crwn-db-4e292.appspot.com",
  messagingSenderId: "423240371327",
  appId: "1:423240371327:web:85c8a2a0856f5c436a034a",
  measurementId: "G-65J51FMGN9"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // create user data

  const snapShot = await userRef.get(); // get user data

  if (!snapShot.exists) { // if not exist, create user in database
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
