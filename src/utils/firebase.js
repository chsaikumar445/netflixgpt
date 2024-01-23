// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.apiKey}`,
  authDomain: "netflixgpt-32269.firebaseapp.com",
  projectId: "netflixgpt-32269",
  storageBucket: "netflixgpt-32269.appspot.com",
  messagingSenderId: "873121733364",
  appId: "1:873121733364:web:9714dc44c8d0cff6a61ca1",
  measurementId: "G-W2B9PJG5L3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
