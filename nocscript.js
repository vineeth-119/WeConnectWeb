 var firebase = require('firebase');
 var app = firebase.initializeApp({
    		apiKey: "AIzaSyB8G25_6SW60uuWLW7VWpqvQeD-hUb6ZcA",
    		authDomain: "weconnect-b5543.firebaseapp.com",
    		databaseURL: "https://weconnect-b5543-default-rtdb.europe-west1.firebasedatabase.app",
    		projectId: "weconnect-b5543",
    		storageBucket: "weconnect-b5543.appspot.com",
    		messagingSenderId: "772821230089",
    		appId: "1:772821230089:web:4a6972cd472dccfd6aced8",
    		measurementId: "G-E03S568MJ4"
  		});
 var userID=3;
firebase.database().ref('Criminals/'+(++userID)).set({
    			name: "vineeth",
	    		age: "21",
	    		crime : "crime",
	    		location:"location",
    			village:"village",
    			district:"district",
    			state:"state",
    			pincode:"pincode"
  				});
  		// myFunction();
  				