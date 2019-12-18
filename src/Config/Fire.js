import firebase from "firebase";

var Config = {
    apiKey: "AIzaSyCqsPwvfEN4NYFzqb2v_o4TNGiV7Kx6aU4",
    authDomain: "todoapp-143fc.firebaseapp.com",
    databaseURL: "https://todoapp-143fc.firebaseio.com",
    projectId: "todoapp-143fc",
    storageBucket: "todoapp-143fc.appspot.com",
    messagingSenderId: "1078361722977",
    appId: "1:1078361722977:web:07853cd2db503d971a5a20"
  };
  
   const fire = firebase.initializeApp(Config);
   export default fire;