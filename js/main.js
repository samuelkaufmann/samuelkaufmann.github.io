var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		var answer = JSON.parse(xhr.responseText);
			console.log("Request done");
		}
	xhr.open('GET', reqUrl);
	xhr.send();
}
