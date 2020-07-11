function sayhello() {
	var name = document.getElementById("name").value;
	//var message = "<h3>Hello " + name + "!</h3>";

	//document.getElementById("content").textContent = message;

	//document.getElementById("content").innerHTML = message;

	// if (name == name){
	// 	var title = document.querySelector("h1").textContent;
	// 	title = "loving it!";
	// 	document.querySelector("h1").textContent = title;
	// }
	 
	if (name === "gaurav" || name === "kumar gaurav"){
		var title = document.querySelector("h1").textContent;
		title = "stupid!";
		document.querySelector("h1").textContent = title;

		var message = "<h3>"+ name + " is stupid!</h3>";
		document.getElementById("content").innerHTML = message;
	}
	
	else{
		var title = document.querySelector("h1").textContent;
		title = "WELCOME!";
		document.querySelector("h1").textContent = title;
		var message = "<h3>Hello " + name + "!</h3>";
		document.getElementById("content").innerHTML = message;

	}
  


}