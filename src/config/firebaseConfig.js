import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCV2i18F580YtGHc2IwENlFprno2pdha0Y",
    authDomain: "sem5credits.firebaseapp.com",
    databaseURL: "https://sem5credits.firebaseio.com",
    projectId: "sem5credits",
    storageBucket: "sem5credits.appspot.com",
    messagingSenderId: "1074810833997",
    appId: "1:1074810833997:web:82fee50d47c192d6782004",
    measurementId: "G-6RSVZH4L6Z"
};

firebase.initializeApp(firebaseConfig);

export default firebase;