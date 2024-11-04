import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyBucD1WNT8tySObZ1w0nzf6t_6LIIps3ls",
  authDomain: "webbbb1.firebaseapp.com",
  projectId: "webbbb1",
  storageBucket: "webbbb1.firebasestorage.app",
  messagingSenderId: "327022859388",
  appId: "1:327022859388:web:d63b7bdefd23dbfa02a5f9",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
auth.languageCode = "vi";
