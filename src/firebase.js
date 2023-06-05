import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI-f8uI5f4PavOHxORbq1_3hqavYA-6d0",
  authDomain: "react-chat-deedb.firebaseapp.com",
  projectId: "react-chat-deedb",
  storageBucket: "react-chat-deedb.appspot.com",
  messagingSenderId: "512357984072",
  appId: "1:512357984072:web:3723f712fa948c351c357d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
