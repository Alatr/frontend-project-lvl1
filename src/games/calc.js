import runGame from '../index.js';
import getRandomInt from '../get-random-num.js';

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

function generateGameTask() {
  const randomIntOperationIndex = getRandomInt(0, operations.length - 1);
  const randomOperator1 = getRandomInt(0, 10);
  const randomOperator2 = getRandomInt(0, 10);
  const operation = operations[randomIntOperationIndex];

  return {
    question: `Question: ${randomOperator1} ${operation.label} ${randomOperator2}`,
    correctAnswer: `${operation.formula(randomOperator1, randomOperator2)}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
