import runGame from '../index.js';
import getRandomNum from '../get-random-num.js';

const getGCD = (x, y) => {
  if (y > x) return getGCD(y, x);
  if (y === 0) return x;
  return getGCD(y, x % y);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

function generateGameTask() {
  const randomNumber1 = getRandomNum(0, 100);
  const randomNumber2 = getRandomNum(0, 100);
  return {
    question: `${randomNumber1} ${randomNumber2}`,
    correctAnswer: `${getGCD(randomNumber1, randomNumber2)}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
