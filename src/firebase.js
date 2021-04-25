import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC1icvx9oLwkh5m7YV-wPe3eN9akpknHws",
  authDomain: "auth-development-81d05.firebaseapp.com",
  databaseURL: "http://auth-development-81d05.firebaseio.com",
  projectId: "auth-development-81d05",
  storageBucket: "auth-development-81d05.appspot.com",
  messagingSenderId: "712778589988",
  appId: "1:712778589988:web:1b6af1b8432f0ed34df5b1",
  measurementId: "G-X8Z3BTEPG9"
})

export const auth = app.auth()
export default app