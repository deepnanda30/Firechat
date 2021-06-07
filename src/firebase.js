import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCLhlY_fCaH7F6HV8ACNVzDI2_fN1iRzgM",
    authDomain: "firechat-8c318.firebaseapp.com",
    projectId: "firechat-8c318",
    storageBucket: "firechat-8c318.appspot.com",
    messagingSenderId: "466299700375",
    appId: "1:466299700375:web:46bcaf69d64eb6719a95d2",
  })
  .auth();

export const firestore=firebase.firestore()