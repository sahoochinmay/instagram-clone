import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE9ZaNojBCW4xB7-1MQFGzKJdl54vHDwY",
  authDomain: "instagram-clone-a7897.firebaseapp.com",
  databaseURL: "https://instagram-clone-a7897.firebaseio.com",
  projectId: "instagram-clone-a7897",
  storageBucket: "instagram-clone-a7897.appspot.com",
  messagingSenderId: "762952245013",
  appId: "1:762952245013:web:3862f3e218f75f95a5131c",
  measurementId: "G-W8WMGWJHHR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
