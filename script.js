		function showTime(){
		    var now = new Date();
		    var hour = now.getHours();
		    var mins = now.getMinutes();
		    var secs = now.getSeconds();
		    var day = now.getDay();
		    var date = now.getDate();
		    var month = now.getMonth();
		    var year = now.getFullYear();


		    // alert(day);
		    var monthsArray = new Array("Jan. ","Feb. ","Mar. ","Apr. ","May ","June ","July ","Aug. ","Sept. ","Oct. ","Nov. ","Dec. ");
		    var days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
		    var alldays = document.getElementsByTagName("li");

		    for(var i=0; i <= alldays.length; i++){
		    	if((i+1) === day){
		    		alldays[i].classList.add("active");
		    	}
		    }

		    if(hour > 12){
		    	hour = hour - 12;
		    	document.getElementById("period").innerHTML ="PM";
		    }else{
		    	document.getElementById("period").innerHTML ="AM";
		    }

		    if(hour == 0){
		    	hour = '12';
		    }

		    if(hour < 10){
		    	hour = '0' + hour;
		    }

		    if(mins < 10){
		    	mins = '0' + mins;
		    }

		    if(secs < 10){
		    	secs = '0' + secs;
		    }

		    document.getElementById("hr").innerHTML = hour + ":";
		    document.getElementById("min").innerHTML = mins ;
		    document.getElementById("sec").innerHTML = ":" + secs;
		    document.getElementById("fordate").innerHTML = "<h2>" + days[day -1] + ", " + date  + " " + monthsArray[month] + year + "</h2>";
		}

		setInterval("showTime()", 1000);