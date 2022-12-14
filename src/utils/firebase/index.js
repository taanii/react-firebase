// import * as firebase from "firebase/app"
// import { initializeApp } from "firebase/app"
// import "firebase/firestore"
// import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import "@firebase/auth"
import "@firebase/storage"
import "@firebase/firestore"


var firebaseConfig = {
  apiKey: "AIzaSyDjgumrjDZMr23bcxFYkUVtmWL_eRSTaEY",
  authDomain: "nordstone-15db4.firebaseapp.com",
  projectId: "nordstone-15db4",
  storageBucket: "nordstone-15db4.appspot.com",
  messagingSenderId: "384300262802",
  appId: "1:384300262802:web:b5706fb1575c14044b0d4b",
  measurementId: "G-3LT0G812YG"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);


export { db, auth, firebase };

// const app = firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore()
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { app, db, auth, storage }
