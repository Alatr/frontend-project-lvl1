import gameCore from '../index.js';
import getRandomInt from '../helpers.js';

const gameRule = 'What is the result of the expression?';

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
  const randomIntOperationInx = getRandomInt(0, operations.length - 1);
  const randomOperators1 = getRandomInt(0, 10);
  const randomOperators2 = getRandomInt(0, 10);
  const operation = operations[randomIntOperationInx];
  const task = {
    question: `Question: ${randomOperators1} ${operation.label} ${randomOperators2}`,
    correctAnswer: `${operation.formula(randomOperators1, randomOperators2)}`,
  };
  return task;
}

export default () => {
  gameCore({ generateTask, gameRule });
};
