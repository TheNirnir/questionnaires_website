document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById('header-trpezoid').style.borderLeftWidth = document.getElementById('header-trpezoid').offsetWidth + "px";
	document.getElementById('footer-trpezoid').style.borderRightWidth = document.getElementById('footer-trpezoid').offsetWidth + "px";
	// document.getElementById('button').style.height = document.getElementById('button').offsetWidth + "px";
	// // document.getElementById('button').style.height = 200;
	// console.log(document.getElementById('button').offsetWidth);
	// console.log(document.getElementById('button').offsetHeight);
	// console.log(document.getElementById('button').style.height);

	// document.getElementById("main-content").style.marginTop = document.getElementsByTagName("header")[0].offsetHeight + 20 + "px";
	// document.getElementById("main-content").style.paddingBottom = document.getElementById("footer").offsetHeight + 30 + "px";
	// console.log(document.getElementById("footer").offsetHeight + "px");
	// console.log(document.getElementById("main-content").style.paddingBottom);
	// console.log(document.getElementsByTagName("header")[0].offsetHeight + 30 + "px");
	// console.log(document.getElementById("main-content").style.marginTop);

// 	if (screen.width > 768) {
// 		document.getElementById("button-2").style.height = document.getElementById("button-3").offsetHeight + "px";
// 		document.getElementById("button-4").style.height = document.getElementById("button-3").offsetHeight + "px";

// 		document.getElementById("button-5").style.height = document.getElementById("button-6").offsetHeight + "px";
// 		document.getElementById("button-7").style.height = document.getElementById("button-6").offsetHeight + "px";
// 	}
// 	else {
// 		document.getElementById("button-2").style.height = document.getElementById("button-3").offsetHeight + "px";
// 		document.getElementById("button-5").style.height = document.getElementById("button-4").offsetHeight + "px";
// 		document.getElementById("button-7").style.height = document.getElementById("button-6").offsetHeight + "px";
// 	}

// 	// for (var i = 0; i < document.getElementsByClassName("no-initials").length; i++) {
// 	// 	document.getElementsByClassName("no-initials")[i].style.lineHeight = document.getElementsByClassName("no-initials")[i].offsetHeight + "px";
// 	// }
// 	document.getElementsByClassName("no-initials")[1].style.lineHeight = document.getElementsByClassName("no-initials")[1].offsetHeight + "px";

// 	// console.log(document.getElementsByClassName("no-initials")[1].offsetHeight + "px");
// 	// console.log(screen.width);
});

function questionnairePage(questionnaire) {
	window.location.href = "questionnairesPage.html"
}