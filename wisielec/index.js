let password = "dobbre".toLocaleLowerCase();
let gameStatus = "playing";
let wrongGuess = 0;
const min = Math.ceil(1);
const max = Math.floor(4);
randomNumber = Math.floor(Math.random() * (max - min)) + min;
if (randomNumber == 1) {
	password = "Nowe technologie".toLocaleLowerCase();
} else if (randomNumber == 2) {
	password = "Internet".toLocaleLowerCase();
} else {
	password = "Komputer".toLocaleLowerCase();
}
let hiddenPassword = "";
let mapOfKnown = password;
let tabel = [];

function hidePassword() {
	for (let x = 0; x < password.length; x++) {
		tabel[x] = "";
		if (password.charAt(x) != " ") {
			hiddenPassword = hiddenPassword + "_";
		} else if (password.charAt(x) == " ") {
			hiddenPassword = hiddenPassword + " ";
		}
	}
	wrote();
}

function wrote() {
	let passwordToWrote = "";

	for (let f = 0; f < hiddenPassword.length; f++) {
		if (hiddenPassword.charAt(f) != " " && tabel[f] == "") {
			passwordToWrote = passwordToWrote + `${hiddenPassword.charAt(f)}&nbsp;`;
		} else if (hiddenPassword.charAt(f) == " " && tabel[f] == "") {
			passwordToWrote = passwordToWrote + " ";
		} else passwordToWrote = passwordToWrote + tabel[f];
	}

	document.getElementById("password").innerHTML = passwordToWrote;

	if (passwordToWrote == password) {
		document.getElementById("status").innerHTML = "Wygrałeś";
		hideHeart();
		gameStatus = "ended";
	} else if (wrongGuess == 1) {
		document.getElementById("fifthHeart").style.visibility = "hidden";
	} else if (wrongGuess == 2) {
		document.getElementById("fourthHeart").style.visibility = "hidden";
	} else if (wrongGuess == 3) {
		document.getElementById("thirdHeart").style.visibility = "hidden";
	} else if (wrongGuess == 4) {
		document.getElementById("secondHeart").style.visibility = "hidden";
	} else if (wrongGuess == 5) {
		document.getElementById("firstHeart").style.visibility = "hidden";
		document.getElementById("status").innerHTML = "Przegrałeś";
		gameStatus = "ended";
	}
}
function hideHeart() {
	document.getElementById("fifthHeart").style.visibility = "hidden";
	document.getElementById("fourthHeart").style.visibility = "hidden";
	document.getElementById("thirdHeart").style.visibility = "hidden";
	document.getElementById("secondHeart").style.visibility = "hidden";
	document.getElementById("firstHeart").style.visibility = "hidden";
}
function chechIfTheSameLetterInPassword(letter) {
	let notTheLetterCount = 0;
	for (let z = 0; z < password.length; z++) {
		if (password.charAt(z) == letter) {
			tabel[z] = letter;
		} else if (password.charAt(z) != letter) {
			notTheLetterCount++;
			if (notTheLetterCount == password.length) {
				wrongGuess++;
			}
		}
	}
	wrote();
}

function loadValue() {
	if (!isNaN(document.getElementById("letter").value) && gameStatus == "playing") {
		// document.getElementById("wrongInput").innerHTML =
		alert("Musisz wpisać literę");
		document.getElementById("letter").value = "";
		document.getElementById("letter").focus();
	} else if (document.getElementById("letter").value.length > 1 && gameStatus == "playing") {
		// document.getElementById("wrongInput").innerHTML =
		// 	"Musisz wpisać tylko<br>jedną literę";
		alert("Musisz wpisać tylko jedną literę");
		document.getElementById("letter").value = "";
		document.getElementById("letter").focus();
	}
	if (document.getElementById("letter").value.length == 1 && isNaN(document.getElementById("letter").value)) {
		document.getElementById("wrongInput").innerHTML = "";
		if (gameStatus == "playing") {
			let letter = document.getElementById("letter").value.toLocaleLowerCase();
			document.getElementById("letter").value = "";
			letter = letter.toLocaleLowerCase();
			chechIfTheSameLetterInPassword(letter);
			document.getElementById("letter").focus();
		}
	}
}
