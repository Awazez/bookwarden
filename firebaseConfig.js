// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXgw5pMsi4B5_aR2yLmzKm1y3-55l-s2Y",
  authDomain: "bookwarden-98709.firebaseapp.com",
  projectId: "bookwarden-98709",
  storageBucket: "bookwarden-98709.appspot.com",
  messagingSenderId: "219057942968",
  appId: "1:219057942968:web:7412b0a59c418f8f75df4d",
  measurementId: "G-N0DZWNE7P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);


export default db;



