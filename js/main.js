var selectedCommand;
var consoleContent;



function executeCommand(event) {
	selectedCommand = this.options[this.selectedIndex].text;
	console.log(selectedCommand);
	if (selectedCommand == 'clear') {
		requestUrl = 'https://maker.ifttt.com/trigger/test_push_notification/with/key/8YTrZWXGvX8AI0abunwjdjDARiLSL1NxGwZbvyXWGZ';
		makeGetRequest(requestUrl);
	}
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
		}
		xhr.open('GET', requestUrl);
		xhr.send();
	}
}
