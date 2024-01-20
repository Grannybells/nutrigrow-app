// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhDnoEirhYHIagLmugZ-8oPDjqX7UaNeA",
    authDomain: "fir-nutrigrow.firebaseapp.com",
    databaseURL: "https://fir-nutrigrow-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-nutrigrow",
    storageBucket: "fir-nutrigrow.appspot.com",
    messagingSenderId: "1079402099982",
    appId: "1:1079402099982:web:74138ab3e2e6fa1bc1535f"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };

export { firebase };

// if (__DEV__) {
//     const auth = getAuth();
//     connectAuthEmulator(auth, "http://192.168.254.117:9099/");

//     const db = getDatabase();
//     connectDatabaseEmulator(db, "192.168.254.117", 9000);

//     const firestore = getFirestore();
//     connectFirestoreEmulator(firestore, "192.168.254.117", 8080);
// }