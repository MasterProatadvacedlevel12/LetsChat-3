//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyADughXgN6Qav8vEqFDdgCzHjzX15hFjIM",
      authDomain: "letschatapp-edfb0.firebaseapp.com",
      databaseURL: "https://letschatapp-edfb0-default-rtdb.firebaseio.com",
      projectId: "letschatapp-edfb0",
      storageBucket: "letschatapp-edfb0.appspot.com",
      messagingSenderId: "406092204871",
      appId: "1:406092204871:web:b91317a63eb7789b439a62"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send()
    {
          msg =  document.getElementById("msg").value
         firebase.database().ref(room_name).push({
               name: user_name,
               like: 0,
               message: msg
         });
    }
    
    function logOut()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code

//End code
      } });  }); }
getData();
