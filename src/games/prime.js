import runGame from '../index.js';
import getRandomInt from '../helper.js';

const isPrime = (num) => {
  const sqrtnum = Math.sqrt(num);
  for (let i = 2; i <= sqrtnum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateGameTask() {
  const randomNumber = getRandomInt(0, 100);
  return {
    question: `Question: ${randomNumber}`,
    correctAnswer: (isPrime(randomNumber)) ? 'yes' : 'no',
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
