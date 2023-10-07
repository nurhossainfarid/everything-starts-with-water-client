import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZfqBSEJbLjvxqAdd7iC45vdStsz1Ud0s",
  authDomain: "water-the-earth-gift-1066d.firebaseapp.com",
  projectId: "water-the-earth-gift-1066d",
  storageBucket: "water-the-earth-gift-1066d.appspot.com",
  messagingSenderId: "253519683742",
  appId: "1:253519683742:web:eb6def17c7e2b20d9d9b8f",
  measurementId: "G-96RE24D5Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth 
const auth = getAuth(app)

export default auth;