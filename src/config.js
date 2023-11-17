// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDJnkx9WhagNPprbSjlUmNwU6VrTdNy8RI",
    authDomain: "nutrigrow-c4e0c.firebaseapp.com",
    projectId: "nutrigrow-c4e0c",
    storageBucket: "nutrigrow-c4e0c.appspot.com",
    messagingSenderId: "742984801688",
    appId: "1:742984801688:web:6f6f7d6b39c5dfaba35fed"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { firebase };

export { db };