// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5N6hQOhBCG0Ev4sDd9_eYwNkoiCkZKd4",
  authDomain: "e-com-d57b2.firebaseapp.com",
  databaseURL: "https://e-com-d57b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-com-d57b2",
  storageBucket: "e-com-d57b2.appspot.com",
  messagingSenderId: "217129702581",
  appId: "1:217129702581:web:715dd9ea5c1fb1afca5afc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)