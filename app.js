const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  switch(userInput) {
    case 'rock':
    case 'paper':
    case 'scissors':
    case 'bomb':
      return userInput;
    default: 
      console.log('Program accepts either ' + 
        'rock, paper or scissors as input.');
      break;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  let cpuChoice;

  switch (randomNumber) {
    case 0:
      cpuChoice = 'rock';
      break;
    case 1:
      cpuChoice = 'paper';
      break;
    case 2:
      cpuChoice = 'scissors';
      break;
    default: 
      break;
  }

  return cpuChoice;
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You are a superstar!. You won!';
  }

  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer has won!';
    } else {
      return 'You won!';
    }
  } 
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer has won!';
    } else {
      return 'You won!'
    } 
  }
    
  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer has won!';
      } else {
        return 'You won!';
      }
    }
  
};

const playGame = () => {
  const userChoice = getUserChoice('gibberish');
  const computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

