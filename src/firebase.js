import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCjtLXXvYjaRQXkOTsoyBxt2_IKl8Obd_M",
        authDomain: "ecommerce-4e669.firebaseapp.com",
        projectId: "ecommerce-4e669",
        storageBucket: "ecommerce-4e669.appspot.com",
        messagingSenderId: "202084978977",
        appId: "1:202084978977:web:f575522088c0a3da29ae60"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};