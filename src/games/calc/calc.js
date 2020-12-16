import gameCore from '../../index.js';
import { getRandomIntInclusive } from '../../helpers.js';

const explanationMsg = 'What is the result of the expression?';

const stateApp = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyQuestion: [],
  state: null, // 'wrongAnswer', 'corectAnswer', 'askAgain', 'greetings',

};

const operations = [
  {
    label: '+',
    formula: (a, b) => a + b,
  },
  {
    label: '-',
    formula: (a, b) => a - b,
  },
  {
    label: '*',
    formula: (a, b) => a * b,
  },
];

function generateTask() {
  const randomIntOperationInx = getRandomIntInclusive(0, 2);
  const randomInt1 = getRandomIntInclusive(0, 10);
  const randomInt2 = getRandomIntInclusive(0, 10);
  const randomIntOperation = operations[randomIntOperationInx];
  const newTask = {
    question: `${randomInt1} ${randomIntOperation.label} ${randomInt2}`,
    correctAnswer: `${randomIntOperation.formula(randomInt1, randomInt2)}`,
  };
  return newTask;
}

export default () => {
  gameCore(stateApp, { generateTask, explanationMsg });
};
