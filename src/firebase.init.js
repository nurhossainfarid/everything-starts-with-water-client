// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOvbTovPIQQQF0iY45csHLOIzgBtKfc2w",
  authDomain: "water-the-earth-gift.firebaseapp.com",
  projectId: "water-the-earth-gift",
  storageBucket: "water-the-earth-gift.appspot.com",
  messagingSenderId: "80592615664",
  appId: "1:80592615664:web:db810ae72ae1307cc66a35",
  measurementId: "G-JLMKMS06TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 
const auth = getAuth(app)

export default auth;