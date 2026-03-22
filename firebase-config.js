// Firebase Configuration
// This connects the forum to your NEW specific Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBeZTJlk_ffnHBpnjh8Uuqjy_k4d3-AfO8",
  authDomain: "star-533d9.firebaseapp.com",
  projectId: "star-533d9",
  storageBucket: "star-533d9.firebasestorage.app",
  messagingSenderId: "961577405188",
  appId: "1:961577405188:web:2181d110673d14b3765e51",
  measurementId: "G-3VP1MEV5EM",
  // Expected default database URL. Note: Ensure you created a Realtime Database in Firebase and set it to Test Mode.
  databaseURL: "https://star-533d9-default-rtdb.firebaseio.com" 
};

// Initialize Firebase App
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Realtime Database instance

// Expose it to the global scope for forum.js and events.js to use
window.firebaseConfig = firebaseConfig;
window.db = db;
