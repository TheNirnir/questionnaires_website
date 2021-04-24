var QuestionnaireAboutHtml = "snippets/first_about_snippet.html";
var QuestionnaireLanguageHtml = "snippets/language_snippet.html";
var QuestionnaireThirdHtml = "snippets/third_snippet.html";

document.addEventListener("DOMContentLoaded", sizesSet);

// document.addEventListener("DOMContentLoaded", questionnairePage("x"));
	
window.addEventListener("resize", sizesSet);

function sizesSet(event) {
	document.getElementById("footer").style.marginTop = 0;
	document.getElementById('header-trpezoid').style.borderLeftWidth = document.getElementById('header-container').offsetWidth + "px";
	document.getElementById('footer-trpezoid').style.borderRightWidth = document.getElementById('footer-container').offsetWidth + "px";
	for (var i = 0; i < document.querySelectorAll('.language-flag').length; i++) {
		document.getElementsByClassName('language-flag')[i].style.height = document.getElementsByClassName('language-name')[i].offsetHeight + "px";
	}
	// console.log(document.getElementsByTagName("html")[0].offsetHeight);
	// console.log(screen.height);

	// if (screen.height > document.getElementsByTagName("html")[0].offsetHeight) {
	// 	document.getElementById("footer").style.marginTop = (screen.height - document.getElementsByTagName("html")[0].offsetHeight) + "px";
	// }
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
			}, false);
		}, false);
	}, false);
}

function buildQuestionnaireViewHTML(QuestionnaireObj, QuestionnaireAboutHtml, QuestionnaireLanguageHtml, QuestionnaireThirdHtml) {
	var finalHtml = QuestionnaireAboutHtml;

	var about = QuestionnaireObj.about;

	finalHtml = insertProperty(finalHtml, "about", about);

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
		finalHtml += QuestionnaireObj.publications[i];
		finalHtml += "</li>";
	}

	finalHtml += "</ul></div>";

	return finalHtml;
}