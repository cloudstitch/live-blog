
(function() {
	var root = document;

	var searchView = root.getElementsByClassName('search-view')[0];
	var addView = root.getElementsByClassName('add-view')[0];
	var listView = root.getElementsByClassName('list-view')[0];

	var toggleVisibility = function(elem) {
		if (elem.classList.contains("visible")) {
			elem.classList.remove("visible");
			elem.classList.add("invisible");
		} else {
			elem.classList.add("visible");
			elem.classList.remove("invisible");
		}
	};

	window.toggleAdd = function() {
		toggleVisibility(addView);
		toggleVisibility(listView);
	};

})()
