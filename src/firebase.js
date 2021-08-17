import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyCp7hTitpb-1phgphx2-VwQGAf_eQUKGFY",
    authDomain: "blog-4fdc2.firebaseapp.com",
    projectId: "blog-4fdc2",
    storageBucket: "blog-4fdc2.appspot.com",
    messagingSenderId: "1089708052153",
    appId: "1:1089708052153:web:d61a7af540288d17d55568",
    measurementId: "G-TGYZHCW3FS"
}

firebase.initializeApp(config);

// Firestore
export const firestore = firebase.firestore();