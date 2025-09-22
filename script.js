const storyText = document.getElementById('storyText');
const choicesDiv = document.getElementById('choices');


function showMessage(text) {
  storyText.innerHTML = text;
}

function showChoices(options) {
  choicesDiv.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerHTML = option.text;
    btn.style.margin = '5px';
    btn.style.padding = '10px 20px';
    btn.onclick = option.action;
    choicesDiv.appendChild(btn);
  });
}


function start() {
  showMessage("Welcome to Lost in the Wilderness!<br>You find yourself lost deep in a forest. Will you survive?");
  showChoices([
    { text: "Enter the shrubbery", action: shrubbery },
    { text: "Head toward the rocky clearing", action: rockyClearing }
  ]);
}
function shrubbery() {
  showMessage("You push through the dense foliage. You hear movement. Do you go forward or back?");
  showChoices([
    { text: "Forward", action: hiddenCabin },
    { text: "Back", action: start }
  ]);
}

function rockyClearing() {
  showMessage("You arrive at a ledge with a trail leading down. Do you follow the trail or wait and look around?");
  showChoices([
    { text: "Follow", action: ranger },
    { text: "Wait", action: hiddenCabin }
  ]);
}

function hiddenCabin() {
  showMessage("You discover a hidden cabin. Do you dare to enter or keep moving?");
  showChoices([
    { text: "Enter", action: cabinInterior },
    { text: "Keep Moving", action: darkTunnel }
  ]);
}

function cabinInterior() {
  showMessage("Inside the cabin, you find supplies and a strange old map. Do you rest here or explore further?");
  showChoices([
    { text: "Rest", action: rest },
    { text: "Explore", action: exploreCabin }
  ]);
}

function exploreCabin() {
  showMessage("You explore the cabin further and find a glowing artifact. Do you take it or leave it?");
  showChoices([
    { text: "Take", action: loseGame },
    { text: "Leave", action: winGame }
  ]);
}

function rest() {
  showMessage("You rest and regain your strength. You find a trapdoor leading underground. Do you open it or leave?");
  showChoices([
    { text: "Open", action: undergroundTunnel },
    { text: "Leave", action: loseGame }
  ]);
}

function undergroundTunnel() {
  showMessage("You descend into an underground city. Do you go through the dark tunnel or the bright corridor?");
  showChoices([
    { text: "Dark", action: darkTunnel },
    { text: "Bright", action: brightCorridor }
  ]);
}

function darkTunnel() {
  showMessage("A stranger offers help. Do you trust him?");
  showChoices([
    { text: "Yes", action: winGame },
    { text: "No", action: loseGame }
  ]);
}

function brightCorridor() {
  showMessage("You find an exit and are rescued! Congratulations!");
  showChoices([
    { text: "Play Again", action: start },
    { text: "Exit", action: exitGame }
  ]);
}

function ranger() {
  showMessage("A ranger finds you and rescues you! Congratulations!");
  showChoices([
    { text: "Play Again", action: start },
    { text: "Exit", action: exitGame }
  ]);
}

function winGame() {
  showMessage("You survived! Congratulations!");
  showChoices([
    { text: "Play Again", action: start },
    { text: "Exit", action: exitGame }
  ]);
}

function loseGame() {
  showMessage("Game over. You didn't make it this time.");
  showChoices([
    { text: "Try Again", action: start },
    { text: "Exit", action: exitGame }
  ]);
}

function exitGame() {
  showMessage("Thanks for playing! Refresh the page to restart."); 
  choicesDiv.innerHTML = '';
}

start();
