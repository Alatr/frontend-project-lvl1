import gameCore from '../../index.js';
import { getRandomIntInclusive, NOD } from '../../helpers.js';

const explanationMsg = 'Find the greatest common divisor of given numbers.';
const stateApp = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyQuestion: [],
  state: null, // 'wrongAnswer', 'corectAnswer', 'askAgain', 'greetings',

};

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
  gameCore(stateApp, { generateTask, explanationMsg });
};
