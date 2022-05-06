// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqqA820CZ3daoZMEd1IhdPRsRoq7Or1oE",
  authDomain: "todoapp-firebase-3a234.firebaseapp.com",
  projectId: "todoapp-firebase-3a234",
  storageBucket: "todoapp-firebase-3a234.appspot.com",
  messagingSenderId: "1026096797313",
  appId: "1:1026096797313:web:2a0902ec58939465d35f80",
  measurementId: "G-LC7GJ2S7ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);