const firebaseConfig = {
  apiKey: "AIzaSyCHNSWZJc3UbcEMJj2ChPpxBii7sWPku2c",
  authDomain: "reward-stickers.firebaseapp.com",
  projectId: "reward-stickers",
  storageBucket: "reward-stickers.appspot.com",
  messagingSenderId: "632242533909",
  appId: "1:632242533909:web:2d3975181e18c01eb0801c",
  measurementId: "G-LN8T9VJSBD"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
