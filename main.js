//Constant for Local Time Container
const lt_cont = document.getElementById("localtime-container");

function update() {
	//User's Local Time:
	let date = new Date();

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
	let dateNY = date.toLocaleString("en-US", {timeZone: "America/New_York"});
    dateNY = new Date(dateNY);
                
    greeting(date, dateNY, "Hey, New Yorker!");
                
    let hoursNY = dateNY.getHours();
	if (hoursNY < 10) hoursNY = "0" + hoursNY;
	let minutesNY = dateNY.getMinutes();
	if (minutesNY < 10) minutesNY = "0" + minutesNY;
	let secondsNY = dateNY.getSeconds();
	if (secondsNY < 10) secondsNY = "0" + secondsNY;
		        
	document.getElementById("h_ny").innerHTML = hoursNY;
	document.getElementById("m_ny").innerHTML = minutesNY;
	document.getElementById("s_ny").innerHTML = secondsNY;

	//Ukraine (Kyiv) Time:
	let dateUA = date.toLocaleString("en-US", {timeZone: "Europe/Kiev"});
    dateUA = new Date(dateUA);

    
    greeting(date, dateUA, "Glory to Ukraine!");

    let hoursUA = dateUA.getHours();
	if (hoursUA < 10) hoursUA = "0" + hoursUA;
	let minutesUA = dateUA.getMinutes();
	if (minutesUA < 10) minutesUA = "0" + minutesUA;
	let secondsUA = dateUA.getSeconds();
	if (secondsUA < 10) secondsUA = "0" + secondsUA;
		        
	document.getElementById("h_ua").innerHTML = hoursUA;
	document.getElementById("m_ua").innerHTML = minutesUA;
	document.getElementById("s_ua").innerHTML = secondsUA;


}

setInterval(update, 1000);

function greeting(local, zoneTime, text) {
	if (local.toDateString() === zoneTime.toDateString()) {
		let greetp = document.createElement("p");
    	greetp.appendChild(document.createTextNode(text));
    	lt_cont.appendChild(greetp);

}
	}