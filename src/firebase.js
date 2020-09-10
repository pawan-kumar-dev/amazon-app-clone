import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDC9yR7myDZt1TC6Hqk8jGNxovMeCluX10",
  authDomain: "clone-ce9fb.firebaseapp.com",
  databaseURL: "https://clone-ce9fb.firebaseio.com",
  projectId: "clone-ce9fb",
  storageBucket: "clone-ce9fb.appspot.com",
  messagingSenderId: "939961225463",
  appId: "1:939961225463:web:636b5571fa94ea39f443f2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
