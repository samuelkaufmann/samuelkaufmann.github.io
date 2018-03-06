console.log("READY");
var currentCommand;
var consoleContent;



function executeCommand(event) {
	currentCommand = this.options[this.selectedIndex].text;
	console.log(currentCommand);
}

function debug() {
	alert("DEBUGGING");
}

function makeRequest(methode, requestUrl) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var response = JSON.parse(xhr.responseText);
			console.log(response);
		}
		xhr.open(methode, requestUrl);
		xhr.send();
	}
}
