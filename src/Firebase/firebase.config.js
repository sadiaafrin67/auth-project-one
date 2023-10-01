// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0lt7iCq2pFpv8Ej4QjeYfj44Mgt6N0vg",
  authDomain: "auth-project-one-e6a2a.firebaseapp.com",
  projectId: "auth-project-one-e6a2a",
  storageBucket: "auth-project-one-e6a2a.appspot.com",
  messagingSenderId: "555222729802",
  appId: "1:555222729802:web:a3ca70f8ce236a931392b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;