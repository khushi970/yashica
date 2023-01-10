// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACVSUrNDPcpYlNepyn0O7s0QeDHpg7o84",
  authDomain: "website-6f214.firebaseapp.com",
  databaseURL: "https://website-6f214-default-rtdb.firebaseio.com",
  projectId: "website-6f214",
  storageBucket: "website-6f214.appspot.com",
  messagingSenderId: "426771596855",
  appId: "1:426771596855:web:126e066d720f9d6c9521b2",
  measurementId: "G-FLLWFSZ7E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function submit()

