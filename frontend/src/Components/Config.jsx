// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7NPGh4my5sQ2XhFwPEzPm7WSOrztN-lY",
  authDomain: "medical-record-91737.firebaseapp.com",
  projectId: "medical-record-91737",
  storageBucket: "medical-record-91737.appspot.com",
  messagingSenderId: "639570043239",
  appId: "1:639570043239:web:c34c9366a3d59e1083cfc2",
  measurementId: "G-0VF6MFZN04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imagedb = getStorage(app);