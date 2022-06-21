
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUHmmcLbgmoBUNvnTknrX2Qzh8eI9uHL0",
    authDomain: "linkedinclone-68269.firebaseapp.com",
    projectId: "linkedinclone-68269",
    storageBucket: "linkedinclone-68269.appspot.com",
    messagingSenderId: "254990402766",
    appId: "1:254990402766:web:4fc40495e2949106167c9f"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth();
 const firestore = firebase.firestore();
 export const database = {
     Profile_Data : firestore.collection('Profile_Data'),
     Message_data: firestore.collection('Message_data')

 }

