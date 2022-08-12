var firebaseConfig =
 {   apiKey: "AIzaSyDQ7sVphLDIW6PoB7WZ1EpCM729JWxFVMc",
     authDomain: "kwitterclass-8004b.firebaseapp.com",
     projectId: "kwitterclass-8004b",
     storageBucket: "kwitterclass-8004b.appspot.com",
     messagingSenderId: "328574755065",
     appId: "1:328574755065:web:bdb320b37eafc50f158228" }; 
     // Initialize Firebase 
    firebase.initializeApp(firebaseConfig);
    
var username=localStorage.getItem("username");
var roomname=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
      
getData();

function send(){
      message=document.getElementById("message_input").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
      document.getElementById("message_input").value="";
}
