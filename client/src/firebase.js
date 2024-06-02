// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-3fa11.firebaseapp.com",
  projectId: "estate-3fa11",
  storageBucket: "estate-3fa11.appspot.com",
  messagingSenderId: "838216042592",
  appId: "1:838216042592:web:34effed11275379aba1b05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
