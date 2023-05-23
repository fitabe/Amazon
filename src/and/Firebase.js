// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCSt91svolDep_pHD4z0IgzVOLoFPU_ru8",
  authDomain: "react-c2bf5.firebaseapp.com",
  projectId: "react-c2bf5",
  storageBucket: "react-c2bf5.appspot.com",
  messagingSenderId: "1083413504586",
  appId: "1:1083413504586:web:998f3506bfefd6f27b3cb3",
  measurementId: "G-HTF08NF66G",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
