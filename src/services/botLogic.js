function getWinningOption(userSelection) {
  switch (userSelection) {
    case 'paper':
      return 'stone';
    case 'stone':
      return 'scissors';
    case 'scissors':
      return 'paper';
    default:
      return '';
  }
}

export function getBotSelection(userSelection, score) {
  const options = ['paper', 'stone', 'scissors'];
  // 70% chance of selecting the option that beats the user, 30% chance of selecting a random option
  const botSelection =
    Math.random() < 0.7
      ? getWinningOption(userSelection)
      : options[Math.floor(Math.random() * options.length)];

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
