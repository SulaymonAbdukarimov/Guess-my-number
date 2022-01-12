'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //limit
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//chack button
document.querySelector('.check').addEventListener('click', function () {
  //when check button  click function will run and it connecte to another html
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('NO Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber; //? is connecting to secret number ,updated

    //background color when wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    // width size
    document.querySelector('.number').style.width = '30rem';
    //High Score button
    //this if inside of else if condition
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
