import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYXYrYVkx3tFq0rm8ZDXzAIDvIgm6U1G8",
    authDomain: "clone-43f68.firebaseapp.com",
    projectId: "clone-43f68",
    storageBucket: "clone-43f68.appspot.com",
    messagingSenderId: "104388559136",
    appId: "1:104388559136:web:4691a2ef94030e2e085745",
    measurementId: "G-C0FQFW1N3T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };