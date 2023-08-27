const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const ROCK = "piedra🗿";
const PAPER = "papel📄";
const SCISSORS = "tijeras✂️";

let playerPoints = 0;
let computerPoints = 0;
let contenedor = document.querySelector(".content-points");
let pointsPlayer = document.querySelector(".player-point");
let pointsComputer = document.querySelector(".pc-point");
let roundResult = document.querySelector(".text-result > p");

rockBtn.addEventListener("click", () => {
  playRound(ROCK);
});
paperBtn.addEventListener("click", () => {
  playRound(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  playRound(SCISSORS);
});

function playRound(playerSelection) {
  let computerSelection = [ROCK, PAPER, SCISSORS];
  computerSelection = computerSelection[Math.floor(Math.random() * 3)];

  if (computerSelection == playerSelection) {
    return (roundResult.innerText = `EMPATARON! | Jugador: ${playerSelection}  Maquina: ${computerSelection}`);
  } else if (
    (computerSelection == PAPER && playerSelection == ROCK) ||
    (computerSelection == ROCK && playerSelection == SCISSORS) ||
    (computerSelection == SCISSORS && playerSelection == PAPER)
  ) {
    roundResult.innerText = `Gano la maquina | Jugador: ${playerSelection}  Maquina: ${computerSelection}`;
    ganaComputadora();
  } else {
    roundResult.innerText = `Gano el jugador | Jugador: ${playerSelection}  Maquina: ${computerSelection}`;
    ganaJugador();
  }

  if (playerPoints == 5 || computerPoints == 5) {
    if (playerPoints == 5) {
      roundResult.innerText = "GANASTE!!!";
    }
    if (computerPoints == 5) {
      roundResult.innerText = "Perdiste :C";
    }
    playerPoints = 0;
    computerPoints = 0;
    pointsPlayer.innerText = playerPoints;
    pointsComputer.innerText = computerPoints;
    pointsPlayer.classList.remove("win");
    pointsComputer.classList.remove("win");
  }
}

function ganaJugador() {
  playerPoints++;
  pointsPlayer.innerText = playerPoints;
  pointsPlayer.classList.add("win");
  pointsComputer.classList.remove("win");
}

function ganaComputadora() {
  computerPoints++;
  pointsComputer.innerText = computerPoints;
  pointsComputer.classList.add("win");
  pointsPlayer.classList.remove("win");
}
