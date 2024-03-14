const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

const p1ButtonHandler = () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score;
  }
};

const p2ButtonHandler = () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score;
  }
};

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
}

// let winningScorePoint = function () {
//   winningScore = parseInt(this.value);
//   reset();
// };

function winningScorePoint() {
  winningScore = parseInt(this.value);
  reset();
}

p1Button.addEventListener("click", p1ButtonHandler);
p2Button.addEventListener("click", p2ButtonHandler);
resetButton.addEventListener("click", reset);
winningScoreSelect.addEventListener("click", winningScorePoint);
