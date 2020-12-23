import runGame from '../index.js';
import getRandomNum from '../get-random-num.js';

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
  const randomIntOperationIndex = getRandomNum(0, operations.length - 1);
  const randomOperator1 = getRandomNum(0, 10);
  const randomOperator2 = getRandomNum(0, 10);
  const operation = operations[randomIntOperationIndex];

  return {
    question: `${randomOperator1} ${operation.label} ${randomOperator2}`,
    correctAnswer: `${operation.formula(randomOperator1, randomOperator2)}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
