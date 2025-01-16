// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKKAsqLX4BS1FnLEfP2ELaQq5Sg4QjQi8",
  authDomain: "freightcs-website.firebaseapp.com",
  projectId: "freightcs-website",
  storageBucket: "freightcs-website.firebasestorage.app",
  messagingSenderId: "39841329366",
  appId: "1:39841329366:web:61b06ac7d74d572d50d977",
  measurementId: "G-TE87H96DXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);