var selectedCommand;
var consoleContent;
function executeCommand(event) {
	selectedCommand = this.options[this.selectedIndex].text;
	console.log(selectedCommand);
}

function debug() {
	alert("DEBUGGING");
}

function makeGetRequest(requestUrl) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var response = JSON.parse(xhr.responseText);
			console.log(response);
			return response;
		}
		xhr.open('GET', './consoleinputs/' + requestUrl + '.txt');
		xhr.send();
	}
}
