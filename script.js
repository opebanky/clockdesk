		function showTime(){
		    var now = new Date();
		    var hour = now.getHours();
		    var mins = now.getMinutes();
		    var secs = now.getSeconds();
		    var day = now.getDay();
		    // var day = 7;

		    var alldays = document.getElementsByTagName("li");

		    for(var i=0; i <= alldays.length; i++){
		    	if((i+1) === day){
		    		alldays[i].classList.add("active");
		    	}
		    }

		    if(day == 3){
		    }

		    if(hour > 12){
		    	hour = hour - 12;
		    }

		    if(hour == 0){
		    	hour = 0;
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
		    document.getElementById("min").innerHTML = mins + ":";
		    document.getElementById("sec").innerHTML = secs;
		}

		setInterval("showTime()", 1000);