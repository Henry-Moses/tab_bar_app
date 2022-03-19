import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyDoJzTnaDZJDnfArcUahOKqzXCHVM9wq68",
        authDomain: "spotify-app-76fb5.firebaseapp.com",
        projectId: "spotify-app-76fb5",
        storageBucket: "spotify-app-76fb5.appspot.com",
        messagingSenderId: "549308020399",
        appId: "1:549308020399:web:e9bf4b28be6eb05f8e465a",
        measurementId: "G-BE1YSLV3GR"
}

let app;

  app = firebase.initializeApp(firebaseConfig)

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };