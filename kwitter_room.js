
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
    document.getElementById("user_name").innerHTML="Welcome "+username+" !";

    function addroom(){
      house_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(house_name).update({
        purpose:"adding roomname"
      });
      localStorage.setItem("roomname",house_name);
      window.location="room_page.html";
    
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names= "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
  function redirect(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="room_page.html";
  }
getData();
function logout(){
  window.location="index.html";
  localStorage.removeItem("username");
}

