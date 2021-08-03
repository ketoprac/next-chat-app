import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDP517CM7kzEkVYCrMkTtslKVHWtyNDHEg",
  authDomain: "chat-app-3d21b.firebaseapp.com",
  projectId: "chat-app-3d21b",
  storageBucket: "chat-app-3d21b.appspot.com",
  messagingSenderId: "860228977090",
  appId: "1:860228977090:web:d2cd68bf405f2e66da965b",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
