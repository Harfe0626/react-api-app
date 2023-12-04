// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJfkiAP2IkEQtQ2l6yxTxo1D45xPH-vrg",
  authDomain: "react-api-app-197f9.firebaseapp.com",
  projectId: "react-api-app-197f9",
  storageBucket: "react-api-app-197f9.appspot.com",
  messagingSenderId: "342265747572",
  appId: "1:342265747572:web:aa8615ac74c6a002fdd921",
  measurementId: "G-TYXDVMWXTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;