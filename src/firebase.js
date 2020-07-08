import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAn3hnXVMR1p09RpXMVCEYf6GmiD8XQwsQ",
    authDomain: "medium-6a47a.firebaseapp.com",
    databaseURL: "https://medium-6a47a.firebaseio.com",
    projectId: "medium-6a47a",
    storageBucket: "medium-6a47a.appspot.com",
    messagingSenderId: "845571549584",
    appId: "1:845571549584:web:0a88c7a1a815402c07eb15"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => 
    firebase.auth().signInWithPopup(provider);