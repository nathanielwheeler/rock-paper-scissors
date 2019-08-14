//  Random computer choice!
let botChoiseMaker = function () {
  switch (1 + Math.floor(3 * Math.random())) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
//  Determine the winner given the player's choice.
//  Activate an event that displays the outcome.
let play = function (playerChoice) {
  let botChoice = botChoiseMaker()

  console.log(`The player shot ${playerChoice}!`)
  console.log(`The computer shot ${botChoice}!`)

  let outcome = ""
  switch (`${playerChoice}-${botChoice}`) {
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
      ++tally.ties;
      outcome = "tied";
      resultBG = "warning"
      break;
    case "rock-paper":
    case "paper-scissors":
    case "scissors-rock":
      ++tally.bot;
      outcome = "lost";
      resultBG = "danger"
      break;
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
      ++tally.player;
      outcome = "won";
      resultBG = "success"
      break;
  }
  playResult = `You ${outcome}!`;
  console.log(playResult);

  resultDraw()
  return 1;
}
let playResult = "";
let resultBG = ""

// This function will update UI.
// The first time the function is called, it will create all needed UI elements.
let tally = {
  player: 0,
  ties: 0,
  bot: 0,
}

let resultDraw = function () {
  cardsExistChecker();
  document.querySelector("#player-tally").textContent = `${tally.player}`
  document.querySelector("#ties-tally").textContent = `${tally.ties}`
  document.querySelector("#bot-tally").textContent = `${tally.bot}`
  document.querySelector("#play-result").textContent = playResult
  document.querySelector("#result-card").className = `card text-center bg-${resultBG}`
}

let tallyReset = function () {
  tally = {
    player: 0,
    ties: 0,
    bot: 0,
  }
  playResult = "Tally Reset."
  resultBG = "info"
  resultDraw()
}
// This function checks if the player has clicked on one of the buttons.
// If they have not, it activates a function that makes the cards visible.
let cardsExist = false;
let cardsExistChecker = function () {
  if (cardsExist === true) {
    return 1;
  } else {
    makeCardsVisible();
    return 1;
  }
}
let makeCardsVisible = function () {
  document.querySelector("#result-visibility").className = "visible";
  cardsExist = true;
}