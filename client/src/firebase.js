// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY
  ,
  authDomain: "mern-blog-eec57.firebaseapp.com",
  projectId: "mern-blog-eec57",
  storageBucket: "mern-blog-eec57.firebasestorage.app",
  messagingSenderId: "92101766309",
  appId: "1:92101766309:web:94a5f09979d618a605714c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;