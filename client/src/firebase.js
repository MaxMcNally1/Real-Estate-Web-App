// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "toptenbooks-a1f9b.firebaseapp.com",
  projectId: "toptenbooks-a1f9b",
  storageBucket: "toptenbooks-a1f9b.appspot.com",
  messagingSenderId: "69090156918",
  appId: "1:69090156918:web:d1ebb639a09107226ada57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);