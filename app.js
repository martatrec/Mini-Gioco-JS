var score = {
	userScore: 0,
	cpuScore: 0
}

var userPick;
var cpuPick;

var allOptions = [
	{
		name: "fuoco",
		image: "images/fuoco.png"
	},
	{
		name: "pioggia",
		image: "images/pioggia.png"
	},
	{
		name: "vento",
		image: "images/vento.png"
	},
]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for(i = 0; i < possibleUserPicks.length; i++){
	possibleUserPicks[i].addEventListener('click', onUserPick);	
}

function onUserPick() {
	userPick = this.dataset.name;
		generateCpuPick();

		var cpuPickImage = "<img src='" + cpuPick.image + "' />";
		var cpuPickText = "<h3>" + cpuPick.name + "</h3";

		document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
		document.getElementById("result").innerHTML = checkWhoWon();

		document.getElementById("player-score").innerHTML = score.userScore;
		document.getElementById("cpu-score").innerHTML = score.cpuScore;
}

function generateCpuPick() {
	cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

generateCpuPick();

function checkWhoWon() {
	if(userPick == cpuPick.name) {
		return "Hai pareggiato";
	}else {
		if(userPick == "fuoco") {
			if(cpuPick.name == "pioggia") {
				score.cpuScore++;
				return "Hai perso";
			}else {
				score.userScore++;
				return "Hai vinto";
			}
		}

		if(userPick == "pioggia") {
			if(cpuPick.name == "vento") {
				score.cpuScore++;
				return "Hai perso";
			}else {
				score.userScore++;
				return "Hai vinto";
			}
		}

		if(userPick == "vento") {
			if(cpuPick.name == "fuoco") {
				score.cpuScore++;
				return "Hai perso";
			}else {
				score.userScore++;
				return "Hai vinto";
			}
		}
	}	
}



