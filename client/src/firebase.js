// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-df3f5.firebaseapp.com",    projectId: "blog-app-df3f5",
  storageBucket: "blog-app-df3f5.firebasestorage.app",
  messagingSenderId: "444917486962",
  appId: "1:444917486962:web:664049f72f2089da9cf9eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);