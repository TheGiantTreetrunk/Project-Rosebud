/*
Project Rosebud Hacking Project and Adventure Game 

*/

var min_mode = 1;

//set the clock

setInterval(Clock, 60000);

function Clock() {
	var xxclk = new Date();
	var xxcal = new Date();
	document.getElementById("Clock_time").innerHTML = xxclk.getHours() + ":" + xxclk.getMinutes() +
	"<span id='clock_calendar_info' class='tooltiptext1'>twest</span>";
	document.getElementById("clock_calendar_info").innerHTML = 
	"<center>" + xxcal.getHours() + ":" + xxcal.getMinutes() + "<br>" +
	xxcal.getMonth() + " " + xxcal.getDay() + " " + xxcal.getYear() + "</center>";
}

function desktop_() {
	document.getElementById("UIX_ROSE_LOGIN").style.display = "none";
	document.getElementById("UIX_ROSE_DESKTOP").style.display = "block";
	
	if(min_mode == 0) {
		window_(0);
	}
	if(min_mode == 1) {
		window_(5);
		Clock();
	}
}

function startup_() {
	document.getElementById("UIX_ROSE_LOGIN").style.display = "block";
	document.getElementById("UIX_ROSE_DESKTOP").style.display = "none";
	document.getElementById("body").classList.add("body_desktop");
	
	
	setTimeout(desktop_, 3000);
}

function window_(ui_call) {
	if(ui_call == 0) {
		document.getElementById("window_terminal").style.display = "none";
		document.getElementById("window_endless_adventure").style.display = "none";
		document.getElementById("window_calculator").style.display = "none";
		app_settings(1);
	}
	
	if(ui_call == 2) {
		document.getElementById("application_settings").style.display = "block";
		document.getElementById("application_settings").innerHTML = "Terminal";
		document.getElementById("window_terminal").style.display = "block";
		document.getElementById("window_endless_adventure").style.display = "none";
		document.getElementById("window_calculator").style.display = "none";
	}
	
	if(ui_call == 5) {
		document.getElementById("application_settings").style.display = "block";
		document.getElementById("application_settings").innerHTML = "TINY RPG";
		document.getElementById("window_terminal").style.display = "none";
		document.getElementById("window_calculator").style.display = "none";
		document.getElementById("window_endless_adventure").style.display = "block";
	}
	
	if(ui_call == 6) {
		document.getElementById("application_settings").style.display = "block";
		document.getElementById("application_settings").innerHTML = "Calculator";
		document.getElementById("window_terminal").style.display = "none";
		document.getElementById("window_endless_adventure").style.display = "none";
		document.getElementById("window_calculator").style.display = "block";
	}
}

function Terminal_() {
	alert("The form was submitted");
	var xyz = document.getElementById("xxy").value;
	alert(xyz);
	document.getElementById("xxy").value = "";
}