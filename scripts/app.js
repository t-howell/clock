	
$(document).ready(function() {
	function theTime() {
		var rightNow = new Date();
		var hour = rightNow.getHours();
		var minute = rightNow.getMinutes();
		var seconds = rightNow.getSeconds();
		var meridiem = "AM";

		if (hour > 12) {
			hour = hour - 12;
			meridiem = "PM";
		}
		if (hour === 0) {
			hour = 12;
		}

		if (seconds < 10) {
			 seconds = "0" + seconds;
		}
		if (minute < 10) {
			minute = "0" + minute;
		}

	var clock = document.getElementById('clock');
	clock.innerText = hour + ":" + minute + ":" + seconds + " " + meridiem;
	}
	theTime();

	setInterval(theTime, 1000);
});