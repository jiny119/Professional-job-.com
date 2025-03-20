// js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAqKbPSwF_INJfGD7ADuo5-YkzO9dpJAL4",
  authDomain: "mytaskapp-e0e42.firebaseapp.com",
  databaseURL: "https://mytaskapp-e0e42-default-rtdb.firebaseio.com",
  projectId: "mytaskapp-e0e42",
  storageBucket: "mytaskapp-e0e42.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID", // Agar aapke paas hai to daal dein
  appId: "YOUR_APP_ID" // Agar aapke paas hai to daal dein
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
