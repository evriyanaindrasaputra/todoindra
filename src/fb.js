import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDweR5X68lIBzshA873oUEoavLteNSozBU",
  authDomain: "todoindra.firebaseapp.com",
  databaseURL: "https://todoindra.firebaseio.com",
  projectId: "todoindra",
  storageBucket: "todoindra.appspot.com",
  messagingSenderId: "604366389291",
  appId: "1:604366389291:web:f567931f08d41ee2232a6e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
