// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcYAFHFlIaE7jUuAkr69DQwU071Vfy_YU",
  authDomain: "college-quora-a1f8c.firebaseapp.com",
  projectId: "college-quora-a1f8c",
  storageBucket: "college-quora-a1f8c.appspot.com",
  messagingSenderId: "458677710271",
  appId: "1:458677710271:web:6b0f15172c182b0c90850a",
  measurementId: "G-S23B49TN2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export{auth, provider};