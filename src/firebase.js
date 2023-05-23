//// 2nd 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCSt91svolDep_pHD4z0IgzVOLoFPU_ru8",
//   authDomain: "react-c2bf5.firebaseapp.com",
//   projectId: "react-c2bf5",
//   storageBucket: "react-c2bf5.appspot.com",
//   messagingSenderId: "1083413504586",
//   appId: "1:1083413504586:web:998f3506bfefd6f27b3cb3",
//   measurementId: "G-HTF08NF66G",
// };
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = app.firestore();
// export { db, auth };


//// 1st 
// // // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCSt91svolDep_pHD4z0IgzVOLoFPU_ru8",
//   authDomain: "react-c2bf5.firebaseapp.com",
//   projectId: "react-c2bf5",
//   storageBucket: "react-c2bf5.appspot.com",
//   messagingSenderId: "1083413504586",
//   appId: "1:1083413504586:web:998f3506bfefd6f27b3cb3",
//   measurementId: "G-HTF08NF66G",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };

// // const analytics = getAnalytics(app);

//// 3rd 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSt91svolDep_pHD4z0IgzVOLoFPU_ru8",
  authDomain: "react-c2bf5.firebaseapp.com",
  projectId: "react-c2bf5",
  storageBucket: "react-c2bf5.appspot.com",
  messagingSenderId: "1083413504586",
  appId: "1:1083413504586:web:06badc0a2b49b9167b3cb3",
  measurementId: "G-6Z3C3KJY7Q",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const auth = getAuth(app);
const db = app.firestore();
export { db, auth };


//// 1st 
// // // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCSt91svolDep_pHD4z0IgzVOLoFPU_ru8",
//   authDomain: "react-c2bf5.firebaseapp.com",
//   projectId: "react-c2bf5",
//   storageBucket: "react-c2bf5.appspot.com",
//   messagingSenderId: "1083413504586",
//   appId: "1:1083413504586:web:998f3506bfefd6f27b3cb3",
//   measurementId: "G-HTF08NF66G",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };

// // const analytics = getAnalytics(app);