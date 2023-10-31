// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp9K4wHs7be6KbZdqXxWao8YvGJox66pY",
  authDomain: "car-auth-bc9b2.firebaseapp.com",
  projectId: "car-auth-bc9b2",
  storageBucket: "car-auth-bc9b2.appspot.com",
  messagingSenderId: "786273086987",
  appId: "1:786273086987:web:ce74ad35dd074ddf62610e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app