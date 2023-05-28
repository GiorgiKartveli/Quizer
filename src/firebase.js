// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASYZBSwSJ7dbPYMI6BeYAGlWOafil8Fm4",
  authDomain: "quizer-72782.firebaseapp.com",
  databaseURL: "https://quizer-72782-default-rtdb.firebaseio.com",
  projectId: "quizer-72782",
  storageBucket: "quizer-72782.appspot.com",
  messagingSenderId: "179503198693",
  appId: "1:179503198693:web:1d16df942e0ac7604abf0c",
  measurementId: "G-1B3CQTLBC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
signOut(auth);
export default app;
