import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "chat-3fb6d.firebaseapp.com",
    projectId: "chat-3fb6d",
    storageBucket: "chat-3fb6d.appspot.com",
    messagingSenderId: "237478092967",
    appId: "1:237478092967:web:93596bc03afbdc15fbbb82"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()