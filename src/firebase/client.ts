import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKKAsqLX4BS1FnLEfP2ELaQq5Sg4QjQi8",
  authDomain: "freightcs-website.firebaseapp.com",
  projectId: "freightcs-website",
  storageBucket: "freightcs-website.firebasestorage.app",
  messagingSenderId: "39841329366",
  appId: "1:39841329366:web:61b06ac7d74d572d50d977",
};

export const app = initializeApp(firebaseConfig);