// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCc326k6A8t5uKcvNpkuicCYYkCqCAbQ9Q",
    authDomain: "vue-firebase-acefc.firebaseapp.com",
    projectId: "vue-firebase-acefc",
    storageBucket: "vue-firebase-acefc.firebasestorage.app",
    messagingSenderId: "862696319442",
    appId: "1:862696319442:web:fe3d39b8e469b8a2fec00b",
    measurementId: "G-83WMRXZRMT"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };