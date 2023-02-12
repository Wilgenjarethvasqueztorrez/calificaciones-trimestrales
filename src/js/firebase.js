// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNfsimaWd4rQOPkx6eP_a5p-_f5gXW-g",
  authDomain: "calificaciones-b58e6.firebaseapp.com",
  projectId: "calificaciones-b58e6",
  storageBucket: "calificaciones-b58e6.appspot.com",
  messagingSenderId: "379083189981",
  appId: "1:379083189981:web:844022f33b5aef92973534"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Auth
export const auth = getAuth(app);