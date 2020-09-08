document.addEventListener("DOMContentLoaded", function (event) {
	// document.getElementById('button').style.height = document.getElementById('button').offsetWidth + "px";
	// // document.getElementById('button').style.height = 200;
	// console.log(document.getElementById('button').offsetWidth);
	// console.log(document.getElementById('button').offsetHeight);
	// console.log(document.getElementById('button').style.height);

	document.getElementById("main-content").style.marginTop = document.getElementsByTagName("header")[0].offsetHeight + 20 + "px";
	document.getElementById("main-content").style.paddingBottom = document.getElementById("footer").offsetHeight + 20 + "px";
	// console.log(document.getElementById("footer").offsetHeight + "px");
	// console.log(document.getElementById("main-content").style.paddingBottom);
	console.log(document.getElementsByTagName("header")[0].offsetHeight + 30 + "px");
	console.log(document.getElementById("main-content").style.marginTop);
});