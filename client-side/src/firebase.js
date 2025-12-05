// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-b2fd2.firebaseapp.com",
  projectId: "estate-b2fd2",
  storageBucket: "estate-b2fd2.firebasestorage.app",
  messagingSenderId: "483400252422",
  appId: "1:483400252422:web:c38e5ac60c63c36a825787"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);