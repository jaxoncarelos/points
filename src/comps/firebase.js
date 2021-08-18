import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyDDnbM2T4rSCkUr2Tixreb_ir4c2ZkNyqg",
    authDomain: "jaxonsblogs.firebaseapp.com",
    projectId: "jaxonsblogs",
    storageBucket: "jaxonsblogs.appspot.com",
    messagingSenderId: "955503331870",
    appId: "1:955503331870:web:71b98b23095bc54d0f3c0f",
    measurementId: "G-FB5KWVCMZ0"
}

firebase.initializeApp(config);

export const db = firebase.firestore();