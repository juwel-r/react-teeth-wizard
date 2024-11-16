// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5px7w-SLnh-yOca1JSWX-BPA5ulzv8B0",
  authDomain: "teeth-wizerd.firebaseapp.com",
  projectId: "teeth-wizerd",
  storageBucket: "teeth-wizerd.firebasestorage.app",
  messagingSenderId: "797570011696",
  appId: "1:797570011696:web:df2a7d6c9b6a67bf7013f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth