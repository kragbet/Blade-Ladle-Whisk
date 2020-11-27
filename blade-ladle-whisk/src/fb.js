import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcD6J9NBQ2n_42MT08x88UVOk_LAduclU",
    authDomain: "blade-laddle-whisk.firebaseapp.com",
    databaseURL: "https://blade-laddle-whisk.firebaseio.com",
    projectId: "blade-laddle-whisk",
    storageBucket: "blade-laddle-whisk.appspot.com",
    messagingSenderId: "791204130871",
    appId: "1:791204130871:web:8c94d1390b5c352e048fb2",
    measurementId: "G-TPX0F0X855"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// db.setting({timestampsInSnapshots: true});

export default db;