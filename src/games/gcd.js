import gameCore from '../index.js';
import getRandomInt from '../helpers.js';

const GCD = (x, y) => {
  if (y > x) return GCD(y, x);
  if (y === 0) return x;
  return GCD(y, x % y);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

function generateTask() {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(0, 100);
  const newTask = {
    question: `Question: ${randomNumber1} ${randomNumber2}`,
    correctAnswer: `${GCD(randomNumber1, randomNumber2)}`,
  };
  return newTask;
}

export default () => {
  gameCore({ generateTask, gameRule });
};
