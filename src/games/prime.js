import runGame from '../index.js';
import getRandomNum from '../get-random-num.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % 2 === 0) return false;
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateGameTask() {
  const randomNumber = getRandomNum(0, 100);
  return {
    question: randomNumber,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
