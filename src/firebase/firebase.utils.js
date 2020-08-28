import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgpOUp1d1pVnof33pQyZIeMnu7zJPPQPg",
    authDomain: "crown-db-c1841.firebaseapp.com",
    databaseURL: "https://crown-db-c1841.firebaseio.com",
    projectId: "crown-db-c1841",
    storageBucket: "crown-db-c1841.appspot.com",
    messagingSenderId: "246539155139",
    appId: "1:246539155139:web:f21743a4b4b9949fea9476",
    measurementId: "G-YTEY5Y5RD8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


 