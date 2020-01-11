//Constant for Local Time Container
const lt_cont = document.getElementById("localtime-container");

function update(dates) {
	
	//User's Local Time:
	let date = dates[0];

	let hours = date.getHours();
	if (hours < 10) hours = "0" + hours;
	let minutes = date.getMinutes();
	if (minutes < 10) minutes = "0" + minutes;
	let seconds = date.getSeconds();
	if (seconds < 10) seconds = "0" + seconds;
	document.getElementById("h").innerHTML = hours;
	document.getElementById("m").innerHTML = minutes;
	document.getElementById("s").innerHTML = seconds;

	//New York Time:
	let dateNY = dates[1];
                
    let hoursNY = dateNY.getHours();
	if (hoursNY < 10) hoursNY = "0" + hoursNY;
	let minutesNY = dateNY.getMinutes();
	if (minutesNY < 10) minutesNY = "0" + minutesNY;
	let secondsNY = dateNY.getSeconds();
	if (secondsNY < 10) secondsNY = "0" + secondsNY;
	
	if (document.getElementById("nytime-container") != null) {    
		document.getElementById("h_ny").innerHTML = hoursNY;
		document.getElementById("m_ny").innerHTML = minutesNY;
		document.getElementById("s_ny").innerHTML = secondsNY;
	}
	//Ukraine (Kyiv) Time:
	
	let dateUA = dates[2];

	let hoursUA = dateUA.getHours();
	if (hoursUA < 10) hoursUA = "0" + hoursUA;
	let minutesUA = dateUA.getMinutes();
	if (minutesUA < 10) minutesUA = "0" + minutesUA;
	let secondsUA = dateUA.getSeconds();
	if (secondsUA < 10) secondsUA = "0" + secondsUA;
	
	if (document.getElementById("uatime-container") != null) {
		document.getElementById("h_ua").innerHTML = hoursUA;
		document.getElementById("m_ua").innerHTML = minutesUA;
		document.getElementById("s_ua").innerHTML = secondsUA;
 	}

	//India Time:
	let dateIN = dates[3];

    let hoursIN = dateIN.getHours();
	if (hoursUA < 10) hoursUA = "0" + hoursIN;
	let minutesIN = dateUA.getMinutes();
	if (minutesIN < 10) minutesIN = "0" + minutesIN;
	let secondsIN = dateIN.getSeconds();
	if (secondsIN < 10) secondsIN = "0" + secondsIN;
	
	if (document.getElementById("intime-container") != null) {	        
		document.getElementById("h_in").innerHTML = hoursIN;
		document.getElementById("m_in").innerHTML = minutesIN;
		document.getElementById("s_in").innerHTML = secondsIN;
	}
}

setInterval(function () {update(dateCalc());}, 1000);

switch (true) {
	case dateCalc()[0].toTimeString() === dateCalc()[1].toTimeString():
		greeting("Hey, New Yorker!");
		document.getElementById('nytime-container').outerHTML = "";
		break;
	case dateCalc()[0].toTimeString() === dateCalc()[2].toTimeString():
		greeting("Glory to Ukraine!");
		document.getElementById('uatime-container').outerHTML = ""; 
		break;
	case dateCalc()[0].toTimeString() === dateCalc()[3].toTimeString():
		greeting("Hello, Sirr!");
		document.getElementById('intime-container').outerHTML = "";
		break;
}

function greeting(text) {
		let greetp = document.createElement("p");
    	greetp.appendChild(document.createTextNode(text));
    	lt_cont.appendChild(greetp);
}

function dateCalc() {
	let date = new Date();
	
	let dateNY = date.toLocaleString("en-US", {timeZone: "America/New_York"});
    dateNY = new Date(dateNY);

	let dateUA = date.toLocaleString("en-US", {timeZone: "Europe/Kiev"});
    dateUA = new Date(dateUA);

    let dateIN = date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    dateIN = new Date(dateIN);

	let arr = [date, dateNY, dateUA, dateIN];
	return arr;
}

function secToggle() {
	let els = document.getElementsByClassName('sec');
	for (let item of els) {
		if (item.style.display === "none") {
	    item.style.display = "inline";
	  	} else {
	    	item.style.display = "none";
	  	}
  	}
}

function lightToggle() {
	let main_container = document.body;
	main_container.classList.toggle("dark-mode");
}
