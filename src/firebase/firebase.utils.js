import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyB8fbTNh3BXVCAL9hB3bJQxqxOEHNzGf6E",
  authDomain: "book-manager-9682d.firebaseapp.com",
  databaseURL: "https://book-manager-9682d.firebaseio.com",
  projectId: "book-manager-9682d",
  storageBucket: "",
  messagingSenderId: "136708509107",
  appId: "1:136708509107:web:7f8bc5bc1b8b17bc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;