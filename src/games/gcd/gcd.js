import gameCore from '../../index.js';
import { getRandomIntInclusive, NOD } from '../../helpers.js';

const explanationMsg = 'Find the greatest common divisor of given numbers.';

function generateTask() {
  const randomInt1 = getRandomIntInclusive(0, 100);
  const randomInt2 = getRandomIntInclusive(0, 100);
  const newTask = {
    question: `${randomInt1} ${randomInt2}`,
    correctAnswer: `${NOD(randomInt1, randomInt2)}`,
  };
  return newTask;
}

export default () => {
  gameCore({ generateTask, explanationMsg });
};
