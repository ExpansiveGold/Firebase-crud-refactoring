// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importar os recursos do firebase
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl-pHZP6DIcJJo-Jq3lKF9CjjnnaCxkIs",
  authDomain: "crud-simples-1f9d2.firebaseapp.com",
  projectId: "crud-simples-1f9d2",
  storageBucket: "crud-simples-1f9d2.appspot.com",
  messagingSenderId: "223210880055",
  appId: "1:223210880055:web:22aea3f8469816c22013b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);