// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlKUoaolyc0Nfb7G7hS1E9mdqQsCkUNN8",
  authDomain: "fyp-readsmart.firebaseapp.com",
  projectId: "fyp-readsmart",
  storageBucket: "fyp-readsmart.appspot.com",
  messagingSenderId: "940230724006",
  appId: "1:940230724006:web:f92fb30a6e73d602886767",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
