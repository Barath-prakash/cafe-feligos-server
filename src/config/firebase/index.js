import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDD0iMtF9pO5DCCp-FYU0fyxnx5ewmjoiA",
    authDomain: "pj-demo-project.firebaseapp.com",
    databaseURL: "https://pj-demo-project.firebaseio.com",
    projectId: "pj-demo-project",
    storageBucket: "pj-demo-project.appspot.com",
    messagingSenderId: "58391114514",
    appId: "1:58391114514:web:ac488dc1590a08ea"
  };

firebase.initializeApp(firebaseConfig);
export const ref = firebase.database().ref();