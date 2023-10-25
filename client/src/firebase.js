// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-32a43.firebaseapp.com",
  projectId: "real-estate-32a43",
  storageBucket: "real-estate-32a43.appspot.com",
  messagingSenderId: "942486888849",
  appId: "1:942486888849:web:84892fa5a327a66cbdfa30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);