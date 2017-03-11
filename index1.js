function setText(selector, text) {
	var element = document.querySelector(selector);
	element.innerText = text;
}


function setTextAll(selector, text) {
	var arrayElements = document.querySelectorAll(selector);
		arrayElements.forEach(function(element) {
			element.innerText = text;
		});
}

setText("p", "sfadf")
setTextAll("div .block a", "or was it ?");

