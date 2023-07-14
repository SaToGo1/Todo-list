// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

let app = null;
let auth = null;
let provider = null;

function firebaseConnect () {
  app = initializeApp(firebaseConfig);
  auth = getAuth();
  provider = new GoogleAuthProvider();
}

export function getAuthProvider () {
  return {
    auth,
    provider
  }
}

try {
  firebaseConnect()
} catch (error) {
  console.log('error in the firebase connect \n', error)
}
