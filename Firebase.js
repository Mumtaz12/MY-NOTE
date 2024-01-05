// import firebase from "firebase/app";
// require('firebase/firestore')
// require('firebase/auth')
//
// var firebaseConfig = {
//     apiKey: "AIzaSyCnU-0ZeB-tYmOqP1sRQXu89Glft-fPUbI",
//     authDomain: "keep-8e910.firebaseapp.com",
//     projectId: "keep-8e910",
//     storageBucket: "keep-8e910.appspot.com",
//     messagingSenderId: "1040381652881",
//     appId: "1:1040381652881:web:3fb545a09bfc43c6e7f430",
//     measurementId: "G-9RRPB1LPYT"
// };
// firebase.initializeApp(firebaseConfig);
//
// export const db = firebase.firestore();
//
// export const auth = firebase.auth();



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaTdsjoG5igxZ0fz05zHb1zbOtWf2ZD1Q",
    authDomain: "datakeeper-9f281.firebaseapp.com",
    projectId: "datakeeper-9f281",
    storageBucket: "datakeeper-9f281.appspot.com",
    messagingSenderId: "727196302562",
    appId: "1:727196302562:web:f760d49032b614854f72bb",
    measurementId: "G-RJLRPLNJ8E"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };