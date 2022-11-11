import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAgpqeFEd7QZGHlqi0py2SBM1WnpJiHMAM",
  authDomain: "reactnative-authenticati-66494.firebaseapp.com",
  projectId: "reactnative-authenticati-66494",
  storageBucket: "reactnative-authenticati-66494.appspot.com",
  messagingSenderId: "342879238081",
  appId: "1:342879238081:web:5fb18c9a325fa31ae36140"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);

