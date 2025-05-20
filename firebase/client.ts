// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCI-45PYx1BNsXHDika8QWP9ADQiXIOfNQ",
    authDomain: "prepwise-f787a.firebaseapp.com",
    projectId: "prepwise-f787a",
    storageBucket: "prepwise-f787a.firebasestorage.app",
    messagingSenderId: "568143543236",
    appId: "1:568143543236:web:c9611d96025bd0e0274291",
    measurementId: "G-G7W488107L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);