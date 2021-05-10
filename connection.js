 
 function writeData() {
 	// body...
 		var name = document.getElementById("CriminalName").value;
		var age = document.getElementById("age").value;
		var crime = document.getElementById("crime").value;
		var location = document.getElementById("location").value;
		var village = document.getElementById("village").value;
		var district = document.getElementById("district").value;
		var state = document.getElementById("state").value;
		var pincode = document.getElementById("PINCODE").value;
		const but = document.getElementById("sub");
		
			firebase.database().ref('Criminals/'+(++userId)).set({
    			name: name,
	    		age: age,
	    		crime : crime,
	    		location:location,
    			village:village,
    			district:district,
    			state:state,
    			pincode:pincode
  				});
  		
  				
 }
 		
			
		
	  