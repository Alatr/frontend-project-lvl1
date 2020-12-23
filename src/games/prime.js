import gameCore from '../index.js';
import getRandomInt from '../helpers.js';

const isPrime = (num) => {
  const sqrtnum = Math.sqrt(num);
  for (let i = 2; i < sqrtnum + 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateTask() {
  const randomNumber = getRandomInt(0, 100);
  const newTask = {
    question: randomNumber,
    correctAnswer: (isPrime(randomNumber)) ? 'yes' : 'no',
  };
  return newTask;
}

export default () => {
  gameCore({ generateTask, gameRule });
};
