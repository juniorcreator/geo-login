import firebase from "firebase"
import firestore from "firebase/firestore"
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlnGn8hbXnFSqvEN8O7Pu-5L6w-9acePw",
  authDomain: "geo-login-362eb.firebaseapp.com",
  databaseURL: "https://geo-login-362eb.firebaseio.com",
  projectId: "geo-login-362eb",
  storageBucket: "geo-login-362eb.appspot.com",
  messagingSenderId: "109556228639"
};
const firebaseApp = firebase.initializeApp(config);

/// if has some errors
firebaseApp.firestore().settings({timestampsInSnapshots: true });

export default firebaseApp.firestore();