var firebaseConfig = {
    apiKey: "AIzaSyCUfhdGshUqpVHSamvJ9dGhPX6UKcmFJHY",
    authDomain: "kwitter-7e113.firebaseapp.com",
    databaseURL: "https://kwitter-7e113-default-rtdb.firebaseio.com",
    projectId: "kwitter-7e113",
    storageBucket: "kwitter-7e113.appspot.com",
    messagingSenderId: "875370820637",
    appId: "1:875370820637:web:3a413abef1ad8f340f42f4"
  };
  firebase.initializeApp(firebaseConfig)
  username=localStorage.getItem("username")
  roomname=localStorage.getItem("roomname")
  function send(){
    message=document.getElementById("message").value
    firebase.database.ref("/").push({
        name:username;,
        message:message;,
        like:0
    });
    document.getElementById("message").value=""
  }