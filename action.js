chrome.browserAction.onClicked.addListener(function(tab) {
	// No tabs or host permissions needed!
	chrome.tabs.executeScript({
		code: 'document.getElementsByTagName("img")[0].setAttribute("style", "width: 100%; height: auto")'
	});
});