// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apikey,
    authDomain: "chat-e3d99.firebaseapp.com",
    projectId: "chat-e3d99",
    storageBucket: "chat-e3d99.appspot.com",
    messagingSenderId: "686700208226",
    appId: "1:686700208226:web:05632c56d4baeb0813313b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);