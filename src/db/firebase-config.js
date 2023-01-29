// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCdXhBOD0XtgnHIrRTgYr5bKXbJGFrt9M",
  authDomain: "tienda-medieval-aoe2de.firebaseapp.com",
  projectId: "tienda-medieval-aoe2de",
  storageBucket: "tienda-medieval-aoe2de.appspot.com",
  messagingSenderId: "426165071588",
  appId: "1:426165071588:web:a52d31d1560e50bab146f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);