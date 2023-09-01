import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuhCdhxYJi0vFNfKZcHwihpKMeyOPuzWw",
  authDomain: "chatgpt-messenger-d1deb.firebaseapp.com",
  projectId: "chatgpt-messenger-d1deb",
  storageBucket: "chatgpt-messenger-d1deb.appspot.com",
  messagingSenderId: "30284242396",
  appId: "1:30284242396:web:a678d000a1d79594a14319"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };