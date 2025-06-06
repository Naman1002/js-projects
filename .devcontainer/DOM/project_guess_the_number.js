let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1) {
    alert('Please Enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please Enter a number smaller than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayMessage(guess);
      displayMessage(`Game Over, The random number was ${randomNumber}`);
      endGame(guess);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage('congratulations, you guessed the correct Number');
  } else if (guess < randomNumber) {
    displayMessage('Your current guess is TOO Low');
  } else if (guess > randomNumber) {
    displayMessage('Your current guess is TOO High');
  }
}
function displayGuess(guess) {
  input.value = ' ';
  numGuess++;
  guessSlot.innerHTML += `${guess} `;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start a new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
