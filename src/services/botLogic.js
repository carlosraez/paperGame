export function getBotSelection(userSelection, score) {
  const options = ['paper', 'stone', 'scissors'];
  const botSelection = options[Math.floor(Math.random() * options.length)];
  let result = '';
  let newScore = score;

  if (botSelection === userSelection) {
    result = 'Tie';
  } else if (
    (botSelection === 'stone' && userSelection === 'scissors') ||
    (botSelection === 'scissors' && userSelection === 'paper') ||
    (botSelection === 'paper' && userSelection === 'stone')
  ) {
    result = 'Bot wins';
    newScore -= 1;
  } else {
    result = 'You win';
    newScore += 1;
  }

  if (newScore < 0) {
    newScore = 0;
  }

  return { botSelection, result, newScore };
}
