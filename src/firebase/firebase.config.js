// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirATtR1GWXIA7u68tjZwR_vm0qq0kg_U",
  authDomain: "mern--book-inventory.firebaseapp.com",
  projectId: "mern--book-inventory",
  storageBucket: "mern--book-inventory.appspot.com",
  messagingSenderId: "464851115128",
  appId: "1:464851115128:web:af774c13703da8390ba18d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
