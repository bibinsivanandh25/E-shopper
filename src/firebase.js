import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZoLq57LYrcBLwaK0Gh3xdxqYr2pkP3E",
  authDomain: "e-commerce-b929b.firebaseapp.com",
  projectId: "e-commerce-b929b",
  storageBucket: "e-commerce-b929b.appspot.com",
  messagingSenderId: "406556726889",
  appId: "1:406556726889:web:669938c2848415b94ff4f8",
};
let firebaseApp = initializeApp(firebaseConfig);
let db = getFirestore(firebaseApp);
let auth = getAuth(firebaseApp);
export { db, auth };
