// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogon-436c5.firebaseapp.com",
  projectId: "blogon-436c5",
  storageBucket: "blogon-436c5.appspot.com",
  messagingSenderId: "142265015861",
  appId: "1:142265015861:web:11ae67228ba4e790d85b7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);