const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCfTQiCU5oOlNVH8Of2r3uCP0FcZHqDV6A",
  authDomain: "porfolio-73b35.firebaseapp.com",
  projectId: "porfolio-73b35",
  storageBucket: "porfolio-73b35.appspot.com",
  messagingSenderId: "545774210234",
  appId: "1:545774210234:web:f92ee1f328f51e5a168683",
  measurementId: "G-1XQ40KEL6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { app, db }