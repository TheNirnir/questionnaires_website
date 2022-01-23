var QuestionnaireAboutHtml = "snippets/first_about_snippet.html";
var QuestionnaireLanguageHtml = "snippets/language_snippet.html";
var QuestionnaireThirdHtml = "snippets/third_snippet.html";

document.addEventListener("DOMContentLoaded", sizesSet);

document.addEventListener("DOMContentLoaded", aboutImageSet);

// document.addEventListener("DOMContentLoaded", questionnairePage("x"));
	
window.addEventListener("resize", sizesSet);
// if (window.location.href == "localhost:3000/questionnairesPage.html") {
window.addEventListener("resize", saparateLineSet);
// }

function sizesSet(event) {
	document.getElementById("footer").style.marginTop = 0;
	document.getElementById('header-trpezoid').style.borderLeftWidth = document.getElementById('header-container').offsetWidth + "px";
	document.getElementById('footer-trpezoid').style.borderRightWidth = document.getElementById('footer-container').offsetWidth + "px";
	for (var i = 0; i < document.querySelectorAll('.language-flag').length; i++) {
		document.getElementsByClassName('language-flag')[i].style.height = document.getElementsByClassName('language-name')[i].offsetHeight + "px";
	}
	for (var i = 0; i < document.querySelectorAll('.button').length; i++) {
		document.getElementsByClassName('button')[i].style.height = document.getElementsByClassName('button')[3].offsetHeight + "px";
	}
	// document.getElementById("footer").style.marginTop = document.getElementById("footer").offsetHeight + "px";
	// document.getElementById("main-content").style.marginBottom = document.getElementById("footer").offsetHeight + "px";
	// document.getElementsByTagName("html")[0].style.paddingBottom = document.getElementById("footer").offsetHeight + "px";
	// console.log(document.getElementsByTagName("html")[0].offsetHeight);
	// console.log(screen.height);

	if (screen.height > document.getElementsByTagName("html")[0].offsetHeight) {
		// document.getElementById("footer").style.marginTop = (screen.height - document.getElementsByTagName("html")[0].offsetHeight) + "px";
		document.getElementById("footer").style.marginTop = (document.documentElement.clientHeight - document.getElementsByTagName("html")[0].offsetHeight) + "px";
	}

	// if (window.location.href == "questionnairesPage.html") {
	// 	document.getElementsByClassName("saparate-line")[0].style.height = (document.getElementById("languages-container").offsetHeight-20) + "px";
	// 	console.log("Yes!");
	// }
	// console.log(window.location.href);
	// console.log(window.location.pathname.split("/").pop());
	var maxLeng = 0;
	for (var i = 0; i < document.querySelectorAll('.language-name').length; i++) {
		if (document.getElementsByClassName('language-center')[i].offsetWidth > document.getElementsByClassName('language-center')[maxLeng].offsetWidth) {
			maxLeng = i;
		}
	}

	for (var i = 0; i < document.querySelectorAll('.language-name').length; i++) {
		document.getElementsByClassName('language-name')[i].style.width = document.getElementsByClassName('language-center')[maxLeng].offsetWidth - document.getElementsByClassName('language-flag')[i].offsetWidth + "px";
	}

	if (document.querySelector("#about-image")!=null && document.getElementById("about-container").offsetHeight < document.getElementById("about-img").offsetHeight) {
		document.getElementById("about-container").style.height = document.getElementById("about-img").offsetHeight + "px";
		console.log("hi");
	}
}

function saparateLineSet(event) {
	if (window.location.pathname.split("/").pop() == "questionnairesPage.html") {
		document.getElementsByClassName("saparate-line")[0].style.height = (document.getElementById("languages-container").offsetHeight-20) + "px";
		aboutImageSet();
	}
}

function aboutImageSet(event) {
	waitForAboutToDisplay("#about-img", 100);

	function waitForAboutToDisplay(selector, time) {
        if(document.querySelector(selector)!=null) {
            if (document.getElementById("about-container").offsetHeight < document.getElementById("about-img").offsetHeight) {
				document.getElementById("about-container").style.height = document.getElementById("about-img").offsetHeight + "px";
				if(sessionStorage.getItem("questionnaire") != "PRDS") {
					document.getElementById("about-content").style.marginTop = (document.getElementById("about-img").offsetHeight-document.getElementById("about-content").offsetHeight)/2 + "px";
				}
			}
            return;
        }
        else {
            setTimeout(function() {
                waitForAboutToDisplay(selector, time);
            }, time);
        }
    }
}

// console.log(QuestionnaireObj.about);
// questionnairePage("MDSI");
// var questionnaire;
function questionnairePage(questionnaireName) {
	sessionStorage.setItem("questionnaire", questionnaireName);
	window.location.href = "questionnairesPage.html";
	// console.log(questionnaireName);
	// console.log(questionnaire);
	// questionnaire = questionnaireName;
	// setTimeout(buildAndShowQuestionnaire(QuestionnaireObj), 3000);
	// buildAndShowQuestionnaire(QuestionnaireObj);
}

function questionnairePageBuild() {
	// console.log(sessionStorage.getItem("questionnaire"));
	if (sessionStorage.getItem("questionnaire") == "MDSI") {
		buildAndShowQuestionnaire(MDSIObj);
	}
	if (sessionStorage.getItem("questionnaire") == "FCSR") {
		buildAndShowQuestionnaire(FCSRObj);
	}
	if (sessionStorage.getItem("questionnaire") == "SDCF") {
		buildAndShowQuestionnaire(SDCFObj);
	}
	if (sessionStorage.getItem("questionnaire") == "PRDS") {
		buildAndShowQuestionnaire(PRDSObj);
	}
	if (sessionStorage.getItem("questionnaire") == "RDHS") {
		buildAndShowQuestionnaire(RDHSObj);
	}
	if (sessionStorage.getItem("questionnaire") == "PCSDS") {
		buildAndShowQuestionnaire(PCSDSObj);
	}
	if (sessionStorage.getItem("questionnaire") == "DRS") {
		buildAndShowQuestionnaire(DRSObj);
	}
	if (sessionStorage.getItem("questionnaire") == "DCBQ") {
		buildAndShowQuestionnaire(DCBQObj);
	}
	if (sessionStorage.getItem("questionnaire") == "DSEQ") {
		buildAndShowQuestionnaire(DSEQObj);
	}
	if (sessionStorage.getItem("questionnaire") == "ATADS") {
		buildAndShowQuestionnaire(ATADSObj);
	}
}

function setTitle(QuestionnaireObj) {
	document.getElementsByTagName("html")[0].innerHTML = insertProperty(document.getElementsByTagName("html")[0].innerHTML, "shortName", QuestionnaireObj.shortName);
	document.getElementsByTagName("html")[0].innerHTML = insertProperty(document.getElementsByTagName("html")[0].innerHTML, "fullName", QuestionnaireObj.fullName);
}

function insertProperty (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(RegExp(propToReplace, "g"), propValue);
	return string;
}

function buildAndShowQuestionnaire(QuestionnaireObj) {
	setTitle(QuestionnaireObj);
	$ajaxUtils.sendGetRequest(QuestionnaireAboutHtml, function(QuestionnaireAboutHtml) {
		$ajaxUtils.sendGetRequest(QuestionnaireLanguageHtml, function(QuestionnaireLanguageHtml) {
			$ajaxUtils.sendGetRequest(QuestionnaireThirdHtml, function(QuestionnaireThirdHtml) {
				var QuestionnaireViewHTML = buildQuestionnaireViewHTML(QuestionnaireObj, QuestionnaireAboutHtml, QuestionnaireLanguageHtml, QuestionnaireThirdHtml);
				document.querySelector("#main-content").innerHTML = QuestionnaireViewHTML;
				sizesSet();
				saparateLineSet();
			}, false);
		}, false);
	}, false);
}

function buildQuestionnaireViewHTML(QuestionnaireObj, QuestionnaireAboutHtml, QuestionnaireLanguageHtml, QuestionnaireThirdHtml) {
	var finalHtml = QuestionnaireAboutHtml;

	// var about = QuestionnaireObj.about;
	var about = replaceSigns(QuestionnaireObj.about);
	var imageSrc = replaceSigns(QuestionnaireObj.image);

	finalHtml = insertProperty(finalHtml, "about", about);
	finalHtml = insertProperty(finalHtml, "image", imageSrc);

	// console.log(QuestionnaireObj.languages[0].country);
	// console.log(QuestionnaireObj.languages[0].language);

	for (var i = 0; i < QuestionnaireObj.languages.length; i++) {
		var html = QuestionnaireLanguageHtml;
		var country = QuestionnaireObj.languages[i].country;
		var language = QuestionnaireObj.languages[i].language;

		html = insertProperty(html, "country", country);
		html = insertProperty(html, "language", language);

		finalHtml += html;
	}

	finalHtml +=  QuestionnaireThirdHtml;

	for (var i = 0; i < QuestionnaireObj.publications.length; i++) {
		finalHtml += "<li>";
		finalHtml += replaceSigns(QuestionnaireObj.publications[i]);
		finalHtml += "</li>";
	}

	finalHtml += "</ul></div>";

	return finalHtml;
}

function replaceSigns (string) {
	// var propToReplace = "–";
	// var propValue = "&nd{{{ash;";
	// string = string.replace(RegExp(propToReplace, "g"), propValue);
	// propToReplace = "-";
	// propValue = "&#82{{{09;";
	// string = string.replace(RegExp(propToReplace, "g"), propValue);
	// propToReplace = "&";
	// propValue = "&am{{{p;";
	// string = string.replace(RegExp(propToReplace, "g"), propValue);
	// propToReplace = "’";
	// propValue = "&rs{{{quo;";
	// string = string.replace(RegExp(propToReplace, "g"), propValue);
	// propToReplace = "Taubman &ndash;";
	// propValue = "Taubman&n{{{bsp;&n{{{dash;";
	// string = string.replace(RegExp(propToReplace, "g"), propValue);
	// propToReplace = "{{{";
	// propValue = "";
	// string = string.replace(RegExp(propToReplace, "g"), propValue);
	return string;
}