const buttons = document.getElementsByClassName("scrollButton");
const sections = document.getElementsByTagName("section");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", () => {
		sections[i + 1].scrollIntoView();
	});
}
const navButtons = document.querySelectorAll("#navBar div");
for (let i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener("click", () => {
		sections[i].scrollIntoView();
	});
}

async function getCryptoValues() {
	const url = "https://blockchain.info/ticker";
	const dane = await fetch(url);
	const json = await dane.json();
	console.log(json);
	return json;
}
function displayData(data) {
	const element = document.getElementById("bitcoinWorth");
	element.innerText += " " + data["PLN"]["last"] + " PLN";
}
(async () => {
	const dane = await getCryptoValues();
	displayData(dane);
})();

function goToTitlePage() {
	document.getElementById("titleDiv").scrollIntoView();
}
