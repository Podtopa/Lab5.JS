function createDigitSquares(binaryCode) {
  const container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(6, 1fr)`;
  container.style.gridTemplateColumns = `repeat(3, 1fr)`;
  container.style.gridGap = "2px";

  for (let i = 0; i < binaryCode.length; i++) {
    const square = document.createElement("div");
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.backgroundColor = binaryCode[i] === "1" ? "black" : "white";
    container.appendChild(square);
  }

  document.body.appendChild(container);
}


const digitBinaries = {
  "0": "111101101101111",
  "1": "110010010010111",
  "2": "111001111100111",
  "3": "111001111001111",
  "4": "101101111001001",
  "5": "111100111001111",
  "6": "111100111101111",
  "7": "111001010010010",
  "8": "111101111101111",
  "9": "111101111001111",
};


const targetNumber = Math.floor(Math.random() * 10);


createDigitSquares(digitBinaries[targetNumber]);

let attempts = 0;


const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");


function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess === targetNumber) {
    message.textContent = `Congratulations! You guessed ${targetNumber} in ${attempts} attempts.`;
    message.style.color = "green";
    guessInput.disabled = true;
    checkButton.disabled = true;
  } else {
    message.textContent = "Incorrect guess. Try again.";
    message.style.color = "red";
  }

  guessInput.value = "";
}

checkButton.addEventListener("click", checkGuess);
