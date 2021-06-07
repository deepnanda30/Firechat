import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const client_key=process.env.REACT_APP_apiKey;
console.log(client_key)
export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  })
  .auth();

export const firestore = firebase.firestore();
